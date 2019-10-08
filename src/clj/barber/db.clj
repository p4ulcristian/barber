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


     (defn add-to-mongo [req]
       (str (mc/insert db "documents" { :_id (ObjectId.) :first_name "John" :last_name "Lennon"})))

     (defn get-user [username]
       (let [user (mc/find-one-as-map db "users" { :username username})]
         user))

     (defn add-user [user-map]
       (let [some? (mc/find-one-as-map db "users" {:name (:name user-map)})]
         (if some?
           "Already existing"
           (do (mc/insert db "users" (assoc user-map :role :admin))
               "Successfully added"))))

     (defn shop-data [req]
           (let [host  (get (:headers req) "host")
                 host-city (first (clojure.string/split host #"\."))]
             (mc/find-one-as-map db "shops" {:_id host-city})))

     (defn get-opening-hours [request]
           (let [shop-id (get-shop-id request)
                 opening-hours (:opening-hours (mc/find-one-as-map db "shops" {:_id shop-id}))]
                opening-hours))


     (defn get-day-from-calendar [day request]
           (let [shop-id (get-shop-id request)
                 all-days (mc/find-maps db (str shop-id "_calendar") {:date day})
                 only-reservations  (mapv #(assoc (second %) :reservation-id (first %))
                                          (reduce merge (map :reservations all-days)))]
                only-reservations))

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


     (comment
       (defn update-start-to-minutes [coll]
         (let [all (mc/find-maps db coll {})
               filtered-all (filter #(not= 0 (count (:reservations %))) all)
               res-with-id (map #(vector (:_id %) (:reservations %)) filtered-all)
               process-reservations (fn [reservations]
                                        (reduce merge (map #(assoc {} (first %) (assoc (second %) :start (convert-time-to-minutes (:start (second %)))))
                                                           reservations)))
               updated-reservations-vec (mapv #(vector (first %) (process-reservations (second %)))
                                              res-with-id)];(get-in % [(first %) :start]))))]


              (doseq [[id reservations] updated-reservations-vec]
                     (mc/update-by-id db coll id {"$set" {"reservations" reservations}})))))


     ;Updating the opening-hours to numbers

     (comment
       (defn convert-opening [opening]
             (reduce merge
                     (map #(assoc {} (first %)  (mapv convert-time-to-minutes (second %)))
                           opening)))


       (defn update-opening-hours []
         (let [shops (mc/find-maps db "shops" {})
               id-and-opening (map #(vector (:_id %) (:opening-hours %))
                                   shops)]
              (for [[id opening] id-and-opening]
                (mc/update-by-id db "shops" id {"$set" {:opening-hours (convert-opening opening)}}))))))


