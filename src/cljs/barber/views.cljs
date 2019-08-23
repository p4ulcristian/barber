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
  (.addEventListener el type callback false))

(defn remove-event-listener [el type callback]
  (.removeEventListener el type callback false))


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


(defn round-to-height [height]
  (let [height-bot (* step-height (quot height step-height))
        height-top (* step-height (inc (quot height step-height)))]
    (if (<
          (abs (- height height-bot))
          (abs (- height height-top)))
      height-bot
      height-top)))




(defn one-event [id start-left start-top start-height]
  (let [mouse-up-listener (atom nil)
        mouse-move-listener (atom nil)
        calc-left (* start-left grid-width)
        calc-top (* start-top step-height)
        left-temporary (atom calc-left)
        top-temporary (atom calc-top)
        height-temporary (atom (* start-height step-height))
        height (atom (* start-height step-height))
        left (atom calc-left)
        top (atom calc-top)
        dragged? (atom false)
        drag (fn [a]
               (if @dragged?
                 (let [rect (.getBoundingClientRect (.getElementById js/document "container"))
                       rect-width (.-width rect)
                       rect-height (.-height rect)
                       new-left (+ @left-temporary (.-movementX a))
                       new-top (+ @top-temporary (.-movementY a))]
                   (if
                     (and (<= new-left (- rect-width grid-width))
                          (<= 0 new-left)
                          (<= new-top (- rect-height grid-height))
                          (<= 0 new-top))
                     (do
                       (reset! left-temporary new-left)
                       (reset! top-temporary new-top)
                       (let [rounded (round-to-grid @left-temporary @top-temporary)]
                         (reset! left (first rounded))
                         (reset! top (second rounded))))
                     (.log js/console "Nem sikerült")))))


        resize (fn [a]
                 (if @dragged?
                   (let [rect (.getBoundingClientRect (.getElementById js/document "container"))
                         rect-width (.-width rect)
                         rect-height (.-height rect)
                         new-height (+ @height-temporary (.-movementY a))]
                     ;(round-to-height new-height)
                     (reset! height-temporary new-height)
                     (reset! height (round-to-height @height-temporary)))))



        remove-mouse-move (fn [] (remove-event-listener js/window "mousemove" @mouse-move-listener))
        remove-mouse-up (fn [] (remove-event-listener js/window "mouseup" @mouse-up-listener))
        stop-drag (fn [a]
                    (remove-mouse-move)
                    (remove-mouse-up)
                    (reset! dragged? false)
                    (.log js/console "removeolva"))

        stop-resize (fn [a]
                      (remove-mouse-move)
                      (remove-mouse-up)
                      (reset! dragged? false)
                      (.log js/console "removeolva"))


        drag (fn [a]
               (reset! dragged? true)
               (reset! mouse-up-listener stop-drag)
               (reset! mouse-move-listener drag)
               (.log js/console "hozzáadva")
               (add-event-listener js/window "mousemove" @mouse-move-listener)
               (add-event-listener js/window  "mouseup" @mouse-up-listener))

        mouse-down-resize (fn [a]
                            (.stopPropagation a)
                            (reset! dragged? true)
                            (reset! mouse-up-listener stop-resize)
                            (reset! mouse-move-listener resize)
                            (.log js/console "hozzáadva resize")
                            (add-event-listener js/window "mousemove" @mouse-move-listener)
                            (add-event-listener js/window  "mouseup" @mouse-up-listener))]

    (reagent/create-class
      {:component-did-mount #(do (add-event-listener
                                   (get-el id) "mousedown"
                                   drag)
                                 (add-event-listener
                                   (get-el (str id "-resize"))
                                   "mousedown"
                                   mouse-down-resize))

       :reagent-render
       (fn [id]
         [:div.one-event
          {:class (if @dragged? "active" "")
           :id id
           :style {:transition "0.1s easeInCirc"
                   :z-index (if @dragged? 1000 1)
                   :left (+ 1 @left) :top (+ 1 @top)
                   :position "absolute" :background "rgb(255, 204, 71)"
                   :border-bottom-right-radius "5px"
                   :box-shadow (if @dragged? "4px 2px 5px 5px rgba(0,0,0,0.75)" "")
                   ;:border-top-right-radius "10px"
                   :width (str (- (- grid-width border-width) 4) "px")
                   :height (str (- @height 3) "px")}}
          [:div {:id (str id "-resize")
                 :style {:background "red" :height "5px" :width (- (- grid-width border-width) 4)
                         :bottom 0 :position "absolute" :z-index 1000}}]])})))









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
            [:div#container.uk-inline.noselect {:style {:display "flex"  :z-index 40 :width "content"}}
             (map-indexed (fn [row-i a]
                              (-> ^{:key a}[:div (map-indexed (fn [i b] (-> ^{:key b}[:div
                                                                                      {:style {:background (if (= 0 (mod row-i 3))  "rgba(0, 0, 0, 0.2)" "white")
                                                                                               :width (str (- grid-width border-width) "px")
                                                                                               :height (str (- step-height border-width) "px")
                                                                                               :border-right (str border-width "px solid rgba(0, 0, 0, 0.3)")
                                                                                               :border-top (if (= 0 (mod i 4))
                                                                                                             (str border-width "px solid rgba(0, 0, 0, 0.3)")
                                                                                                             (str border-width "px solid rgba(0, 0, 0, 0.1)"))}}]))
                                                              all-rows)]))
                          all-columns)
             [one-event "box" 0 0 2]
             [one-event "box2" 8 0 3]
             [one-event "box3" 0 44 4]
             [one-event "box4" 8 44 5]]])})))



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
