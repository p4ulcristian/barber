(ns barber.server
    (:require
     [barber.handler :as handler :refer [app]]
     [config.core :refer [env]]
     [ring.middleware.reload :refer [wrap-reload]]
     [org.httpkit.server :refer [run-server]])
    (:gen-class))

(defonce server (atom nil))

(defn -main [& args]
  (let [port 3000]
    (when-not (nil? @server)
              (@server)
              (reset! server nil))
    (reset! server (run-server (wrap-reload #'app)
                               {:port port :join? false}))
    (handler/start-router!)))
