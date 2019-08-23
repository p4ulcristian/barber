(ns barber.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as str]))


(defn anim-to [element timeout the-map]
  (.to js/TweenMax element timeout (clj->js the-map)))

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val  (reagent/atom title)
        stop #(do (reset! val "")
                  (when on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (on-save v)
                (stop))]
    (fn [props]
      [:input (merge (dissoc props :on-save :on-stop :title)
                     {:type        "text"
                      :value       @val
                      :class "uk-input"
                      :auto-focus  true
                      :on-blur     save
                      :on-change   #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                      13 (save)
                                      27 (stop)
                                      nil)})])))







(defn get-el [id]
  (.getElementById js/document id))

(defn add-event-listener [el type callback]
  (.addEventListener el type callback))


(def grid-width 80)
(def grid-height 72)
(def step-height (/ grid-height 4))
(def border-width 1)

"Szeretnék egy olyan gridet amiben megadható mennyi egy lépés?"
"Hogy csináljuk majd a kerekítést?"
"El kell mentenünk mennyi a left és a top. Mikor a következőhöz áll közelebb akkor módosítjuk őket."
"Tároljuk a left-temporaryt meg a right-temporaryt"

(defn abs [n] (max n (- 0 n)))

(defn round-to-grid [left top]
  (let [grid-left (* grid-width (quot left grid-width))
        grid-right (* grid-width (inc (quot left grid-width)))
        grid-top (* step-height (quot top step-height))
        grid-bottom (* step-height (inc (quot top step-height)))
        final-left (if (<
                        (abs (- left grid-left))
                        (abs (- left grid-right)))
                     grid-left
                     grid-right)
        final-top (if (< (abs (- top grid-top))
                         (abs (- top grid-bottom)))
                    grid-top
                    grid-bottom)]


    [final-left final-top]))


(defn one-event [id]
  (let [left-temporary (atom 0)
        top-temporary (atom 0)
        left (atom 0)
        top (atom 0)
        dragged? (atom false)]
    (reagent/create-class
      {:component-did-mount #(do (add-event-listener (get-el id)
                                                     "mousedown" (fn [a] (reset! dragged? true)))
                                 (add-event-listener js/window  "mouseup" (fn [a] (do
                                                                                    ;(.log js/console (str (round-to-grid @left @top @left-temporary @top-temporary)))
                                                                                    (reset! dragged? false)
                                                                                    (let [rounded (round-to-grid @left-temporary @top-temporary)]
                                                                                      (anim-to (get-el id)
                                                                                              0.2
                                                                                              {:x (reset! left-temporary (first rounded))
                                                                                               :y (reset! top-temporary (second rounded))})))))
                                 (add-event-listener js/window "mousemove" (fn [a] (if @dragged?
                                                                                     (do
                                                                                       (reset! left-temporary (+ @left-temporary (.-movementX a)))
                                                                                       (reset! top-temporary (+ @top-temporary (.-movementY a)))
                                                                                       (let [rounded (round-to-grid @left-temporary @top-temporary)]
                                                                                         (anim-to (get-el id)
                                                                                                  0.2
                                                                                                  {:ease (.config js/Back.easeOut 1.7),
                                                                                                   :x (first rounded)
                                                                                                   :y (second rounded)})))))))

       :reagent-render
       (fn [id]
         [:div {:id id
                ;:on-click #(anim-to (get-el id) 1 {:x 500})
                :style {:left (+ 1 @left) :top (+ 1 @top)
                        :position "absolute" :background "red"
                        :border-bottom-right-radius "5px"
                        ;:border-top-right-radius "10px"
                        :width (str (- (- grid-width border-width)
                                       4)
                                    "px")
                        :height (str (- (- grid-height border-width)
                                        3)
                                     "px")}}])})))
          ;(str @dragged?)])})))





