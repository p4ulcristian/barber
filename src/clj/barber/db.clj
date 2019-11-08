(ns barber.db
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import [com.mongodb MongoOptions ServerAddress]
           org.bson.types.ObjectId))

(defn get-shop-id [request]
      (:shop-id (:session request)))

(defn dissoc-ids [items]
      (map #(dissoc % :_id) items))

(defn map-to-str-id [coll]
      (mapv #(assoc % :_id (str (:_id %)))
            coll))




(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "barber")]


     (defn get-user [username]
       (let [user (mc/find-one-as-map db "users" { :username username})]
         user))

     (defn shop-data [req]
           (let [host  (get (:headers req) "host")
                 host-city (first (clojure.string/split host #"\."))]
             (mc/find-one-as-map db "shops" {:_id host-city})))

     (defn get-opening-hours [request]
           (let [shop-id (get-shop-id request)
                 opening-hours (:opening-hours (mc/find-one-as-map db "shops" {:_id shop-id}))]
                opening-hours))


     (defn get-reservations-and-breaks-from-calendar [day request]
           (let [shop-id (get-shop-id request)
                 all-from-day (mc/find-maps db (str shop-id "_calendar") {:date day})
                 only-breaks (reduce merge (map (fn [item] (assoc {} (:employee item) (if (and (:breaks item)
                                                                                               (not= 0 (count (:breaks item))))
                                                                                        (:breaks item)
                                                                                        false)))
                                                all-from-day))

                 assoc-with-key (fn [coll the-key the-val]
                                  (mapv #(assoc (second %) :reservation-id (first %)
                                                the-key the-val)
                                        coll))

                 reservations-with-employee  (map #(assoc-with-key (:reservations %) :employee (:employee %))
                                                  all-from-day)

                 reservations-with-id  (reduce concat reservations-with-employee)]


                {:breaks only-breaks
                 :reservations reservations-with-id}))

     (defn get-employees [request]
           (let [shop-id (get-shop-id request)
                 all-employees (mc/find-maps db (str shop-id "_employees") {})]
                (map-to-str-id all-employees)))

     (defn get-services [request]
           (let [shop-id (get-shop-id request)
                 all-services (mc/find-maps db (str shop-id "_services") {})]
                (map-to-str-id all-services)))





     (defn get-from-mongo [req]
       (str (mc/find-maps db "documents" {})))


     ;Innen már kezdodnek az updatelo fuggvenyek az uj verziohoz
     ;
     ;


     (defn convert-time-to-minutes [start]
           (let [start-vec (clojure.string/split start #":")
                 numbers (map #(Integer/parseInt %) start-vec)
                 hours (first numbers)
                 minutes (second numbers)]
                (+ minutes (* hours 60))))


     ;The users changing
       ;pls update in mongo
       ;{"username" : "admin", "password" : "admin", "shop-id" : "szeged" }

     ;Update "barbers" to "employees"
       ;db.szeged_barbers.renameCollection("szeged_employees")
       ;db.alba_barbers.renameCollection("alba_employees")


     ;Update the starts in the reservations to numbers.


     (defn update-start-to-minutes [coll]
       "startot updateljuk percesse minden foglalasban"
       (let [all (mc/find-maps db coll {})
             filtered-all (filter #(not= 0 (count (:reservations %))) all)
             res-with-id (map #(vector (:_id %) (:reservations %)) filtered-all)
             process-reservations (fn [reservations]
                                      (reduce merge (map #(assoc {} (first %) (assoc (second %) :start (convert-time-to-minutes (:start (second %)))))
                                                         reservations)))
             updated-reservations-vec (mapv #(vector (first %) (process-reservations (second %)))
                                            res-with-id)];(get-in % [(first %) :start]))))]


            (doseq [[id reservations] updated-reservations-vec]
                   (mc/update-by-id db coll id {"$set" {"reservations" reservations}}))))


     (defn convert-breaks [coll]
       (mapv #(let [start-in-minutes (convert-time-to-minutes (:start %))]
                (vector start-in-minutes (+ start-in-minutes (:length %))))
         coll))

     (defn update-breaks-to-minutes [coll]
       "startot updateljuk percesse minden foglalasban"
       (let [all (mc/find-maps db coll {})]
         (doseq [one-reservation all]
                (mc/update-by-id db coll (:_id one-reservation)
                                 {"$set" {"breaks" (convert-breaks
                                                     (:breaks one-reservation))}}))))


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

     (defn update-barber-to-employee [coll]
       "_calendarban barber updatelese employeeva"
       (let [reservations (mc/find-maps db coll {})]
         (doseq [one-reservation reservations]
           (mc/update-by-id db coll (:_id one-reservation)
                            {"$set" {:employee (:barber one-reservation)}
                             "$unset" {:barber nil}}))))


     (defn update-brakes-to-breaks [coll]
       "_calendarban barber updatelese employeeva"
       (let [reservations (mc/find-maps db coll {})]
         (doseq [one-reservation reservations]
           (mc/update-by-id db coll (:_id one-reservation)
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

     (defn db-update-all [coll]
       (update-users)
       (update-barber-to-employee coll)
       (update-brakes-to-breaks coll)
       (update-breaks-to-minutes coll)
       (update-opening-hours)
       (update-start-to-minutes coll)))




