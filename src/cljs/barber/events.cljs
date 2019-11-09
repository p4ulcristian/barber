(ns barber.events
  (:require
    [barber.db    :refer [default-db todos->local-store]]
    [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path after dispatch reg-fx]]
    [cljs.spec.alpha :as s]
    [barber.sente :as sente]
    [ajax.core :refer [GET POST]]
    [taoensso.sente  :refer (cb-success?)]
    [cljs.reader :as reader :refer [read-string]]))


(defn get-day-from-date [year month day]
  (let [date (new js/Date year (dec month) day)
        day-code (.getDay date)]
    (case day-code
      1 :monday
      2 :tuesday
      3 :wednesday
      4 :thursday
      5 :friday
      6 :saturday
      0 :sunday
      :unknown)))


(defn ajax-get [{:keys [url handler error-handler]}]
  (GET url
    {:handler handler
     :error-handler error-handler}))


(defn ajax-post [{:keys [url handler error-handler params]}]
  (POST url
    {:handler handler
     :params params
     :error-handler error-handler}))


(defn chsk-send [{:keys [event-key data callback]}]
 ;(.notification js/UIkit "Chsk event!")
       (sente/chsk-send! [event-key data] 8000
            (fn [reply]
                (if (cb-success? reply)
                    (callback reply)
                    (.log js/console "Sente error: " reply)))))


;; -- Interceptors --------------------------------------------------------------
;;
;; Interceptors are a more advanced topic. So, we're plunging into the deep
;; end here.
;;
;; There is a tutorial on Interceptors in re-frame's `/docs`, but to get
;; you going fast, here's a very high level description ...
;;
;; Every event handler can be "wrapped" in a chain of interceptors. A
;; "chain of interceptors" is actually just a "vector of interceptors". Each
;; of these interceptors can have a `:before` function and an `:after` function.
;; Each interceptor wraps around the "handler", so that its `:before`
;; is called before the event handler runs, and its `:after` runs after
;; the event handler has run.
;;
;; Interceptors with a `:before` action, can be used to "inject" values
;; into what will become the `coeffects` parameter of an event handler.
;; That's a way of giving an event handler access to certain resources,
;; like values in LocalStore.
;;
;; Interceptors with an `:after` action, can, among other things,
;; process the effects produced by the event handler. One could
;; check if the new value for `app-db` correctly matches a Spec.
;;


;; -- First Interceptor ------------------------------------------------------
;;
;; Event handlers change state, that's their job. But what happens if there's
;; a bug in the event handler and it corrupts application state in some subtle way?
;; Next, we create an interceptor called `check-spec-interceptor`.
;; Later, we use this interceptor in the interceptor chain of all event handlers.
;; When included in the interceptor chain of an event handler, this interceptor
;; runs `check-and-throw` `after` the event handler has finished, checking
;; the value for `app-db` against a spec.
;; If the event handler corrupted the value for `app-db` an exception will be
;; thrown. This helps us detect event handler bugs early.
;; Because all state is held in `app-db`, we are effectively validating the
;; ENTIRE state of the application after each event handler runs.  All of it.


(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

;; now we create an interceptor using `after`
(def check-spec-interceptor (after (partial check-and-throw :barber.db/db)))


;; -- Second Interceptor -----------------------------------------------------
;;
;; Part of the TodoMVC challenge is to store todos in local storage.
;; Next, we define an interceptor to help with this challenge.
;; This interceptor runs `after` an event handler, and it stores the
;; current todos into local storage.
;; Later, we include this interceptor into the interceptor chain
;; of all event handlers which modify todos.  In this way, we ensure that
;; every change to todos is written to local storage.
(def ->local-store (after todos->local-store))


;; -- Interceptor Chain ------------------------------------------------------
;;
;; Each event handler can have its own chain of interceptors.
;; We now create the interceptor chain shared by all event handlers
;; which manipulate todos.
;; A chain of interceptors is a vector of interceptors.
;; Explanation of the `path` Interceptor is given further below.
(def todo-interceptors [check-spec-interceptor    ;; ensure the spec is still valid  (after)
                        (path :todos)             ;; the 1st param given to handler will be the value from this path within db
                        ->local-store])            ;; write todos to localstore  (after)


;; -- Helpers -----------------------------------------------------------------

(defn allocate-next-id
  "Returns the next todo id.
  Assumes todos are sorted.
  Returns one more than the current largest id."
  [todos]
  ((fnil inc 0) (last (keys todos))))


;; -- Event Handlers ----------------------------------------------------------

;; usage:  (dispatch [:initialise-db])
;;
;; This event is dispatched in the app's `main` (core.cljs).
;; It establishes initial application state in `app-db`.
;; That means merging:
;;   1. Any todos stored in LocalStore (from the last session of this app)
;;   2. Default initial values
;;
;; Advanced topic:  we inject the todos currently stored in LocalStore
;; into the first, coeffect parameter via use of the interceptor
;;    `(inject-cofx :local-store-todos)`
;;
;; To fully understand this advanced topic, you'll have to read the tutorials
;; and look at the bottom of `db.cljs` for the `:local-store-todos` cofx
;; registration.



(reg-event-db
  :add-to-db
  (fn [db [_ the-map]]
    (merge db the-map)))

(reg-event-db
  :assoc-data-to-key
  (fn [db [_ the-key the-map]]
      (assoc db the-key the-map)))


(reg-fx
  :ajax
  (fn [config]
    (case (:method config)
      :get (ajax-get config)
      :post (ajax-post config)
      (.log js/console (str ":ajax :method does not exist.")))))

(reg-fx
  :chsk
  (fn [params]
    (chsk-send params)))

(reg-event-fx
  :ws-server-time
  (fn [_]
    {:chsk {}}))

(reg-event-db
  :add-calendar-data
  (fn [db [_ data]]
      (let [read-data (read-string data)
            data-with-id (map
                           #(assoc (second %) :reservation-id (str (first %)))
                           read-data)]

           (.log js/console (str data))
           (assoc db :calendar-data data-with-id))))



(reg-event-fx
  :get-reservations-and-breaks
  (fn [cofx [_ date]]
      {;:db (assoc (:db cofx) :reservations nil :breaks nil)
       :chsk {:event-key :calendar/get-reservations-and-breaks
              :data date
              :callback #(do
                           (dispatch [:dec-loader])
                           (dispatch [:assoc-data-to-key :reservations (:reservations %)])
                           (dispatch [:assoc-data-to-key :breaks (:breaks %)]))}}))

