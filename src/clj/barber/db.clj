(ns barber.db
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [monger.query :as query])
  (:import [com.mongodb MongoOptions ServerAddress]
           org.bson.types.ObjectId))

(defn get-shop-id [request]
      (:shop-id request))

(defn dissoc-ids [items]
      (map #(dissoc % :_id) items))

(defn map-to-str-id [coll]
      (mapv #(assoc % :_id (str (:_id %)))
            coll))


(def date-parser (f/formatter (t/default-time-zone) "YYYY-MM-dd" "YYYY/MM/dd"))


(defn min-max-date []
  (let [with-offset (fn [date] (t/to-time-zone date (t/time-zone-for-id "Europe/Budapest")))
        today (with-offset (t/now))
        two-week-offset (t/plus today (t/weeks 2))]
    (str [(f/unparse date-parser today)
          (f/unparse date-parser two-week-offset)])))


;ezt meg at kell gondolni
(defn get-date-vector-in-offset []
  (let [with-offset (fn [date] (t/to-time-zone date (t/time-zone-for-id "Europe/Budapest")))
        today (with-offset (t/now))
        two-week-offset (t/plus today (t/weeks 2))
        month (t/month today)
        year (t/year today)
        first-day (t/day today)
        last-day (t/day two-week-offset)
        date-range (range first-day (inc last-day))
        generate-dates (map
                         #(t/plus today (t/days %))
                         (range 15))]

    (mapv #(f/unparse date-parser %)
          generate-dates)))

(def reservation-queue (agent {}))
(set-error-handler! reservation-queue(fn [a e]
                                       (future
                                         (println :21 "restarting agent...")
                                         (restart-agent reservation-queue {})
                                         (println :22 "agent restarted, state=" @a))))

(defn send-res-agent [res-func]
  (println (str "to agent: " @reservation-queue))
  (await (send reservation-queue (fn [a]
                                   (println "Reservation add started.") ;(str (res-func)))
                                   (assoc a :data (res-func)))))
  (str (:data @reservation-queue)))


(defn generate-free-times [reservation-vectors opening-hours]
  (let [reserved-within-opening-hours  (concat
                                         [[(first opening-hours)]]
                                         reservation-vectors
                                         [[(second opening-hours)]])
        sorted-reserved (fn [coll]
                          (sort-by (juxt first #(= 2 (count %)))
                                   coll))
        expand-vectors (fn [coll] (vec (reduce concat [] coll)))
        re-arrange-to-free-times (fn [coll] (partition 2 coll))
        filter-valid-free-times (fn [coll] (filter #(not= (first %)
                                                          (second %))
                                                   coll))]
    (-> reserved-within-opening-hours
        sorted-reserved
        expand-vectors
        re-arrange-to-free-times
        filter-valid-free-times)))



(defn is-free? [free-times reservation-vec]
  "[[]] [] compares the free-times vector to the reservation vector"
  (let [[first-res second-res] reservation-vec]
    (if free-times
      (some true?
            (for [[first-free second-free] free-times]
              (if (and (>= first-res first-free)
                       (<= first-res second-free)
                       (>= second-res first-free)
                       (<= second-res second-free))
                true false)))
      true)))





(defn decide-day [date]
  (let [this-date (f/parse date-parser date)
        this-day (t/day-of-week this-date)]
    (case this-day
      1 :monday
      2 :tuesday
      3 :wednesday
      4 :thursday
      5 :friday
      6 :saturday
      7 :sunday)))

(defn extend-opening-hours [free-times opening-hours]
  "[[] [] []] , [] compares the original free-times to the opening-hours and extends it
  for the offset opening hours"
  (let [extend-start (fn [this-free-times]
                       (if (= (first (first this-free-times))
                              (first opening-hours))
                         (vec
                          (concat [[(- (first opening-hours) 90) ;Ez a nyitvatartas hosszabitasa ha a free-times elso vektoranak elso eleme megegyezik a nyitvatartas kezdetevel
                                    (second (first this-free-times))]] ;A vektor masodik eleme a free-times elso elemenek az utolso eleme
                                  (rest this-free-times)))
                         (vec
                          (concat [[(- (first opening-hours) 90)  ;Ez a nyitvatartas ha a nyitvatartas hosszabitasa nem fugg ossze a
                                    (first opening-hours)]]
                                  this-free-times))))
        extend-end (fn [this-free-times]
                       (if (= (last (last this-free-times))
                              (last opening-hours))
                         (vec
                          (concat
                           (butlast this-free-times)
                           [[(first (last this-free-times))
                             (+ (last opening-hours) 90)]])) ;A vektor masodik eleme a free-times elso elemenek az utolso eleme

                         (vec
                          (concat
                           this-free-times
                           [[(last opening-hours)
                             (+ (last opening-hours) 90)]]))))]
     (extend-end (extend-start free-times))))  ;Ez a nyitvatartas ha a nyitvatartas hosszabitasa nem fugg ossze a



(defn get-longest [free-times]
  (if (not= [] free-times)
    (apply max (map #(let [[a b] %] (- b a))
                    free-times))
    0))



(defn set-to-ranges [the-set]
  (let [number-vector (vec the-set)]
    (:new-res
      (reduce
        (fn [till-now this]
          (if
            (= 1
               (- (get number-vector (inc (:index till-now)) 0)
                  (get number-vector (:index till-now) 0)))


            (assoc till-now :new-res (:new-res till-now)
                            :index (inc (:index till-now)))
            (assoc till-now :new-res (if-let [meh (get number-vector (inc (:index till-now)))]
                                       (conj (conj (:new-res till-now) this)
                                             meh)
                                       (conj (:new-res till-now) this))
                            :index (inc (:index till-now)))))
        {:new-res [(first number-vector)]
         :index 0}
        number-vector))))

(defn make-range [[start end]]
  (range start (inc end)))

(defn make-ranges [the-ranges]
  (map make-range the-ranges))

(defn merge-brakes-with-reservations [brakes reservations]
  (let []
    (mapv vec (partition 2
                         (set-to-ranges
                           (sort (set
                                   (reduce concat (make-ranges (concat brakes reservations))))))))))

(defn make-reservations-from-map [brakes reservations]
  (merge-brakes-with-reservations
    brakes
    (mapv #(vector
             (:start %)
             (+ (:start %) (:length %)))
         (map second reservations))))

