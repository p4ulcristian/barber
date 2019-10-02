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


(def scroll-interval (atom nil))

(defn one-event [id start-left start-top start-height]
  (let [rect (atom nil)

        drag-end-listener (atom nil)
        drag-move-listener (atom nil)
        scroll-listener (atom nil)
        not-real-scroll? (atom false)
        dragged? (atom false)


        last-mouse-pos (atom [0 0])
        last-scroll-pos (atom 0)
        calc-left (* start-left grid-width)
        calc-top (* start-top step-height)
        left-temporary (atom 0)
        top-temporary (atom 0)
        height-temporary (atom (* start-height step-height))
        height (atom (* start-height step-height))
        left (atom calc-left)
        top (atom calc-top)


        remove-mouse-move (fn [] (remove-event-listener js/window "mousemove" @drag-move-listener))
        remove-mouse-up (fn [] (remove-event-listener js/window "mouseup" @drag-end-listener))
        remove-touch-move (fn [] (remove-event-listener js/window "touchmove" @drag-move-listener))
        remove-touch-end (fn [] (remove-event-listener js/window "touchend" @drag-end-listener))
        remove-scroll (fn [] (remove-event-listener js/window "scroll" @scroll-listener))
        remove-all (fn []
                       (do
                         (remove-mouse-move)
                         (remove-mouse-up)
                         (remove-touch-move)
                         (remove-touch-end)
                         (remove-scroll)))


        is-touch? (fn [event] (clojure.string/includes? (.-type event) "touch"))
        get-pos (fn [event]
                    (if
                      (is-touch? event)
                      [(.-pageX (aget (.-touches event) 0))
                       (.-pageY (aget (.-touches event) 0))]
                      [(.-pageX event)
                       (.-pageY event)]))
        scroll-event (fn [a]
                         (if (and @dragged? (not @not-real-scroll?))
                           (do
                               (reset! top (+ @top (- (.-scrollTop (.-documentElement js/document))
                                                      @last-scroll-pos)))
                               ;(reset! top-temporary (+ @top-temporary (- (.-scrollTop (.-documentElement js/document)) @last-scroll-pos)))
                               (reset! last-mouse-pos (assoc @last-mouse-pos 1 (+ (second @last-mouse-pos)
                                                                                  (- (.-scrollTop (.-documentElement js/document))
                                                                                     @last-scroll-pos))))
                               (reset! last-scroll-pos (.-scrollTop (.-documentElement js/document))))))





        stop-resize (fn [a]
                        (remove-all)
                        (reset! dragged? false))

        resize (fn [a]
                   (.stopPropagation a)
                   (if @dragged?
                     (let [rect-width (.-width @rect)
                           rect-height (.-height @rect)
                           new-height (+ @height-temporary (-
                                                             (if (is-touch? a)
                                                                 (.-pageY (aget (.-touches a) 0))
                                                                 (.-pageY a))
                                                             (second @last-mouse-pos)))]
                       (if (< (+ @top new-height) rect-height)
                         (do
                           (reset! last-mouse-pos (get-pos a))
                           (reset! height-temporary new-height)
                           (reset! height (round-to-height new-height)))))))

        mouse-down-resize (fn [a]
                            (.stopPropagation a)
                            (reset! dragged? true)
                            (reset! last-mouse-pos (get-pos a))
                            (reset! last-scroll-pos (.-scrollTop (.-documentElement js/document)))
                            (reset! drag-end-listener stop-resize)
                            (reset! drag-move-listener resize)
                            (if (is-touch? a)
                              (do
                                (add-event-listener js/window "touchmove" @drag-move-listener)
                                (add-event-listener js/window  "touchend" @drag-end-listener)
                                (add-event-listener js/window  "touchcancel" @drag-end-listener))
                              (do
                                (add-event-listener js/window "mousemove" @drag-move-listener)
                                (add-event-listener js/window  "mouseup" @drag-end-listener))))


        scroll-if-close (fn [a mouse-top mouse-left rect-left scroll-width rect-width rect-height]
                            (let [inner-height (.-innerHeight js/window)
                                  inner-width (.-innerWidth js/window)
                                  how-much-scroll-y (- inner-height mouse-top)
                                  how-much-scroll-x (- inner-width mouse-left)
                                  px-number 2]
                                 (if @scroll-interval (.clearInterval js/window @scroll-interval))
                                 (do
                                   (reset! not-real-scroll? true)
                                   (reset! scroll-interval
                                           (.setInterval js/window
                                                         #(do
                                                            (cond
                                                              (< how-much-scroll-y 100) (do
                                                                                          (set!
                                                                                            (.-scrollTop (.-documentElement js/document))
                                                                                            (+ (.-scrollTop (.-documentElement js/document)) px-number))
                                                                                          (if (> (- rect-height @height)
                                                                                                 (+ @top px-number))
                                                                                            (reset! top (+ @top px-number)))
                                                                                          (reset! last-mouse-pos (assoc @last-mouse-pos 1 (+ (second @last-mouse-pos) px-number))))
                                                              (< mouse-top 100) (do
                                                                                  (set!
                                                                                    (.-scrollTop (.-documentElement js/document))
                                                                                    (- (.-scrollTop (.-documentElement js/document)) px-number))
                                                                                  (if (< 0 (- @top px-number))
                                                                                    (reset! top (- @top px-number)))
                                                                                  (reset! last-mouse-pos (assoc @last-mouse-pos 1 (- (second @last-mouse-pos) px-number))))
                                                              (> mouse-left (- (+ rect-left rect-width) 50)) (do
                                                                                                               (set!
                                                                                                                 (.-scrollLeft (get-el "scroll-container"))
                                                                                                                 (+ (.-scrollLeft (get-el "scroll-container")) px-number))
                                                                                                               (if (< (+ @left px-number)
                                                                                                                      (- scroll-width grid-width))
                                                                                                                 (reset! left (+ @left px-number)))
                                                                                                               (reset! last-mouse-pos (assoc @last-mouse-pos 0 (+ (first @last-mouse-pos) px-number))))

                                                              (< mouse-left (+ rect-left 50))  (do
                                                                                                 (set!
                                                                                                   (.-scrollLeft (get-el "scroll-container"))
                                                                                                   (- (.-scrollLeft (get-el "scroll-container")) px-number))
                                                                                                 (if (> (- @left px-number) 0)
                                                                                                   (reset! left (- @left px-number)))
                                                                                                 (reset! last-mouse-pos (assoc @last-mouse-pos 0 (- (first @last-mouse-pos) px-number))))

                                                              :else (do
                                                                      (reset! not-real-scroll? false)
                                                                      (.clearInterval js/window @scroll-interval))))
                                                         0.1)))))






        on-pan-end (fn [event]
                       (reset! dragged? false)
                       (if @scroll-interval (.clearInterval js/window @scroll-interval))
                       (remove-all)
                       (let [rounded (round-to-grid @left @top)]
                            (reset! left (first rounded))
                            (reset! top (second rounded))
                            (reset! left-temporary @left)
                            (reset! top-temporary @top)
                            (.log js/console (str "sor: " (/ (first rounded) grid-width)
                                                  " oszlop:  " (/ (second rounded) step-height)
                                                  " hossz: " (* 15 (/ @height step-height)) " perc"))))


        on-pan (fn [a]
                   (if @dragged?
                     (let
                       [container (get-el "container")
                        scroll-width (.-scrollWidth container)
                        rect-width (.-clientWidth container)
                        rect-height (.-clientHeight container)
                        rect-left (.-left @rect)
                        rect-top (.-top @rect)
                        position (get-pos a)
                        click-left (first position)
                        click-top (second position)
                        new-left (- @left (- (first @last-mouse-pos) click-left)) ;uj baloldalt a mozgatas alapjan
                        new-top (- @top (- (second @last-mouse-pos) click-top))] ;uj fent a mozgatas alapjan]

                       (reset! last-scroll-pos (.-scrollTop (.-documentElement js/document)))
                       (scroll-if-close a
                                        (if
                                          (clojure.string/includes? (.-type a) "touch")
                                          (.-clientY (aget (.-touches a) 0))
                                          (.-clientY a))
                                        (if
                                          (clojure.string/includes? (.-type a) "touch")
                                          (.-clientX (aget (.-touches a) 0))
                                          (.-clientX a))
                                        rect-left
                                        scroll-width
                                        rect-width
                                        rect-height)

                       ;Left and Right Boundaries
                       (if (and
                             (<= (+ rect-left (/ grid-width 2)) (first @last-mouse-pos))
                             (<= (first @last-mouse-pos)
                                 (- (+ rect-left (.-clientWidth container)) (/ grid-width 2)))
                             (<= 0 new-left)
                             (<= new-left (- scroll-width grid-width)))
                         (do

                           (reset! left new-left))
                           ;(scroll-if-close a click-top click-left))
                         (do
                           (if
                             (<= new-left 0)
                             (reset! left 0))
                           (if
                             (<= (- scroll-width grid-width)
                                 new-left)
                             (reset! left (- scroll-width grid-width)))))

                       ;Top and Bottom Boundaries

                       (if
                         (and
                              (< click-top (+ rect-top (- rect-height (/ @height 2))))
                              (> click-top (+ rect-top (/ @height 2))))
                         (do
                           (reset! top new-top))
                           ;(scroll-if-close a click-top click-left))
                         (if (<= click-top (+ rect-top (/ @height 2)))
                           (reset! top 0)
                           (reset! top (- rect-height @height))))
                       (reset! last-mouse-pos [click-left click-top]))))


        on-pan-start (fn [event]
                        (let [position (get-pos event)]; (reset! dragging? true)
                          (reset! dragged? true)
                          (.stopPropagation event)
                          (reset! last-mouse-pos position)
                          (reset! drag-end-listener on-pan-end)
                          (reset! drag-move-listener on-pan)
                          ;(reset! scroll-listener scroll-event)

                          (if (is-touch? event)
                            (do
                              (add-event-listener js/window "touchmove" @drag-move-listener)
                              (add-event-listener js/window  "touchend" @drag-end-listener)
                              (add-event-listener js/window  "touchcancel" @drag-end-listener))
                            (do
                              (add-event-listener js/window "mousemove" @drag-move-listener)
                              (add-event-listener js/window  "mouseup" @drag-end-listener)
                              (add-event-listener js/window "scroll" @scroll-listener)))
                          false))]




    (reagent/create-class
      {:component-did-mount #(do
                               (reset! rect (.getBoundingClientRect (get-el "container")))
                               (add-event-listener
                                 (get-el id) "touchstart"
                                 on-pan-start)
                               (add-event-listener
                                 (get-el id) "mousedown"
                                 on-pan-start)
                               (add-event-listener
                                 (get-el (str id "-resize"))
                                 "mousedown"
                                 mouse-down-resize)
                               (add-event-listener
                                 (get-el (str id "-resize"))
                                 "touchstart"
                                 mouse-down-resize))

       :reagent-render
       (fn [id]
         [:div.one-event
          {:class (if @dragged? "active" "")
           :id id
           :style {:touch-action "none"
                   :z-index (if @dragged? 1000 1)
                   :cursor  (if @dragged? "grabbing" "grab")
                   :left 0
                   :top 0
                   :transform (str "translate(" (+ 1 @left) "px," (+ 1 @top) "px)")
                   :position "absolute" :background "rgb(255, 204, 71)"
                   :border-bottom-right-radius "5px"
                   :opacity (if @dragged? 1 1)
                   ;:border-top-right-radius "10px"
                   :width (str (- (- grid-width border-width) 4) "px")
                   :height (str (- @height 3) "px")}}
          [:div] ;(str @top ":" @left)]
          [:div] ;(str @top-temporary ":" @left-temporary)]
          [:div {:id (str id "-resize")
                 :style {:cursor "ns-resize"
                         :background "red" :height "5px" :width (- (- grid-width border-width) 4)
                         :bottom 0 :position "absolute" :z-index 1000}}]])})))