(reg-event-fx
  :get-employees
  (fn [_]
      {:dispatch [:inc-loader]
       :chsk {:event-key :employees/get-all
              :callback #(do
                           (dispatch [:dec-loader])
                           (dispatch [:assoc-data-to-key :employees %]))}}))

(reg-event-fx
  :get-services
  (fn [_]
      {:dispatch [:inc-loader]
       :chsk {:event-key :services/get-all
              :callback #(do
                           (dispatch [:dec-loader])
                           (dispatch [:assoc-data-to-key :services %]))}}))

(reg-event-fx
  :get-user-data
  (fn [_]
    {:dispatch [:inc-loader]
     :chsk {:event-key :user/get
            :callback #(do
                         (dispatch [:dec-loader])
                         (dispatch [:assoc-data-to-key :user-data %]))}}))

(reg-event-fx
  :get-opening-hours
  (fn [_]
      {:dispatch [:inc-loader]
       :chsk {:event-key :shop/opening-hours
              :callback #(do
                           (dispatch [:dec-loader])
                           (dispatch [:assoc-data-to-key :opening-hours %]))}}))

(reg-event-db
  :get-calendar-data
  (fn [db [_]]
      (dispatch [:get-opening-hours])
      (dispatch [:get-user-data])
      (dispatch [:get-services])
      (dispatch [:get-employees])
      (dispatch [:get-server-time])
      db))

(reg-event-db
  :netflix-counter-init
  (fn [db [_ id]]
    (assoc-in db [:netflix-counter id] 0)))

(reg-event-db
  :netflix-counter
  (fn [db [_ id]]
    (assoc-in db [:netflix-counter id] (inc (get-in  db [:netflix-counter id])))))

(reg-event-db
  :dec-loader
  (fn [db [_]]
    (if (= 1 (:loader-count db))
      (let [element (.getElementById js/document "x-loader")]
        (.add (.-classList element) "animated-hide")
        (.setTimeout js/window
                     #(aset (.-style element) "display" "none")
                     1500)))
    (assoc db :loader-count (dec (:loader-count db)))))

(reg-event-db
  :inc-loader
  (fn [db [_]]
    (assoc db :loader-count (inc (:loader-count db)))))

