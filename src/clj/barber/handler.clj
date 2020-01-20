(ns barber.handler
  (:require
    [reitit.ring :as reitit-ring]
    ;[barber.middleware :refer [middleware]]
    [barber.views :as views]
    [barber.email :as email]
    [barber.schedule :as schedule]
    [barber.db :as db]
    [taoensso.sente :as sente]
    [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
    [taoensso.encore :as encore :refer (have have?)]
    [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
    [taoensso.sente :as sente]
    [ring.middleware.defaults]
    [hiccup.core :as hiccup]
    [compojure.core :as comp :refer (defroutes GET POST)]
    [compojure.route :as route]
    [ring.middleware.anti-forgery :as anti-forgery :refer :all]
    [ring.middleware.session :refer :all]
    [clj-time.core :as t]
    [org.httpkit.server :as http-kit]
    [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
    [buddy.hashers :as hashers]
    [buddy.auth :refer [authenticated?]]
    [ring.util.response :refer [response redirect]]
    [buddy.auth.backends.session :refer [session-backend]]
    [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
    [ring.middleware.params :refer [wrap-params]]
    [taoensso.sente.packers.transit :as sente-transit]
    [ring.middleware.transit :refer [wrap-transit-params]]
    [clojure.java.io :as io])
  (:gen-class)
  (:import [com.mongodb MongoOptions ServerAddress]
           org.bson.types.ObjectId))

(System/setOut (java.io.PrintStream. (org.apache.commons.io.output.WriterOutputStream. *out*) true))


(defn uuid [] (java.util.UUID/randomUUID))

;Creating user with hash
(comment
  (defn create-user! [user]
    (let [password (:password user)
          user-id (uuid)]
      (-> user
          (assoc :id user-id :password-hash (hashers/encrypt password))
          (dissoc :password)
          (->> (swap! userstore assoc user-id))))))

(defn post-login [req]
  "Logging in users with login-page"
  (let [user-name (-> req :form-params (get "username"))
        password (-> req :form-params (get "password"))
        session (:session req)
        user (db/get-user user-name)
        user-hash (:password user)
        user-role (:role user)
        shop-id (:shop-id user)]
    (if (= password user-hash)
      ;Amig tesztelek
      ;(hashers/check password user-hash)
     (assoc (redirect "/calendar")
            :session (assoc session
                       :identity user-name
                       :role user-role
                       :uid shop-id
                       ;:name username
                       :shop-id shop-id))

     (redirect "/login"))))

(defn post-logout [{session :session}]
  "Logging out username"
  (assoc (redirect "/login")
         :session (dissoc session :identity)))


(defn request-wrap [status content-type body]
  "wrap request with status and headers"
  {:status status
   :headers {"Content-Type" content-type}
   :body body})

(defn html-wrap [content]
  "Wrap Html"
  (request-wrap 200 "text/html" content))

(defn png-wrap [photo-name]
  "Wrap png"
  (request-wrap 200 "image/jpeg" (io/file (str "logos/" photo-name))))

(defn text-wrap [content]
  "Wrap Plain Text"
  (request-wrap 200 "text/plain" content))

(defn pdf-wrap [content]
  "Wrap PDF"
  (request-wrap 200 "application/pdf" content))

(defn random-post [_request]
  "Random post"
  (text-wrap (str (t/now))))

(defn server-time-handler
  [_request]
  (let [with-offset (fn [date] (t/to-time-zone date (t/time-zone-for-id "Europe/Budapest")))
        today (with-offset (t/now))]
    (text-wrap (str (clojure.string/split
                      (str today)
                      #"T")))))


(reset! sente/debug-mode?_ true)

(def connected-users (atom {}))

(defn update-connected-users [data uids]
  "Add connecting sente channels to users"
  (let [client-id (-> :client-id data)
        uuids (-> data :connected-uids)] ;:client-id)]
    (swap! connected-users assoc "unknown"
       (conj
         (get @connected-users "unknown" [])
         client-id)
       "uuids" @uuids)))


(let [packer :edn
      chsk-server
      (sente/make-channel-socket-server!
       (get-sch-adapter) {:packer packer})
      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

    (def ring-ajax-post                ajax-post-fn)
    (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
    (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
    (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
    (def connected-uids                connected-uids) ; Watchable, read-only atom


  (add-watch connected-uids :connected-uids
    (fn [_ _ old new]
      (when (not= old new)
        (infof "Connected uids change: %s" new))))


  (defn test-fast-server>user-pushes
    "Quickly pushes 100 events to all connected users. Note that this'll be
    fast+reliable even over Ajax!"
    []
    (doseq [uid (:any @connected-uids)]
      (doseq [i (range 100)]
        (chsk-send! uid [:fast-push/is-fast (str "hello " i "!!")]))))

  (comment (test-fast-server>user-pushes))

  (defonce broadcast-enabled?_ (atom true))

  (defn start-example-broadcaster!
    "As an example of server>user async pushes, setup a loop to broadcast an
    event to all connected users every 10 seconds"
    []
    (let [broadcast!
          (fn [i]
            (let [uids (:any @connected-uids)]
              (debugf "Broadcasting server>user: %s uids" (count uids))
              (doseq [uid uids]
                (chsk-send! uid
                  [:calendar/update
                   {:date "2020-04-20"
                    :to-whom uid
                    :i i}]))))]

      (go-loop [i 0]
        (<! (async/timeout 10000))
        (when @broadcast-enabled?_ (broadcast! i))
        (recur (inc i)))))

  (defn calendar-update [req date]
    (let [shop-id (:shop-id req)]
      (chsk-send! shop-id [:calendar/update
                           {:date date}])))

  ;;;; Sente event handlers

  (defmulti -sente-messages
    "Multimethod to handle Sente `event-msg`s"
    :id) ; Dispatch on event-id


  (defn sente-messages
    "Wraps `-sente-messages` with logging, error catching, etc."
    [{:as ev-msg :keys [id ?data event]}]
    (-sente-messages ev-msg)) ; Handle event-msgs on a single thread
    ;; (future (-sente-messages ev-msg)) ; Handle event-msgs on a thread pool


  (defmethod -sente-messages
    :default ; Default/fallback case (no other matching handler)
    [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
    (let [session (:session ring-req)
          uid     (:uid     session)]
      ;(debugf "Unhandled event: %s" event)
      (when ?reply-fn
        (?reply-fn {:umatched-event-as-echoed-from-server event}))))

  (defmethod -sente-messages :chsk/uidport-open
      [{:as ev-msg :keys [?reply-fn]}]
      (update-connected-users  ev-msg @connected-uids))

  (defmethod -sente-messages :example/test-rapid-push
    [ev-msg] (test-fast-server>user-pushes))

  (defmethod -sente-messages :example/hello-there
      [{:as ev-msg :keys [?reply-fn]}]
      (?reply-fn {:data "hmmdsadas"}))


  ;Calendar events

  (defmethod -sente-messages :calendar/get-reservations-and-brakes
                [{:as ev-msg :keys [?reply-fn ?data ring-req]}]
                (?reply-fn (db/get-reservations-and-brakes-from-calendar ?data ring-req)))

  (defmethod -sente-messages :calendar/add-modify-event
             [{:as ev-msg :keys [?reply-fn ?data ring-req]}]
    (calendar-update ring-req (:date ?data))
    (?reply-fn (db/send-res-agent
                 (fn []
                   (do
                     (db/add-log (:shop-id ring-req)
                                 (assoc ?data :type "add-modify-by-employee"))
                     (db/calendar-add-modify-event-employee ?data ring-req))))))

  (defmethod -sente-messages :calendar/remove-event
             [{:as ev-msg :keys [?reply-fn ?data ring-req]}]
    (calendar-update ring-req (:date ?data))
    (?reply-fn
      (do
        (db/add-log (:shop-id ring-req) (assoc ?data :type "remove-by-employee"))
        (db/calendar-remove-event
          (:shop-id ring-req)
          (:reservation-id ?data)))))


  ;Brakes events

  (defmethod -sente-messages :brakes/get-brake-types
   [{:as ev-msg :keys [?reply-fn ring-req]}]
   (?reply-fn (db/get-brake-types ring-req)))

  (defmethod -sente-messages :brakes/remove-brake-type
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/remove-brake-type ring-req ?data)))

  (defmethod -sente-messages :brakes/add-brake-type
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/add-brake-type ring-req ?data)))

  (defmethod -sente-messages :brakes/add-brakes-to-dates
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/add-brakes-to-dates ring-req ?data)))

  (defmethod -sente-messages :brakes/get-brakes-on-dates
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/get-brakes-on-dates ring-req ?data)))

  ;Client events

  (defmethod -sente-messages :clients/get-some
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/get-some-clients
                 (:shop-id ring-req)
                 (:skip ?data))))

  (defmethod -sente-messages :clients/get-count
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/get-clients-count
                 (:shop-id ring-req))))



  (defmethod -sente-messages :employee-service/add
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/add-employee-service ring-req (:the-key ?data))))

  (defmethod -sente-messages :employee-service/add
    [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
    (?reply-fn (db/remove-employee-service ring-req
                                        (:the-key ?data)
                                        (:_id ?data))))

  ;Employee events

  (defmethod -sente-messages :employees/get-all
             [{:as ev-msg :keys [?reply-fn ring-req]}]
             (?reply-fn (db/get-employees ring-req)))

  (defmethod -sente-messages :employees/add
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :employees/add)))

  (defmethod -sente-messages :employees/modify
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :employees/modify)))

  (defmethod -sente-messages :employees/remove
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :employees/remove)))

  (defmethod -sente-messages :employees/add-break
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :employees/add-break)))

  (defmethod -sente-messages :employees/modify-positions
             [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
             (?reply-fn (db/modify-positions
                         (:shop-id (:session ring-req))
                         ?data)))

  (defmethod -sente-messages :employees/modify-item
             [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
             (?reply-fn (db/modify-item
                         (:shop-id (:session ring-req))
                         ?data)))

  ;Service-events
  (defmethod -sente-messages :services/get-all
             [{:as ev-msg :keys [?reply-fn ring-req]}]
             (?reply-fn (db/get-services ring-req)))

  (defmethod -sente-messages :services/add
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :services/add)))

  (defmethod -sente-messages :services/modify
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :services/modify)))

  (defmethod -sente-messages :services/remove
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :services/remove)))

  (defmethod -sente-messages :services/modify-positions
             [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
             (?reply-fn (db/modify-positions
                         (:shop-id (:session ring-req))
                         ?data)))

  (defmethod -sente-messages :services/modify-item
             [{:as ev-msg :keys [?reply-fn ring-req ?data]}]
             (?reply-fn (db/modify-item
                         (:shop-id (:session ring-req))
                         ?data)))

  ;User events

  (defmethod -sente-messages :users/add
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :users/add)))
  (defmethod -sente-messages :users/modify
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :users/modify)))
  (defmethod -sente-messages :users/remove
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :users/remove)))

  (defmethod -sente-messages :user/get
    [{:as ev-msg :keys [?reply-fn ring-req]}]
    (?reply-fn (let [session (:session ring-req)
                     {:keys [identity role shop-id]} session]
                 {:identity identity
                  :role role
                  :shop-id shop-id})))

  ;Brakes events

  (defmethod -sente-messages :brakes/add
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :brakes/add)))
  (defmethod -sente-messages :brakes/remove
             [{:as ev-msg :keys [?reply-fn]}]
             (?reply-fn (str :brakes/remove)))

  ;Shop events
  (defmethod -sente-messages :shop/opening-hours
            [{:as ev-msg :keys [?reply-fn ring-req]}]
            (?reply-fn (db/get-opening-hours ring-req)))






  (defmethod -sente-messages :example/toggle-broadcast
    [{:as ev-msg :keys [?reply-fn]}]
    (let [loop-enabled? (swap! broadcast-enabled?_ not)]
      (?reply-fn loop-enabled?)))


  (defonce router_ (atom nil))
  (defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
  (defn start-router! []
    (stop-router!)
    (reset! router_
      (sente/start-server-chsk-router!
        ch-chsk sente-messages))))






