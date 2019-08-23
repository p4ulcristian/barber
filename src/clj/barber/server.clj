(ns barber.server
    (:require
     [barber.handler :refer [app]]
     [config.core :refer [env]]
     [org.httpkit.server :refer [run-server]])
    (:gen-class))

(defn -main [& args]
  (let [port (or (env :port) 3000)]
    (run-server app {:port port :join? false})))