(reg-event-db
  :select-date
  (fn [db [_ date]]
    (dispatch [:get-reservations-and-breaks date])
    (assoc db
      :reservations nil
      :breaks nil
      :selected-date date
      :selected-day (apply get-day-from-date
                          (clojure.string/split date #"-")))))



(reg-event-fx
  :get-server-time
  (fn [_]
      {:dispatch [:inc-loader]
       :ajax {:method :get
              :url "/server-time"
              :handler #(do
                          (dispatch [:select-date (first (read-string %))]))
              :error-handler #(.log js/console "Failed to get server-time")}}))

(reg-event-fx
  :get-user
  (fn [_]
      {:ajax {:method :get
              :url "/user"
              :handler #(dispatch [:add-to-db {:user (cljs.reader/read-string %)}])
              :error-handler #(.log js/console "Failed to get user")}}))


(reg-event-fx
  :post-request
  (fn [_]
      {:ajax {:method :post
              :url "/post-request"
              :params {:callback-data "data"}
              :handler #(dispatch [:add-to-db {:post-request (:params %)}])
              :error-handler #(.log js/console (str "Failed to post request: " %))}}))

(reg-event-fx
  :add-to-mongo
  (fn [_]
      {:ajax {:method :post
              :url "/add-to-mongo"
              :handler #(.notification js/UIkit "Added item to database")
              :error-handler #(.log js/console (str "Failed to add to mongo: " %))}}))

(reg-event-fx
  :add-user
  (fn [_ [_ params]]
      {:ajax {:method :post
              :url "/add-user"
              :params params
              :handler #(.notification js/UIkit (str %))

              :error-handler #(.log js/console (str "Failed to add user " %))}}))


(reg-event-fx                 ;; part of the re-frame API
  :initialise-db              ;; event id being handled

  ;; the interceptor chain (a vector of 2 interceptors in this case)
  [(inject-cofx :local-store-todos) ;; gets todos from localstore, and puts value into coeffects arg
   check-spec-interceptor]          ;; after event handler runs, check app-db for correctness. Does it still match Spec?

  ;; the event handler (function) being registered
  (fn [{:keys [db local-store-todos]} _]                  ;; take 2 values from coeffects. Ignore event vector itself.
    {:db (assoc default-db
           :todos local-store-todos
           :loader-count 0
           :netflix-counter {}
           :sidebar-open? true
           :actual-page :calendar)}))   ;; all hail the new state to be put in app-db


;; usage:  (dispatch [:set-showing  :active])
;; This event is dispatched when the user clicks on one of the 3
;; filter buttons at the bottom of the display.
(reg-event-db      ;; part of the re-frame API
  :set-showing     ;; event-id

  ;; only one interceptor
  [check-spec-interceptor]       ;; after event handler runs, check app-db for correctness. Does it still match Spec?

  ;; handler
  (fn [db [_ new-filter-kw]]     ;; new-filter-kw is one of :all, :active or :done
    (assoc db :showing new-filter-kw)))

;; NOTE: below is a rewrite of the event handler (above) using a `path` Interceptor
;; You'll find it illuminating to compare this rewrite with the original.
;;
;; A `path` interceptor has BOTH a before and after action.
;; When you create one, you supply "a path" into `app-db`, like:
;; [:a :b 1]
;; The job of "before" is to replace the app-db with the value
;; of `app-db` at the nominated path. And, then, "after" to
;; take the event handler returned value and place it back into
;; app-db at the nominated path.  So the event handler works
;; with a particular, narrower path within app-db, not all of it.
;;
;; So, `path` operates a little like `update-in`
;;
#_(reg-event-db
   :set-showing

  ;; this now a chain of 2 interceptors. Note use of `path`
   [check-spec-interceptor (path :showing)]

  ;; The event handler
  ;; Because of the `path` interceptor above, the 1st parameter to
  ;; the handler below won't be the entire 'db', and instead will
  ;; be the value at the path `[:showing]` within db.
  ;; Equally the value returned will be the new value for that path
  ;; within app-db.
   (fn [old-showing-value [_ new-showing-value]]
     new-showing-value))                  ;; return new state for the path


;; usage:  (dispatch [:add-todo  "a description string"])
(reg-event-db                     ;; given the text, create a new todo
  :add-todo

  ;; Use the standard interceptors, defined above, which we
  ;; use for all todos-modifying event handlers. Looks after
  ;; writing todos to LocalStore, etc.
  todo-interceptors

  ;; The event handler function.
  ;; The "path" interceptor in `todo-interceptors` means 1st parameter is the
  ;; value at `:todos` path within `db`, rather than the full `db`.
  ;; And, further, it means the event handler returns just the value to be
  ;; put into the `[:todos]` path, and not the entire `db`.
  ;; So, againt, a path interceptor acts like clojure's `update-in`
  (fn [todos [_ text]]
    (let [id (allocate-next-id todos)]
      (assoc todos id {:id id :title text :done false}))))


(reg-event-db
  :toggle-done
  todo-interceptors
  (fn [todos [_ id]]
    (update-in todos [id :done] not)))


(reg-event-db
  :save
  todo-interceptors
  (fn [todos [_ id title]]
    (assoc-in todos [id :title] title)))


(reg-event-db
  :delete-todo
  todo-interceptors
  (fn [todos [_ id]]
    (dissoc todos id)))


(reg-event-db
  :clear-completed
  todo-interceptors
  (fn [todos _]
    (let [done-ids (->> (vals todos)         ;; which todos have a :done of true
                        (filter :done)
                        (map :id))]
      (reduce dissoc todos done-ids))))      ;; delete todos which are done


(reg-event-db
  :complete-all-toggle
  todo-interceptors
  (fn [todos _]
    (let [new-done (not-every? :done (vals todos))]   ;; work out: toggle true or false?
      (reduce #(assoc-in %1 [%2 :done] new-done)
              todos
              (keys todos)))))