(defn calendar []
  (let [all-columns (range 9)
        all-rows (range 48)]
    (reagent/create-class
     {;:component-did-mount #(do)
                              ;(add-event-listener "container" "click" (fn [a] (.log js/console (str "hello: " (js->clj a)))))
                              ;(dispatch [:init-calendar "container"]))
      :reagent-render
       (fn []
           [:div {:style {:display "flex"}}
            [:div (map-indexed #(-> ^{:key %1}[:div.uk-text-right {:style {:background "white" :width "40px" :height step-height}}
                                                 %2])
                               all-rows)]
            [:div#container.uk-inline {:style {:display "flex"  :z-index 40 :width "content"}}
             (map-indexed (fn [row-i a]
                              (-> ^{:key a}[:div (map-indexed (fn [i b] (-> ^{:key b}[:div
                                                                                      {:style {:background (if (= 0 (mod row-i 2)) "white" "rgba(0, 0, 0, 0.2)")
                                                                                               :width (str (- grid-width border-width) "px")
                                                                                               :height (str (- step-height border-width) "px")
                                                                                               :border-right (str border-width "px solid rgba(0, 0, 0, 0.3)")
                                                                                               :border-top (if (= 0 (mod i 4))
                                                                                                             (str border-width "px solid rgba(0, 0, 0, 0.3)")
                                                                                                             (str border-width "px solid rgba(0, 0, 0, 0.1)"))}}]))
                                                              all-rows)]))
                          all-columns)
             [one-event "box"]]])})))



(defn home-page []
  (let [server-time (subscribe [:data :server-time])
        post-request (subscribe [:data :post-request])]
     (reagent/create-class
       {:component-did-mount #(dispatch [:get-user])
         :reagent-render
          (fn []
            [:div
             [:div.uk-container.uk-container-small.uk-margin-large-top
              [:div.uk-card.uk-card-default [calendar]]
              [:div.uk-card.uk-card-default
               [:div.uk-card-body
                [:div [:img.uk-align-center {:src "/img/logo.png" :style {:width "150px"}}]]
                [:h1.uk-heading.uk-text-center (str "Szia Balázs!")]
                [:hr]
                [:h2.uk-text-center "Ajax test"]
                [:div.uk-child-width-1-2 {:data-uk-grid true}
                  [:div
                   [:button.uk-button.uk-button-default.uk-align-center
                    {:on-click #(dispatch [:get-server-time])}
                    "Test Ajax Get"]
                   [:div.uk-padding
                    [:div (str "Result: " @server-time)]]]

                  [:div
                   [:button.uk-button.uk-button-default.uk-align-center
                    {:on-click #(dispatch [:post-request])}
                    "Test Ajax Post"]
                   [:div.uk-padding
                    [:div (str "Result: " @post-request)]]]]
                [:hr]
                [:div.uk-flex.uk-flex-center
                 [:div.uk-padding-small
                   [:button.uk-button.uk-button-small.uk-button-default
                     {:on-click #(dispatch [:add-to-mongo])}
                    "Add to database"]]
                 [:div.uk-padding-small
                   [:button.uk-button.uk-button-small.uk-button-default
                       {:on-click #(dispatch [:add-user {:username "admin" :password "admin"}])}
                       "Add user-> admin : admin"]]
                 [:div.uk-padding-small
                   [:button.uk-button.uk-button-small.uk-button-default
                     {:on-click #(dispatch [:ws-server-time])}
                    "Test Websocket"]]]]

               [:ul]]]])})))
                ;[todo-app]]]]])})))

(defn current-page []
  (fn []
    (let [user (subscribe [:data :user])
          this-page (subscribe [:data :current-page])
          route-params (subscribe [:data :route-params])]
      (comment [:div
                [:div.uk-position-left.uk-padding-small
                   [:h5
                    {:class (if @user "uk-text-success" "uk-text-danger")}
                    (if @user
                          (str "Logged in: " (str @user))
                          (str "Nobody logged in" @user))]
                   [:div.uk-text-small "Page: "@this-page]
                   [:div.uk-text-small "Params: " @route-params]]
                [:div.uk-position-right.uk-padding-small
                 [:a {:href "/login"} [:button.uk-button.uk-button-primary "Login"]]
                 [:a.uk-margin-small-left {:href "/logout"} [:button.uk-button.uk-button-danger "Logout"]]]
                [home-page]])
      [:div.uk-align-center [calendar]])))
