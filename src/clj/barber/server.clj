(ns barber.server
    (:require
     [barber.handler :refer [app]]
     [config.core :refer [env]]
     [ring.middleware.reload :refer [wrap-reload]]
     [org.httpkit.server :refer [run-server]]
     [shadow.cljs.devtools.server :as server]
     [shadow.cljs.devtools.api :as shadow]
     [barber.schedule :as schedule])
  (:gen-class))

(defonce server (atom nil))

(defn -main [& args]
  (let [port 4000]
    (when-not (nil? @server)
              (@server)
              (reset! server nil))
    (reset! server (run-server (wrap-reload #'app)
                               {:port port :join? false}))
    (schedule/start-schedule!)))
    ;(handler/stop-router!)
    ;(handler/start-router!)))

(defn dev [config-key]
  (-main)
  (server/stop!)
  (server/start!)
  ; (schedule/start-schedule!)
  ;(shadow/compile :app)
  (shadow/watch config-key))