(defn make-free-times-from-res-and-brakes [reservations brakes opening-hours]
  (let [brakes-and-reservations (make-reservations-from-map brakes reservations)
        filtered-b-and-r (vec (filter
                                (fn [this-res]
                                  (let
                                    [[res-start res-end] this-res
                                     [open-start open-end] opening-hours]
                                    (and
                                      (not (<= res-end open-start))
                                      (not (<= open-end res-start)))))
                                brakes-and-reservations))]
    (if brakes
      (generate-free-times
        filtered-b-and-r
        opening-hours)
      [])))

(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "barber")]

     (defn get-some-clients [shop-id skip-number]
       (map-to-str-id
         (query/with-collection db (str shop-id "_clients")
                          (query/find {})
                          ;(fields [:score :name])
                          ;; it is VERY IMPORTANT to use array maps with sort
                          (query/sort (array-map :_id -1))
                          (query/limit 20)
                          (query/skip skip-number))))

     (defn add-log [shop-id the-log]
       (let [with-offset (fn [date] (t/to-time-zone date (t/time-zone-for-id "Europe/Budapest")))
             today (with-offset (t/now))
             [timestamp-date timestamp-time] (clojure.string/split (str today) #"T")]
         (mc/insert-and-return db "logs" (assoc the-log :shop-id shop-id
                                                        :timestamp-date timestamp-date
                                                        :timestamp-time timestamp-time))))


     (defn add-client [shop-id user]
       (let [coll (str shop-id "_clients")
             this-client (mc/find-one-as-map db coll {:email (:email user)})]
         (mc/update db coll
                    {:email {:email user}}
                    {"$set" (assoc
                              (dissoc user :email)
                              :confirmed
                              (if this-client
                                true
                                false))}
                    {:upsert true})))

     (defn confirm-client [shop-id email]
      (let [coll (str shop-id "_clients")]
        (mc/update db coll
                   {:email {:email email}}
                   {"$set" {:confirmed true}})))

     (defn get-clients-count [shop-id]
       (mc/count db (str shop-id "_clients")))

     (defn get-opening-hours-on-day [shop-id date]
       "Gives the opening hours vector for a day."
       (let [day (decide-day date)
             this-shop (mc/find-one-as-map db "shops" {:_id shop-id})]
         (get (:opening-hours this-shop) day)))

     (defn extend-free-time-to-employee [free-times date shop-id]
       "Extend free-times with 90 minutes"
       (let [opening-hours (get-opening-hours-on-day shop-id date)]
         (if (empty? opening-hours)
           []
           (extend-opening-hours free-times opening-hours))))



     (defn get-user [username]
       (let [user (mc/find-one-as-map db "users" { :username username})]
         user))













     (defn calendar-add-event [shop-id data]
            (let [generated-id (if (:reservation-id data)
                                 (str (:reservation-id data))
                                 (str  (ObjectId.)))
                  coll (str shop-id "_calendar")
                  calendar-column (mc/find-one-as-map db coll {:date (:date data)
                                                               :employee (:employee data)})
                  reservations (:reservations calendar-column)
                  old-opening-hours (get-opening-hours-on-day shop-id (:date data))
                  brakes (:brakes calendar-column)
                  free-times (make-free-times-from-res-and-brakes (assoc reservations generated-id data)
                                                                  brakes
                                                                  old-opening-hours)]
              (if (is-free?
                    (:free-times calendar-column)
                    [(:start data) (+ (:start data) (:length data))])
                (do (mc/update db coll
                               {:date (:date data) :employee (:employee data)}
                               {"$set" {(str "reservations." generated-id) (dissoc data :date :employee)
                                        :longest (get-longest free-times)
                                        :free-times free-times}}
                                        ;:lel (str (assoc reservations generated-id data))}}
                               {:upsert true})
                    "success")
                "reserved")))




     (defn calendar-add-event-employee [shop-id data]
       (let [generated-id (str  (ObjectId.))
             coll (str shop-id "_calendar")
             calendar-column (mc/find-one-as-map db coll {:date (:date data)
                                                          :employee (:employee data)})
             reservations (:reservations calendar-column)
             old-opening-hours (get-opening-hours-on-day shop-id (:date calendar-column))
             brakes (:brakes calendar-column)
             free-times (make-free-times-from-res-and-brakes (assoc reservations generated-id data)
                                                             brakes
                                                             old-opening-hours)]
         (if (is-free?
               (extend-free-time-to-employee (:free-times calendar-column)
                                             (:date data)
                                             shop-id)
               [(:start data) (+ (:start data) (:length data))])
           (do (mc/update db coll
                          {:date (:date data) :employee (:employee data)}
                 {"$set" {(str "reservations." generated-id) (dissoc data :date :employee)
                          :longest (get-longest free-times)
                          :free-times free-times}}
                 {:upsert true})
               "success")
           "reserved")))



     (defn calendar-remove-event [shop-id res-id]
       (let [coll (str shop-id "_calendar")
             calendar-column (mc/find-one-as-map db coll {(str "reservations." res-id) {"$exists" true}})
             new-free-times (if calendar-column (make-free-times-from-res-and-brakes
                                                  ;Kivesszuk az id-t amivel nem szamolunk :D
                                                  (dissoc (:reservations calendar-column) (keyword res-id))
                                                  (:brakes calendar-column)
                                                  (get-opening-hours-on-day shop-id (:date calendar-column))))]


           (if calendar-column
             (.getN (mc/update db coll {(str "reservations." res-id)
                                        {"$exists" true}}
                                       {"$unset" {(str "reservations." res-id) ""}
                                        "$set" {:free-times new-free-times
                                                :longest (get-longest new-free-times)}})))))


     (defn calendar-confirm-event [shop-id res-id]
       (let [coll (str shop-id "_calendar")]
         (.getN (mc/update db coll {(str "reservations." res-id)
                                    {"$exists" true}}
                           {"$set" {(str "reservations." res-id ".confirmed?")
                                    true}}))))


     (defn get-reservation-for-email [shop-id res-id]
      (let [coll (str shop-id "_calendar")
            this (mc/find-one-as-map db coll {(str "reservations." res-id)
                                              {"$exists" true}})
            this-res (get
                       (-> this :reservations)
                       (keyword (str res-id)))]
        (assoc this-res
          :date (:date this)
          :employee (:employee this))))





     (defn calendar-modify-event-employee [shop-id data]
       (let [res-id (name (:reservation-id data))
             coll (str shop-id "_calendar")
             old-calendar-column (mc/find-one-as-map db coll {(str "reservations." res-id)
                                                              {"$exists" true}})
             same-column? (fn [] (let [old-date (:date old-calendar-column)
                                       old-employee (:employee old-calendar-column)]
                                   (if (and
                                         (=  (:date data) old-date)
                                         (=  (:employee data) old-employee))
                                       true false)))
             old-reservations (:reservations old-calendar-column)

             old-opening-hours (get-opening-hours-on-day shop-id (:date old-calendar-column))
             old-brakes (:brakes old-calendar-column)
             new-res-vec [(:start data)
                          (+ (:start data)
                             (:length data))]]


         (if (same-column?)
           ;if free and same column
           (if (is-free? (extend-free-time-to-employee
                           (generate-free-times (make-reservations-from-map
                                                  [] (dissoc old-reservations (keyword res-id)))
                             old-opening-hours)
                           (:date old-calendar-column)
                           shop-id)
                 new-res-vec)
             (let [free-times (make-free-times-from-res-and-brakes
                                (assoc old-reservations (keyword res-id)
                                                        (dissoc data :employee :date :reservation-id))
                                old-brakes old-opening-hours)]
               (mc/update db coll
                          {:date (:date data) :employee (:employee data)}
                          {"$set" {(str "reservations." res-id) (dissoc data :date :employee :reservation-id)
                                   :longest (get-longest free-times)
                                   :free-times free-times}}
                                   ;:new-assoc (str (assoc old-reservations res-id (dissoc data :employee :date :reservation-id)))}}
                          {:upsert true})
               "success")
             "reserved")

           ;;If the target is not the same
           (let [new-calendar-column (mc/find-one-as-map db coll {:date (:date data)
                                                                  :employee (:employee data)})
                 new-reservations (:reservations new-calendar-column)
                 new-opening-hours (get-opening-hours-on-day shop-id (:date data))
                 new-brakes (:brakes new-calendar-column)]


             (if (is-free?
                   (extend-free-time-to-employee
                     (generate-free-times
                       (make-reservations-from-map [] new-reservations)
                       new-opening-hours)
                     (:date old-calendar-column)
                     shop-id)
                   new-res-vec)
               (do
                 (let [old-free-times (make-free-times-from-res-and-brakes
                                        (dissoc old-reservations (keyword res-id))
                                        old-brakes old-opening-hours)]
                   (mc/update db coll
                              {:_id (:_id old-calendar-column)}
                              {"$unset" {(str "reservations." res-id) true}
                               "$set"   {:longest (get-longest old-free-times)
                                         :free-times old-free-times}}
                              {:upsert true}))
                 (let [new-free-times (make-free-times-from-res-and-brakes
                                        (assoc new-reservations (keyword res-id)
                                                                (dissoc data :date :employee))
                                        new-brakes new-opening-hours)]
                   (mc/update db coll
                              {:date (:date data) :employee (:employee data)}
                              {"$set" {(str "reservations." res-id) (dissoc data :date :employee)
                                       :longest (get-longest new-free-times)
                                       :free-times new-free-times}}
                              {:upsert true}))
                 "success")
              "reserved")))))








     (defn calendar-add-modify-event-employee [data request]
       (let [shop-id (get-shop-id request)]
         (if
           (contains? data :reservation-id)
           (calendar-modify-event-employee shop-id data)
           (calendar-add-event-employee shop-id data))))

     (defn shop-data [req]
           (let [host  (get (:headers req) "host")
                 host-city (first (clojure.string/split host #"\."))]
             (str (mc/find-one-as-map db "shops" {:_id host-city}))))

     (defn get-opening-hours [request]
           (let [shop-id (get-shop-id request)
                 opening-hours (:opening-hours (mc/find-one-as-map db "shops" {:_id shop-id}))]
                opening-hours))


     (defn get-reservations-and-brakes-from-calendar [day request]
           (let [shop-id (get-shop-id request)
                 all-from-day (mc/find-maps db (str shop-id "_calendar") {:date day})
                 employees (mc/find-maps db (str shop-id "_employees") {})
                 only-brakes (reduce merge (map (fn [item]
                                                  (assoc {} (str (:_id item))
                                                            (if (and (:brakes (first (filter #(= (:employee %)
                                                                                                 (str (:_id item)))
                                                                                             all-from-day))))
                                                              (:brakes (first (filter #(= (:employee %)
                                                                                          (str (:_id item)))
                                                                                      all-from-day)))
                                                              false)))
                                                employees))

                 assoc-with-key (fn [coll & rest-kvs]
                                  (mapv #(apply assoc
                                                (second %)
                                                (concat [:reservation-id (first %)]
                                                        rest-kvs))
                                        coll))

                 reservations-with-employee  (map #(assoc-with-key (:reservations %)
                                                                   :employee (:employee %)
                                                                   :date (:date %))
                                                  all-from-day)

                 reservations-with-id  (reduce concat reservations-with-employee)]


                {:brakes only-brakes
                 :reservations reservations-with-id}))


     (defn get-brake-types [request]
           (let [shop-id (get-shop-id request)
                 all-employees (mc/find-maps db (str shop-id "_braketypes") {})]
             (map-to-str-id all-employees)))

     (defn remove-brake-type [request data]
       (let [shop-id (get-shop-id request)]
         (mc/remove-by-id db (str shop-id "_braketypes") (ObjectId. (:id data)))
         "success"))

     (defn add-brake-type [request data]
       (let [shop-id (get-shop-id request)]
         (first (map-to-str-id [(mc/insert-and-return db (str shop-id "_braketypes")
                                                      {:brakes (:braketype data)})]))))


     (defn get-brakes-on-dates [request data]
       (let [shop-id (get-shop-id request)
             dates (:dates data)
             employees (:employees data)
             all-brakes-docs (vec (for [employee employees
                                        date dates]
                                    (let [this (mc/find-one-as-map db (str shop-id "_calendar") {:date date :employee employee})]
                                      (merge this {:employee employee :date date}))))
             brakes-on-dates (mapv #(vector (:employee %) (:date %) (:brakes %)) all-brakes-docs)]
         brakes-on-dates))

     (defn add-brakes-to-dates [request data]
       (let [shop-id (get-shop-id request)
             dates (:dates data)
             employees (:employees data)
             brakes (:brakes data)
             all-brakes-docs (doseq [employee employees
                                     date dates]
                               (let [this (mc/find-one-as-map db (str shop-id "_calendar") {:date date :employee employee})
                                     reservations (:reservations this)
                                     this-opening-hours (get-opening-hours-on-day shop-id date)
                                     is-in-opening? (every? true?
                                                           (for [[start end] brakes]
                                                             (let [[open close] this-opening-hours]
                                                               (if (and (<= open start)
                                                                        (<= end close))
                                                                 true
                                                                 false))))
                                     free-times (make-free-times-from-res-and-brakes reservations brakes
                                                                                     this-opening-hours)
                                     longest (get-longest free-times)]
                                 (if is-in-opening?
                                   (mc/update db (str shop-id "_calendar")
                                              {:date date :employee employee}
                                              {"$set"
                                               {:free-times free-times
                                                :brakes brakes
                                                :longest longest}}
                                              {:upsert true})
                                   "bad-brakes-for-this-day")))]
         "success"))




     (defn set-brakes-on-dates [request]
       (let [shop-id (get-shop-id request)
             all-employees (mc/find-maps db (str shop-id "_braketypes") {})]
         (map-to-str-id all-employees)))

     (defn get-employees [request]
       (let [shop-id (get-shop-id request)
             all-employees (mc/find-maps db (str shop-id "_employees") {})]
         (map-to-str-id all-employees)))

     (defn get-services [request]
           (let [shop-id (get-shop-id request)
                 all-services (mc/find-maps db (str shop-id "_services") {})]
                (map-to-str-id all-services)))

     (defn get-service [shop-id service-id]
       (let [service (mc/find-one-as-map db (str shop-id "_services") {:_id (ObjectId. service-id)})]
         service))

     (defn get-employee [shop-id employee-id]
       (let [employee (mc/find-one-as-map db (str shop-id "_employees") {:_id (ObjectId. employee-id)})]
         employee))

     (defn get-employees-and-services [request]
       (str {:employees (get-employees request)
             :services (get-services request)}))



     (defn get-free-times [req]
       (let [shop-id (get-shop-id req)
             path-params (:path-params req)
             employee (:employee path-params)
             date (:date path-params)
             free-times (if
                          (= employee "0")
                          (mapv (fn [one-day]
                                  (assoc {}
                                    :employee (:employee one-day)
                                    :free-times (:free-times one-day)))
                               (mc/find-maps db (str shop-id "_calendar")
                                                {:date date}
                                                {:_id false
                                                 :employee true
                                                 :free-times true}))
                          (vector (assoc {}
                                    :employee employee
                                    :free-times (:free-times (mc/find-one-as-map db (str shop-id "_calendar")
                                                                                 {:date date
                                                                                  :employee employee}
                                                                                 {:_id false
                                                                                  :free-times true})))))]
         (str free-times)))






     (defn get-free-dates [req]
       (let
           [shop-id (get-shop-id req)
            path-params (:path-params req)
            employee (:employee path-params)
            length (Integer/parseInt (:length path-params))
            date-vector (get-date-vector-in-offset)]
         (if
           (= employee "0")
           (str (vec (set (map :date (filter
                                       (fn [a]
                                         (> (:longest a) length))
                                       (remove nil?
                                               (reduce concat
                                                       (for
                                                         [this-date date-vector]
                                                         (let [this-docs (mc/find-maps db (str shop-id "_calendar")
                                                                            {:date this-date}
                                                                            {:_id false
                                                                             :longest true
                                                                             :date true})]
                                                           this-docs)))))))))
           (str (mapv :date
                      (filter
                        (fn [a]
                          (> (:longest a) length))
                        (remove nil?
                                (for
                                  [this-date date-vector]
                                  (let [this-doc (mc/find-one-as-map db (str shop-id "_calendar")
                                                                    {:date this-date
                                                                     :employee employee}
                                                                    {:_id false
                                                                     :longest true
                                                                     :date true})]
                                    this-doc)))))))))




     (defn modify-positions [city data]
       (let [the-key (case (:key data)
                       "employees" "employees"
                       "services" "services"
                       "")  ;;For security reasons, I wouldnt like someone to try to add new keywords to this handler
             new-order (:new-order data)
             coll (str city "_" the-key)]
         (doseq [{:keys [_id priority]} new-order]
           (mc/update db coll {:_id (ObjectId. _id)}
                      {"$set" {:priority priority}}))))

     (defn modify-item [city data]
       (let [to-change (:to-change data)
             value (:value data)
             _id (:_id data)
             the-key (case (:key data)
                       "employees" "employees"
                       "services" "services"
                       "")  ;;For security reasons, I wouldnt like someone to try to add new keywords to this handler
             coll (str city "_" the-key)]
         (mc/update db coll {:_id (ObjectId. _id)} {"$set" {to-change value}})
         "success"))





     ;Innen már kezdodnek az updatelo fuggvenyek az uj verziohoz
     ;
     ;


     (defn convert-time-to-minutes [start]
       (let [start-vec (clojure.string/split start #":")
             numbers (map #(Integer/parseInt %) start-vec)
             hours (first numbers)
             minutes (second numbers)]
            (+ minutes (* hours 60))))






     ;Update the starts in the reservations to numbers.


     (defn update-start-to-minutes [city]
       "startot updateljuk percesse minden foglalasban"
       (let [all (mc/find-maps db (str city "_calendar") {})
             filtered-all (filter #(not= 0 (count (:reservations %))) all)
             res-with-id (map #(vector (:_id %) (:reservations %)) filtered-all)
             process-reservations (fn [reservations]
                                      (reduce merge (map #(assoc {} (first %) (assoc (second %) :start (convert-time-to-minutes (:start (second %)))))
                                                         reservations)))
             updated-reservations-vec (mapv #(vector (first %) (process-reservations (second %)))
                                            res-with-id)];(get-in % [(first %) :start]))))]


            (doseq [[id reservations] updated-reservations-vec]
                   (mc/update-by-id db (str city "_calendar") id {"$set" {"reservations" reservations}}))))


     (defn convert-brakes [coll]
       (mapv #(let [start-in-minutes (convert-time-to-minutes (:start %))]
                (vector start-in-minutes (+ start-in-minutes (:length %))))
         coll))

     (defn update-brakes-to-minutes [city]
       "startot updateljuk percesse minden foglalasban"
       (let [all (mc/find-maps db (str city "_calendar") {})]
         (doseq [one-reservation all]
                (mc/update-by-id db (str city "_calendar") (:_id one-reservation)
                                 {"$unset" {"breaks" nil}
                                  "$set" {"brakes" (convert-brakes
                                                     (:breaks one-reservation))}}))))

     (defn update-braketypes-to-minutes [city]
       "startot updateljuk percesse minden foglalasban"
       (let [all (mc/find-maps db (str city "_braketypes") {})]
         (doseq [one-reservation all]
           (mc/update-by-id db (str city "_braketypes") (:_id one-reservation)
                            {"$set" {"brakes" (convert-brakes
                                                (:brakes one-reservation))}}))))


     ;Updating the opening-hours to numbers

     (defn convert-opening [opening]
           (reduce merge
                   (map #(assoc {} (first %)  (mapv convert-time-to-minutes (second %)))
                         opening)))


     (defn update-opening-hours []
       "opening hours updatelese percekke"
       (let [shops (mc/find-maps db "shops" {})
             id-and-opening (map #(vector (:_id %) (:opening-hours %))
                                 shops)]
            (doseq [[id opening] id-and-opening]
              (mc/update-by-id db "shops" id {"$set" {:opening-hours (convert-opening opening)}}))))

     (defn update-barber-to-employee [city]
       "_calendarban barber updatelese employeeva"
       (let [reservations (mc/find-maps db (str city "_calendar") {})]
         (doseq [one-reservation reservations]
           (mc/update-by-id db (str city "_calendar") (:_id one-reservation)
                            {"$set" {:employee (:barber one-reservation)}
                             "$unset" {:barber nil}}))))


     (defn update-brakes-to-breaks [city]
       "_calendarban barber updatelese employeeva"
       (let [reservations (mc/find-maps db (str city "_calendar") {})]
         (doseq [one-reservation reservations]
           (mc/update-by-id db (str city "_calendar") (:_id one-reservation)
                            {"$set" {:breaks (:brakes one-reservation)}
                             "$unset" {:brakes nil}}))))

     (defn update-users []
       "_calendarban barber updatelese employeeva"
       (let [users (mc/find-maps db "users" {})]
         (doseq [one-user users]
           (mc/update-by-id db "users" (:_id one-user)
                            {"$set" {:username (:name one-user)
                                     :shop-id (:city one-user)}
                             "$unset" {:city nil
                                       :name nil}}))))

     (defn update-employee-ids [city]
       "_employees alapjan id updateles, employees es calendar tablaban is"
       (let [employees (mc/find-maps db (str city "_employees") {})]
         (doseq [one-employee employees]
           (let [old-id (:id one-employee)
                 new-id (:_id one-employee)]
             (mc/update db (str city "_calendar")
                        {:employee old-id} {"$set" {:employee (str new-id)}
                                            "$unset" {:id nil}}
                        {:multi true})))))

     (defn add-employee-service [req the-key]
       (let [coll (str (:shop-id req) "_" the-key)
             the-count (count (mc/find-maps db coll {}))]
         (str
           (mc/insert-and-return db
                                 coll
                                 {:priority the-count}))))

     (defn remove-employee-service [req the-key id]
       (let [coll (str (:shop-id req) "_" the-key)
             this (mc/find-maps db coll {})
             prio (:priority (mc/find-one-as-map db coll {:_id (ObjectId. id)}))
             only-bigger (filter #(< prio (:priority %))
                                 this)]

         (mc/remove-by-id db coll (ObjectId. id))
         (doseq [this-one only-bigger]
           (mc/update db coll {:_id (:_id this-one)}
                      {"$set" {:priority (dec (:priority this-one))}}))

         (str "success")))


     (defn db-update-all [city]
       (update-barber-to-employee city)
       (println "Success barber->employee")
       (update-brakes-to-breaks city)
       (println "Success brakes->breaks")
       (update-brakes-to-minutes city)
       (println "Success brakes in minutes")
       (update-braketypes-to-minutes city)
       (println "Success braketypes in minutes")
       (update-start-to-minutes city)
       (println "Success start in minutes")
       (update-employee-ids city)
       (println "Success employee id-s not with a number"))

    (defn update-cities []
      (update-users)
      (println "Success update users")
      (update-opening-hours)
      (println "Success opening hours in numbers")
      (db-update-all "szeged")
      (db-update-all "alba")))


;Update "barbers" to "employees"
;db.szeged_barbers.renameCollection("szeged_employees")
;db.alba_barbers.renameCollection("alba_employees")