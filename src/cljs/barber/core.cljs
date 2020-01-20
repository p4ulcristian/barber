(ns barber.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [barber.views :as views]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [re-frame.core :refer [dispatch dispatch-sync subscribe]]
   [barber.sente :as sente]
   [barber.events] ;; These two are only required to make the compiler
   [barber.subs]   ;; load them (see docs/App-Structure.md)
   [barber.views]
   [accountant.core :as accountant]))

(def router
  (reitit/router
   [["/calendar" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))


(defn mount-root []
  (reagent/render [views/current-page] (.getElementById js/document "app")))

(defonce _start-once (sente/start!))

(defn init! []
  (sente/start!)
  (dispatch-sync [:initialise-db])
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (dispatch [:add-to-db {:current-page current-page
                               :route-params route-params}])
        (clerk/navigate-page! path)))

    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