(defn calendar []
  (let [all-columns (range 30)
        all-rows (range 70)]
    (reagent/create-class
     {:component-did-mount #(do
                              (add-event-listener js/window "keydown" (fn [a]
                                                                          (case (.-key a)
                                                                                "ArrowLeft" (set!
                                                                                              (.-scrollLeft (get-el "scroll-container"))
                                                                                              (- (.-scrollLeft (get-el "scroll-container")) 25))
                                                                                "ArrowRight" (set!
                                                                                               (.-scrollLeft (get-el "scroll-container"))
                                                                                               (+ (.-scrollLeft (get-el "scroll-container")) 25))
                                                                                nil))))
                              ;(dispatch [:init-calendar "container"]))
      :reagent-render
       (fn []
           [:div.uk-width-1-1 {:style {:display "flex" :padding "50px"}}
            [:div (map-indexed #(-> ^{:key %1}[:div.uk-text-right {:style {:background "white" :width "40px" :height step-height :padding-right "4px"}}
                                                 %2])
                               all-rows)]
            [:div#scroll-container {:style {:overflow "auto"}}
             [:div#container.uk-inline.noselect {:style {:display "flex"  :z-index 40}}
              (map-indexed (fn [row-i a]
                               (-> ^{:key a}[:div (map-indexed (fn [i b] (-> ^{:key b}[:div
                                                                                       {:style {:background (if (= 0 (mod row-i 3))  "#ccc" "white")
                                                                                                :width (str (- grid-width border-width) "px")
                                                                                                :height (str (- step-height border-width) "px")
                                                                                                :border-right (str border-width "px solid lightgrey")
                                                                                                :border-top (if (= 0 (mod i 4))
                                                                                                              (str border-width "px solid lightgrey")
                                                                                                              (str border-width "px solid lightgrey"))}}]))
                                                               all-rows)]))
                           all-columns)
              ;[:div#event-container {:style {:position "absolute" :height "100%" :width "100%" :background "rgba(0,0,0,0.2)"}}]
              [one-event "box" 0 0 2]
              [one-event "box2" 8 0 3]
              [one-event "box3" 0 44 4]]]])})))
             ;[one-event "box4" 8 44 5]]])})))



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
      [:div.uk-align-center
       [:div {:style {:height "100px"}}]
       [:div
        [calendar]]])))
