(ns barber.schedule
  (:require [hara.io.scheduler :refer [scheduler start! stop! add-task delete-task]]
            [clj-time.core :as t])
  (:gen-class))

;; Triggered every 5 seconds

"/5 * * * * * *"


;; Triggered every 5 seconds between 32 and 60 seconds

"32-60/5 * * * * * *"

;; Triggered every 5 seconds on the 9th aand 10th
;; minute of every hour on every Friday from June
;; to August between years 2012 to 2020.
" second minute hour day-of-week day-of-month month year"

"/5  9,10  * 5 * 6-8 2012-2020"

(def the-schedule
  (scheduler {}))

(defn start-schedule! []
  (start! the-schedule))

(defn stop-schedule! []
  (stop! the-schedule))



(defn add-task-to-schedule [the-key handler schedule params]
  (add-task the-schedule
            (keyword the-key)
            {:handler (fn [time params]
                        (handler params)) ;Function [time params]
             :schedule schedule
             :params params}))

(defn in-30-minutes []
  (let [now (t/now)
        after-now (t/plus now (t/minutes 30))
        year (t/year after-now)
        month (t/month after-now)
        day (t/day after-now)
        hour (inc (t/hour after-now))
        minute (t/minute after-now)
        the-second (t/second after-now)]
    (str
      the-second " " minute " " hour " * " day " " month " " year)))


(defn do-in-30-minutes [the-key handler params]
  (add-task-to-schedule
    the-key
    handler
    (in-30-minutes)
    params))


;(defn delete-if-not-confirmed [the-key]
 ;     (add-task-to-schedule
  ;      (fn [t params] (println (str t " " params)))
   ;     the-key
    ;    "50 17 0 * 11 1 2020"
     ;   {:data "hello"})))

(defn delete-task-from-schedule [the-key]
  (delete-task the-schedule (keyword the-key)))


