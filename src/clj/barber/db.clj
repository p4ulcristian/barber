(ns barber.db
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import [com.mongodb MongoOptions ServerAddress]
           org.bson.types.ObjectId))

(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)
      db   (mg/get-db conn "barber")]

  (defn add-to-mongo [req]
    (str (mc/insert db "documents" { :_id (ObjectId.) :first_name "John" :last_name "Lennon"})))

  (defn authenticate-user [username check-func]
    (let [user (mc/find-one-as-map db "users" { :username username})]
      (check-func (:password user))))

  (defn add-user [user-map]
    (let [some? (mc/find-one-as-map db "users" {:username (:username user-map)})]
      (if some?
        "Already existing"
        (do (mc/insert db "users" (assoc user-map :role :admin))
            "Successfully added"))))

  (defn shop-data [req]
        (let [host  (get (:headers req) "host")
              host-city (first (clojure.string/split host #"\."))]
          (mc/find-one-as-map db "shops" {:_id host-city})))


  (defn get-from-mongo [req]
    (str (mc/find-maps db "documents" {}))))