(def backend
  "For The Buddy authenticating services"
  (session-backend))

(defn custom-error-handler [request]
  "Missing anti-forgery response"
  (request-wrap 403 "text/html" "<h1>Missing anti-forgery token</h1>"))

(defn get-shop-id [request]
  (let [host (get (:headers request) "host")
        id (first (clojure.string/split host #"\."))]
    (str id)))


(defn wrap-shop-id [handler]
  (fn [request]
    (let [shop-id (-> request get-shop-id)
          db-shop (let [item (db/shop-data request)]
                    (if (= "" item)
                      nil
                      item))]

      (if db-shop
        (handler (assoc request :shop-id shop-id))
        (handler (assoc request :shop-id (:shop-id (:session request))))))))

(def email-config
  {:employee "5c589602264661cd54af882e"
   :service "5c589d29264661cd54af884a"
   :date "2012-02-12"
   :start 900
   :language :hu
   :shop "szeged"
   :user {:name "Paul"}})

(def app
  (do
    (start-router!)
    (reitit-ring/ring-handler
     (reitit-ring/router
      [["/" {:get {:handler (fn [req] (html-wrap (views/client-page req)))}}]
       ["/email" {:get {:handler (fn [req] (html-wrap
                                             (email/pls-confirm-email (db/shop-data req)
                                                                      email-config)))}}]
       ["/email1" {:get {:handler (fn [req] (html-wrap
                                              (email/successful-confirmation-email (db/shop-data req)
                                                                                   email-config)))}}]
       ["/email2" {:get {:handler (fn [req] (html-wrap
                                              (email/successful-cancellation-email
                                                (db/shop-data req)
                                                email-config)))}}]
       ["/reserve" {:post {:handler (fn [req] (text-wrap
                                                (let [shop-data (db/shop-data req)
                                                      oid (ObjectId.)
                                                      res-params (assoc (:params req) :reservation-id (str oid))]
                                                  (db/send-res-agent
                                                    (fn []
                                                      (do
                                                        (calendar-update req (:date res-params))
                                                        (schedule/do-in-30-minutes
                                                          (str oid)
                                                          #(do
                                                             (db/calendar-remove-event (:_id (read-string  shop-data))
                                                                                       (:remove %))
                                                             (db/add-log (:shop-id (:req %)) (:res-params (:res-params %)))
                                                             (apply email/send-email (:email %))
                                                             (calendar-update (:req %)
                                                                              (:date %)))
                                                          {:remove (str oid)
                                                           :req req
                                                           :res-params (assoc res-params :type "automatic-cancel")
                                                           :date (:date res-params)
                                                           :email [:auto-cancel
                                                                   (db/shop-data req)
                                                                   (assoc res-params :email (:email (:user res-params)))]})


                                                        (if (= "success" (db/calendar-add-event (:shop-id req) (assoc
                                                                                                                 (dissoc res-params :user)
                                                                                                                 :confirmed? false
                                                                                                                 :name (:name (:user res-params))
                                                                                                                 :email (:email (:user res-params))
                                                                                                                 :phone (:phone (:user res-params)))))
                                                          (do
                                                            (db/add-client
                                                              (:shop-id req)
                                                              (:user res-params))
                                                            (email/send-email
                                                              :pls-confirm
                                                              shop-data
                                                              (assoc res-params :email (:email (:user res-params))))
                                                            (db/add-log (:shop-id req) (assoc res-params :type "reserve-by-guest"))
                                                            "success")
                                                          "reserved")))))))}}]

       ["/req" {:get {:handler (fn [req] (text-wrap (str req)))}}]
       ["/confirm/:res-id" {:get {:handler (fn [req] (html-wrap
                                                       (let [this-reservation (db/get-reservation-for-email (:shop-id req) (:res-id (:path-params req)))]
                                                         (if
                                                           (= true (:confirmed? this-reservation))
                                                           (views/successful-confirm req)
                                                           (if (= 1 (db/calendar-confirm-event
                                                                      (:shop-id req) (:res-id (:path-params req))))
                                                             ;true
                                                             (do
                                                               (db/confirm-client (:shop-id req) (:email this-reservation))
                                                               (email/send-email
                                                                 :confirm
                                                                 (db/shop-data req)
                                                                 (merge {:reservation-id (:res-id (:path-params req))
                                                                         :language :hu}
                                                                        this-reservation))
                                                               (db/add-log (:shop-id req) (assoc this-reservation :type "confirm-by-guest"))
                                                               (calendar-update req (:date this-reservation))
                                                               (views/successful-confirm req))
                                                             (views/unsuccessful-confirm req))))))}}]
       ["/cancel/:res-id" {:get {:handler (fn [req] (html-wrap
                                                      (let [this-res (db/get-reservation-for-email (:shop-id req) (:res-id (:path-params req)))]
                                                        (if (= 1 (db/calendar-remove-event (:shop-id req) (:res-id (:path-params req))))
                                                          (do
                                                            (email/send-email
                                                              :cancel
                                                              (db/shop-data req)
                                                              this-res)
                                                            (schedule/delete-task-from-schedule (:res-id (:path-params req)))
                                                            (db/add-log (:shop-id req) (assoc this-res :type "cancel-by-guest"))
                                                            (calendar-update req (:date this-res))
                                                            (views/successful-cancel req))
                                                          (views/unsuccessful-cancel req)))))}}]

       ["/files/:name" {:get {:handler (fn [req] (pdf-wrap (io/resource "/files/szeged-altalanos.pdf")))}}]
       ["/logo/:name" {:get {:handler (fn [req] (png-wrap (str (:name (:path-params req)) ".png")))}}]
       ["/calendar" {:get {:handler (fn [req]
                                        (if (authenticated? (:session req))
                                          (html-wrap (views/loading-page))
                                          (redirect "/login")))}}]
       ["/server-time" {:get {:handler (fn [req] (server-time-handler req))}}]

       ["/get-employees-and-services" {:get {:handler (fn [req] (text-wrap (db/get-employees-and-services  req)))}}]
       ;(db/get-employees-and-services %))}}]
       ["/get-free-dates/:employee/:length"
        {:get {:handler (fn [req] (text-wrap (db/get-free-dates req)))}}]
       ["/min-max-date" {:get {:handler (fn [req] (text-wrap (db/min-max-date)))}}]
       ["/get-free-times/:employee/:date" {:get {:handler (fn [req] (text-wrap (db/get-free-times req)))}}]
       ["/shop-data" {:get {:handler (fn [req] (text-wrap (db/shop-data req)))}}]


       ["/add-reservation" {:post {:handler #()}}]


       ["/post-request" {:post {:handler (fn [req] (text-wrap (str (:params req))))}}]
       ["/login" {:get (fn [req] (html-wrap (views/login-page req)))
                  :post post-login}]
       ["/add-user" {:post (fn [req]
                             (let [params (:params req)]))}]
                              ;(text-wrap (db/add-user (assoc params :password (hashers/encrypt (:password params)))))))}]
       ["/logout" {:get {:handler post-logout}}]
       ;["/user" {:get (fn [req] (request-wrap 200 "text/plain" (:identity (:session req))))}]
       ["/users" {:get (fn [req] (request-wrap 200 "text/plain" (str @connected-users)))}]
       ["/chsk" {:get ring-ajax-get-or-ws-handshake
                 :post ring-ajax-post}]
       ["/items"
        ["" {:get {:handler (html-wrap (views/loading-page))}}]
        ["/:item-id" {:get {:handler (html-wrap (views/loading-page))
                            :parameters {:path {:item-id int?}}}}]]
       ["/about" {:get {:handler (fn [req] (html-wrap (views/loading-page)))}}]])
     (reitit-ring/routes
      (reitit-ring/create-resource-handler {:path "/" :root "/public"})
      (reitit-ring/create-default-handler))
     {:middleware
       [ring.middleware.keyword-params/wrap-keyword-params
        ring.middleware.params/wrap-params
        #(wrap-transit-params % {:opts {}})
        #(wrap-authentication % backend)
        #(wrap-authorization % backend)
        #(wrap-defaults % (assoc-in site-defaults [:security :anti-forgery] true))
        #(wrap-shop-id %)]})))
