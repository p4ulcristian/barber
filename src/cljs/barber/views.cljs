(ns barber.views
  (:require [reagent.core  :as reagent :refer [atom]]
            ["react" :as react :refer (createElement)]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [clojure.string :as str]
            [cljs-time.core :as time]
            [react-flatpickr :default Flatpickr]
            [react-slider :default ReactSlider]
            ["flatpickr/dist/l10n/hu.js" :refer (Hungarian)]
            [react-beautiful-dnd :refer (DragDropContext Droppable Draggable)]))


            ;[cljsjs.react-beautiful-dnd :refer [DragDropContext Droppable Draggable]]))


(def step-minute 15)

(def sidebar-width 340)
;(def drag-drop-context (reagent/adapt-react-class DragDropContext))


(comment (defn netflix-counter [id content props]
           (reagent/create-class
             {:component-did-mount #(dispatch [:netflix-counter-init id])
              :component-did-update #(dispatch [:netflix-counter id])
              :reagent-render (content props)})))




(defn react-slider [props]
  [:> ReactSlider props])



;(def drag-drop-context (reagent/adapt-react-class DragDropContext))
;(def droppable (reagent/adapt-react-class Droppable))
;(def draggable (reagent/adapt-react-class Draggable))
(defn flatpickr [props]
  [:> Flatpickr props])
; Example drag-drop-context (typically wraps your whole app)


(defn one-edit-field [[the-key value] edit?]
  [:div])


(defn editable [{:keys [text update-func class type]} data]
  (let [editing? (atom false)
        edit-text (atom text)]
    (reagent/create-class
      {:component-did-update (fn [this old-argv]                ;; reagent provides you the entire "argv", not just the "props"
                               (let [new-argv (rest (reagent/argv this))
                                     new-data (first new-argv)
                                     old-data (second old-argv)]
                                 (if (not= (:text new-data)
                                           (:text old-data))
                                   (do
                                     (reset! edit-text (:text new-data))
                                     (reset! editing? false)))))

       :reagent-render
       (fn [{:keys [text update-func class type]} data]
         [:div.editable {:class class}
          (if @editing?
            [:div.uk-flex
             [:input.uk-input.uk-input-small
              {:style       {:height "auto"
                             :min-width "40px"}
               :type type
               :on-key-down #(case (.-which %)
                               13 (do
                                    (.stopPropagation %)
                                    (update-func @edit-text)
                                    (reset! editing? false))
                               27 (do
                                    (.stopPropagation %)
                                    (reset! edit-text text)
                                    (reset! editing? false))
                               nil)
               :on-change   #(do
                               ;(if check-func (check-func %))
                               (reset! edit-text
                                       (case type
                                         :text (-> % .-target .-value)
                                         :number (if (js/isNaN (js/parseInt (-> % .-target .-value)))
                                                   0
                                                   (js/parseInt (-> % .-target .-value)))

                                         (-> % .-target .-value))))

               :auto-focus  true
               :value       @edit-text}]
             [:div [:span.uk-text-middle {:data-uk-icon    "close"
                                          :data-uk-tooltip "Mégsem"
                                          :style           {:min-height "20px"
                                                            :min-width "30px"
                                                            :cursor "pointer"}
                                          :on-click        #(do
                                                              (.stopPropagation %)
                                                              (reset! edit-text text)
                                                              (reset! editing? false))}]]
             [:div [:span.uk-text-middle {:data-uk-icon    "check"
                                          :data-uk-tooltip "Mentés"
                                          :style           {:min-height "20px"
                                                            :min-width "30px"
                                                            :cursor "pointer"}
                                          :on-click        #(do
                                                              (.stopPropagation %)
                                                              (dispatch [:set-modal
                                                                         {:open? true
                                                                          :content "Biztos módosítod?"
                                                                          :no-fn (fn [] (reset! edit-text text))
                                                                          :yes-fn (fn [] (update-func @edit-text))}])
                                                              (reset! editing? false))}]]]
            [:div.editable.uk-flex
             [:div.uk-text-truncate
              [:b text]]
             [:span {:width           "40px"
                     :on-click        #(do
                                         (.stopPropagation %)
                                         (reset! editing? (not @editing?)))
                     :data-uk-tooltip "Szerkesztés"
                     :data-uk-icon    "pencil" :style {:transform     "translate(0px, -5px)"
                                                       :margin-bottom "10px"}}]])])})))



(defn drag-drop-context [component {:keys [on-drag-start on-drag-update on-drag-end]}]
  (let []
    [:> DragDropContext
     {:onDragStart  on-drag-start
      :onDragUpdate on-drag-update
      :onDragEnd    on-drag-end}
     component]))

(defn label [title component]
  [:div.uk-flex
   [:div.uk-margin-small-right title " "]
   component])





(defn draggable-content [the-key data snapshot]
  [:div
   [:button.uk-button.uk-button-default.uk-position-top-right.uk-button-small
    {:on-click #(do
                  (dispatch [:set-modal
                             {:open? true
                              :content "Biztos módosítod?"
                              :no-fn (fn []) ;(reset! edit-text text))
                              :yes-fn (fn [] (dispatch [:remove-employee-service the-key (:_id data)]))}]))}

    [:span {:data-uk-icon "close"}]]
   (case the-key
     :employees [:<>
                 [:div [:b {:class (if (.-isDragging snapshot) "dnd-title-drag" "dnd-title")
                            :style {:font-size "1.3em"}}
                        [editable {:text (:name data)
                                   :type :text
                                   :update-func #(dispatch [:modify-item the-key :name (:_id data)  %])}]]]
                 ;[:div "Id: " [:b (:id data)]]
                 [:div "Prio: "  [:b (inc (:priority data))]]]
     :services [:<>

                [:div [:b {:class (if (.-isDragging snapshot) "dnd-title-drag" "dnd-title")
                           :style {:font-size "1.3em"}}
                       [editable {:type :text
                                  :text (:name data)
                                  :update-func #(dispatch [:modify-item the-key :name (:_id data) %])}]]]

                [label "Név(en): " [editable {:type :text
                                              :text (:enname data)
                                              :update-func #(dispatch [:modify-item the-key :enname (:_id data) %])}]]
                [label "Hossz: " [editable {:text (:length data)
                                            :type :number
                                            :update-func  #(dispatch [:modify-item the-key :length (:_id data) %])}]]

                [label "Ár: " [editable {:text (:price data)
                                         :type :number
                                         :update-func  #(dispatch [:modify-item the-key :price (:_id data) %])}]]
                [label "Szín: " [editable {:text (:color data)
                                           :type :color
                                           :update-func  #(dispatch [:modify-item the-key :color (:_id data) %])}]]
                [:div "Prio: " [:b (inc (:priority data))]]]
     (str the-key data))])


(defn dnd-draggable [data the-key]
  (let [idx (:priority data)]
    [:> Draggable
     {:draggable-id (str "draggable-" idx)
      :index idx}
     (fn [provided snapshot]
       (reagent/as-element
         [:div.uk-width-1-1.uk-flex.uk-flex-center
          [:div.uk-inline.draggable-row
           (merge {:class (str
                            (str "dnd-" (name the-key))
                            (if (.-isDragging snapshot) " dragged"))
                   :ref (.-innerRef provided)}
                  (js->clj (.-draggableProps provided))
                  (js->clj (.-dragHandleProps provided)))
           [draggable-content the-key data snapshot]]]))]))


(defn dnd-droppable [component the-key]
  [:> Droppable {:droppable-id (name the-key)
                 :type "thing"}
   (fn [provided snapshot]
     (reagent/as-element
       [:div.droppable-dnd
        (merge {:ref   (.-innerRef  provided)}
               ;:class (when (.-isDraggingOver snapshot) :drag-over)}
               (js->clj (.-droppableProps provided)))
        component
        (.-placeholder provided)]))])


(defn dnd [the-key]
  (let [coll (subscribe [:data the-key])]
   (reagent/create-class
     {:reagent-render (fn [the-key]
                        [:div.uk-padding
                         [:h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top {:style {:border-radius "10px" :background "#222"}}
                          (case the-key
                           :employees "Barberek"
                           :services "Szolgáltatások"
                           "else")]
                         [:div.uk-width-1-1
                          [:button.uk-align-center.uk-button.uk-button-primary
                           {:on-click #(dispatch [:add-new the-key])}
                           "Új hozzáadása"]]
                         [drag-drop-context
                          [dnd-droppable ;{:droppable-id "droppable-1" :type "thing"}
                           (map-indexed
                             #(-> ^{:key (:priority %2)}
                                  [dnd-draggable %2 the-key])
                             (sort-by :priority @coll))
                           the-key]
                          {:on-drag-end #(dispatch-sync [:drag-end the-key %
                                                         {:open? true
                                                          ; :title "Barber poziciójának módosítása"
                                                          :content "Biztos áthelyezed?"
                                                          :yes-fn (fn [a] (dispatch [:modify-positions the-key]))
                                                          :no-fn (fn [a] (dispatch [:restore-positions the-key]))}])}]])})))




(defn two-digits [number]
  (if (= (count (str number)) 1)
     (str "0" number)
     (str number)))

(defn str-from-date [date]
  (let [year (two-digits (time/year date))
        month (two-digits (time/month date))
        day (two-digits (time/day date))]
    (str year "-" month "-" day)))


(defn get-tomorrow [date-str]
  (let [date-splitted (clojure.string/split date-str #"-")
        [year month day] (map js/parseInt date-splitted)]
    (str-from-date
      (time/plus (time/date-time year month day) (time/days 1)))))

(defn get-yesterday [date-str]
  (let [date-splitted (clojure.string/split date-str #"-")
        [year month day] (map js/parseInt date-splitted)]
    (str-from-date
      (time/minus (time/date-time year month day) (time/days 1)))))


(defn anim-to [element timeout the-map]
  (.to js/TweenMax element timeout (clj->js the-map)))

(defn set-gsap [element the-map]
  (.set js/TweenMax element (clj->js the-map)))

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


(def grid-width 130)
(def grid-height 100)
(def step-height (/ grid-height 4))
(def border-width 1.2)
(def title-height 30)



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

(def last-scroll-pos (atom 0))
(def rect (atom nil))

(defn anim-frame-request [func]
      (. js/window (requestAnimationFrame func)))

(defn get-service-by-id [id]
  (let [services (fn [] (deref (subscribe [:data :services])))]
    (first (filter #(= id (:_id %))
                   (services)))))



(defonce dragging? (atom false))

(defn get-employee [number]
  (let [emp (first (filter #(= number (:priority %))
                           @(subscribe [:data :employees])))]
    (:_id emp)))

(defn extend-opening-hours [open-hours]
  [(- (first open-hours) 60)
   (+ (second open-hours) 60)])

(defn get-start [minutes]
  (let [opening-hours (subscribe [:data :opening-hours])
        selected-day (subscribe [:data :selected-day])
        get-pos-now (fn [] (first (extend-opening-hours (get @opening-hours @selected-day))))]
    (+ (get-pos-now)
       minutes)))

(defn convert-to-time [number]
  (let [hours (two-digits (quot number 60))
        minutes (two-digits (mod number 60))]
    (str hours ":" minutes)))



(defn one-event [id start-left start-top start-height the-event]
  (let [length (atom (* step-minute start-height))
        drag-end-listener (atom nil)
        drag-move-listener (atom nil)
        scroll-listener (atom nil)
        not-real-scroll? (atom false)
        dragged? (atom false)
        last-mouse-pos (atom [0 0])
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
                                                                                     @last-scroll-pos))))))
                        (reset! last-scroll-pos (.-scrollTop (.-documentElement js/document))))






        stop-resize (fn [a]
                        (remove-all)
                        (reset! dragged? false)
                        (dispatch [:modify-reservation (:reservation-id the-event)
                                   {:length (max 15 (* 15 (/ @height step-height)))}]))


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
                           (reset! length (* 15
                                             (/ (round-to-height new-height)
                                                step-height)))
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
                                  px-number 5]
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
                                                         0.01)))))






        on-pan-end (fn [event]
                       (reset! dragged? false)
                       (reset! dragging? false)
                       (if @scroll-interval (.clearInterval js/window @scroll-interval))
                       (remove-all)
                       (let [rounded (round-to-grid @left @top)]
                         (reset! left (first rounded))
                         (reset! top (second rounded))
                         (reset! left-temporary @left)
                         (reset! top-temporary @top)
                         (dispatch [:modify-reservation
                                    (:reservation-id the-event)
                                    {:start (get-start (* 15 (quot (second rounded) step-height)))
                                     :employee (get-employee (quot (first rounded)
                                                                grid-width))}])))



        on-pan (fn [a]
                   (if @dragged?
                     (let
                       [container (get-el "container")
                        scroll-width (.-scrollWidth container)
                        rect-width (.-clientWidth container)
                        rect-height (- (.-clientHeight container) title-height)
                        rect-left (.-left @rect)
                        rect-top (+ title-height (.-offsetTop container))
                        position (get-pos a)
                        click-left (first position)
                        click-top (second position)
                        new-left (- @left (- (first @last-mouse-pos) click-left)) ;uj baloldalt a mozgatas alapjan
                        new-top (- @top (- (second @last-mouse-pos) click-top))] ;uj fent a mozgatas alapjan]

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
                       ;(.log js/console (str "left: " new-left" gridwidth: " scroll-width))
                       (if (and
                             (<= (+ rect-left (/ grid-width 2)) (first @last-mouse-pos))
                             (<= (first @last-mouse-pos)
                                 (- (+ rect-left (.-clientWidth container)) (/ grid-width 2)))
                             (<= 0 new-left)
                             (<= new-left (- scroll-width grid-width)))
                         (do
                           (reset! left new-left))

                         (do
                           (if
                             (<= new-left 0)
                             (reset! left 0))

                           (if
                             (<= (- scroll-width grid-width)
                                 new-left)
                             (do

                               (reset! left (- scroll-width grid-width))))))

                       ;Top and Bottom Boundaries

                       (if
                         (and
                              (< click-top (+ rect-top (- rect-height (/ @height 2))))
                              (> click-top (+ rect-top (/ @height 2))))
                         (do
                           (reset! top new-top))
                         (if (<= click-top (+ rect-top (/ @height 2)))
                           (reset! top 0)
                           (reset! top (- rect-height @height))))
                       (reset! last-mouse-pos [click-left click-top]))))


        on-pan-start (fn [event]
                       (let [position (get-pos event)]; (reset! dragging? true)
                         (reset! rect (.getBoundingClientRect (get-el "scroll-container")))
                         (reset! dragged? true)
                         (reset! dragging? true)
                         (.stopPropagation event)
                         (reset! last-mouse-pos position)
                         (reset! drag-end-listener on-pan-end)
                         (reset! drag-move-listener on-pan)
                         (reset! scroll-listener scroll-event)

                         (if (is-touch? event)
                           (do
                             (add-event-listener js/window "touchmove" @drag-move-listener)
                             (add-event-listener js/window  "touchend" @drag-end-listener)
                             (add-event-listener js/window  "touchcancel" @drag-end-listener))
                           (do
                             (add-event-listener js/window "mousemove" @drag-move-listener)
                             (add-event-listener js/window  "mouseup" @drag-end-listener)
                             (add-event-listener js/window "scroll" @scroll-listener)))
                         false))
        hovered? (atom false)]




    (reagent/create-class
      {:component-did-mount #(do
                               (reset! rect (.getBoundingClientRect (get-el "scroll-container")))
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
       (fn [id start-left start-top start-height the-event]
         [:div.one-event.uk-inline
          {:class (if @dragged? "active" "")
           :id id
           :on-click #(reset! hovered? true)
           :on-mouse-leave #(reset! hovered? false)
           :style {;:overflow "hidden"
                   :touch-action "none"
                   :z-index (if @hovered? 1000 1)
                   :cursor  (if @dragged? "grabbing" "grab")
                   :left 0
                   :padding-left "5px"
                   :top 0

                   :border-top-right-radius "10px"
                   :border-bottom-right-radius "10px"
                   ;:border-top-left-radius "5px"
                   ;:border-bottom-left-radius "10px"
                   :transform (str "translate(" (+ 3 @left) "px," (+ 3 (+ title-height @top))
                                   "px)")
                   :color (cond (= true (:confirmed? the-event))
                                "black"
                                (= false (:confirmed? the-event))
                                "white"
                                :else "black")
                   :transition "0.01s transform ease"
                   :position "absolute"
                   :background (cond (= true (:confirmed? the-event))
                                     "rgb(255, 194, 0)"
                                     (= false (:confirmed? the-event))
                                     "#FF6F48"
                                     :else "lightgreen")

                   :border "0.5px solid #222"
                   :opacity (if @dragged? 1 1)
                   ;:border-top-right-radius "10px"
                   :width (str (- (- grid-width border-width) 8) "px")
                   :height (str (- @height 7) "px")}}
          [:div {:style {:height "100%" :background (:color (get-service-by-id (:service-id the-event)))
                         :width "5px" :z-index 2 :position "absolute" :left 0}}]
          [:div {:style {:overflow "hidden"
                         :height "100%"}}


           [:div {:style {:font-size "12px"
                          :padding-top "5px"
                          :padding-left "5px"
                          :font-weight "bold"
                          :line-height "12px"}}
            (str (:name the-event))]
           [:div
             {:style {:font-style "italic"
                      :font-size "10px"
                      :padding-top "5px"
                      :padding-left "5px"
                      :line-height "12px"}}
             (str (:name (get-service-by-id (:service-id the-event))))]]
          [:div {:id (str id "-resize")
                 :style {:cursor "ns-resize"
                         :height "10px" :width (- (- grid-width border-width) 4)
                         :bottom 0 :position "absolute" :z-index 1000}}]
          (if @hovered?
            [:div
             {:class "uk-position-top"
              :style {:position "fixed"
                      :z-index 1000
                      :color "black"
                      :background "white"
                      :border "1px solid black"
                      :transform (if
                                   (some #(= % start-top) [0 1 2 3 4])
                                   (str "translate(" (if (or (= 0 start-left))
                                                       (/ grid-width 3)
                                                       (- 0 (/ grid-width 2)))
                                        "px, 0px)")
                                   (str "translate("
                                        (if (or (= 0 start-left))
                                          (/ grid-width 3)
                                          (- 0 (/ grid-width 2)))
                                        "px, -100%)"))}}


             [:div.uk-grid-collapse.uk-child-width-1-2
              {:data-uk-grid true}

              [:div.uk-width-1-1
               {:style {:padding "2px"
                        :padding-left "4px"
                        :padding-right "4px"
                        :font-size "0.8em"}}
               [:div
                (str (:name the-event))]
               [:div (:name (get-service-by-id (:service-id the-event)))]
               [:div
                (str
                  (convert-to-time (:start the-event))
                  " - "
                  (convert-to-time (+ (:start the-event)
                                      (:length the-event))))]]
              [:div.uk-text-center {:style {:border-top "1px solid black"
                                            :padding "2px"
                                            :background "white"
                                            :border-right "1px solid black"

                                            :cursor "pointer"}
                                    ;:on-mouse-down #(.log js/console "pff")

                                    :on-click #(do
                                                 (dispatch [:add-to-db {:sidebar-open? true}])
                                                 (.preventDefault %)
                                                 ;(.preventDefault %)
                                                 (dispatch [:add-to-db {:reservation-editor the-event}])
                                                 false)}
               [:span {:data-uk-icon "file-edit"}]]
              [:div.uk-text-center {:style {:border-top "1px solid black"

                                            :padding "2px"
                                            :background "white"
                                            :cursor "pointer"}
                                    ;:on-mouse-down #(.log js/console "pff")

                                    :on-click #(do
                                                 (.preventDefault %)
                                                 ;(.preventDefault %)
                                                 (dispatch [:set-modal
                                                            {:open? true
                                                             :content "Biztos törlöd?"
                                                             :no-fn (fn [])
                                                             :yes-fn (fn [] (dispatch [:remove-calendar-event (name (:reservation-id the-event))]))}])
                                                 false)}
               [:span {:data-uk-icon "close"}]]]])])})))







(defn one-person [name id]
      [:div.uk-text-center.playfair.gold-text.bold-text
       {:on-click #(js/navigator.clipboard.writeText id)
        ;:data-uk-tooltip (str "title: id: " id)
        :style {:font-size "1.2em"
                :width (str grid-width "px")
                ;:position "absolute"
                :height (str title-height "px")}}
       name])





(defn map-row-title [times]
      [:div.black-bg {:style {:border-bottom-left-radius "10px"
                              :border-top-left-radius "10px"}}
       [:div {:style {:height (str title-height "px")}}]
       (map-indexed #(-> ^{:key %1}[:div.uk-text-right.uk-text-top
                                    {:style {:width "40px"
                                             :transform "translateY(-1px)"
                                             :line-height "10px"
                                             :height step-height
                                             :padding-right "10px"
                                             :padding-left "10px"}}
                                    (cond
                                      (= 0 (mod %2 60))
                                      [:div.gold-text.bold-text
                                       {:style {:font-size "0.8em"}}
                                       (convert-to-time %2)]
                                      (= 0 (mod %2 30))
                                      [:div.bold-text.gold-text
                                       {:style {:font-size "0.7em"}}
                                       (convert-to-time %2)])])
                    times)])

(defn only-positive [number]
  (if (< number 0)
    0
    number))

(defn map-column-title [employees]
      (let [container (fn [] (if (.getElementById js/document "scroll-container") (.getElementById js/document "scroll-container") nil))
            offset-top (fn [] (if (container) (.-offsetTop (container)) 0))]
        (fn [employees]
          [:div.black-bg.column-titles
           {:style {:display "flex"
                    :position "absolute"
                    :z-index 2
                    :transform (str "translateY(" (if @rect (if (> @last-scroll-pos (offset-top))
                                                              (- @last-scroll-pos (offset-top))
                                                              0)
                                                            0)"px)")}}
           (map-indexed (fn [col-i a] (-> ^{:key col-i}[one-person (:name a) (:_id a)]))
                        employees)])))


(defn check-if-in-range [brakes this]
  "Decides if this cell is a brake"
  (if (some #(let [start (first %)
                   finish (second %)]
               (and (>= this start) (< this finish)))
            brakes)
    true
    false))


(defn is-break? [brakes this-time]
  "decides if this is a brake with getting from @brakes"
  (let []
    (if brakes
      (check-if-in-range brakes this-time)
      true)))

(defn one-cell [col-i employee row-i time]
  (let [selected-date (subscribe [:data :selected-date])];brakes (subscribe [:brakes (:id employee)])]
    [:div.one-cell
     {:on-click #(do
                   (dispatch [:add-to-db {:sidebar-open? true}])
                   ;(.log js/console (str col-i " - " row-i " " time " " employee))
                   (dispatch [:add-to-db {:reservation-editor {:start time
                                                               :date @selected-date
                                                               :employee (:_id employee)
                                                               :service-id "nil"}}]))
      :style {:cursor "pointer"
              :width (str (- grid-width border-width) "px")
              :height (str (- step-height border-width) "px")
              :border-right (str border-width "px solid #222")
              :border-top (if (= 0 (mod row-i 4))
                            (str border-width "px solid #222")
                            (if (= 0 (mod row-i 2))
                              (str border-width "px solid silver")
                              (str border-width "px solid transparent")))}}]))


(defn map-calendar [rows columns]
      [:<>
       (map-indexed (fn [col-i employee]
                        (-> ^{:key col-i}
                            [:div {:style {:background "white"}}
                             [:div {:style { :height (str title-height "px")}}]
                             (doall
                               (map-indexed
                                      (fn [row-i time]
                                          (-> ^{:key row-i}
                                              [one-cell col-i employee row-i time]))
                                      rows))]))
                    columns)])

(defn actual-time-sign [container]
  (let [elapsed-time (atom 0)
        now (new js/Date)
        day (.getDate now)
        month (two-digits (inc (.getMonth now)))
        year (.getFullYear now)
        str-date (str year "-" month "-" day)
        selected-date (subscribe [:data :selected-date])
        minutes (.getMinutes now)
        hours (.getHours now)
        in-minutes (+ minutes (* hours 60))
        interval (atom nil)
        one-minute-step (/ grid-height 60)
        opening-hours (subscribe [:data :opening-hours])
        selected-day (subscribe [:data :selected-day])
        get-pos-now (fn [] (- in-minutes (first (extend-opening-hours (get @opening-hours @selected-day)))))
        all-minutes (+ in-minutes @elapsed-time)
        height 2]
       ; p (.log js/console (str str-date" "@selected-date " "))]
    (reagent/create-class
      {:component/did-unmount (.clearInterval js/window @interval)
       :component-did-mount #(reset! interval
                                     (.setInterval js/window (fn [a] (reset! elapsed-time (inc @elapsed-time)))
                                                             60000))
       :reagent-render
       (fn []
         (if (= @selected-date str-date)
           [:div#actual-time
            {:style {:top (str  (min (+
                                       (* one-minute-step (get-pos-now))
                                       (* one-minute-step @elapsed-time)
                                       title-height)
                                     (+ title-height
                                        (-
                                          (* one-minute-step
                                             (- (second (extend-opening-hours (get @opening-hours @selected-day)))
                                                (first (extend-opening-hours (get @opening-hours @selected-day)))))
                                          height)))
                                "px")
                     :position "absolute"

                     :z-index 1000
                     :width (if @container
                              (str (.-scrollWidth @container) "px")
                              "50px")
                     :height (str height "px")
                     :background "red"}}]))})))



(defn one-brake [column row length the-key]
  ;:work :no-work
  (let [calc-left (* column grid-width)
        calc-top (* row step-height)]
    [:div.break
     {:style {:z-index 0
              :background (if (= the-key :work)
                            "rgba(0,0,0,0.3)"
                            "rgba(0,0,0,0.3)")
              :width (str (- grid-width border-width)
                          "px")
              :height (str (* length step-height)
                           "px")

              :position "absolute"
              :transform (str "translate(" calc-left "px," (+ title-height calc-top)
                              "px)")}}]))



(defn calendar []
  (let [container (atom nil)
        employees (subscribe [:data :employees])
        services (subscribe [:data :services])
        reservations (subscribe [:data :reservations])
        opening-hours (subscribe [:data :opening-hours])

        selected-day (subscribe [:data :selected-day])
        this-open-hours (fn [] (if (= [] (extend-opening-hours (get @opening-hours @selected-day)))
                                 nil
                                 (extend-opening-hours (get @opening-hours @selected-day))))
        get-column-number (fn [id] (first (keep-indexed (fn [index value]
                                                          (if (= id (:_id value))
                                                            index))
                                                        @employees)))
        get-row-number (fn [start]
                         (quot
                           (- start (first (this-open-hours)))
                           15))
        all-columns (fn [] @employees)
        all-rows (fn [] (let []
                          (if (this-open-hours)
                            (take-nth 15 (range
                                           (first (this-open-hours))
                                           (second (this-open-hours))))
                            (take-nth 15 (range 800
                                                1600)))))
        keydown-interval (atom nil)
        brakes (subscribe [:data :brakes])]
    (reagent/create-class
     {:component-did-update #(do
                               (reset! container (get-el "container")))
      :component-did-mount #(do
                              (dispatch [:dec-loader])
                              (reset! container (get-el "container"))
                              (add-event-listener js/window "scroll" (fn [a]
                                                                       (if-not @dragging?
                                                                         (reset! last-scroll-pos (.-scrollTop (.-documentElement js/document))))))
                              (add-event-listener js/window "keydown"
                                                  (fn [a]
                                                      (let [running? (if @keydown-interval true false)]
                                                           (case (.-key a)
                                                                 "ArrowLeft" (if-not running?
                                                                                     (reset! keydown-interval
                                                                                             (.setInterval js/window
                                                                                               (fn [b] (set!
                                                                                                         (.-scrollLeft (get-el "scroll-container"))
                                                                                                         (- (.-scrollLeft (get-el "scroll-container")) 5)))
                                                                                               0.05)))
                                                                 "ArrowRight" (if-not running?
                                                                                      (reset! keydown-interval
                                                                                              (.setInterval js/window
                                                                                                (fn [b] (set!
                                                                                                          (.-scrollLeft (get-el "scroll-container"))
                                                                                                          (+ (.-scrollLeft (get-el "scroll-container")) 5)))
                                                                                                0.05)))
                                                                 nil))))
                              (add-event-listener js/window "keyup" (fn [a]
                                                                        (if @keydown-interval
                                                                          (do
                                                                            (.clearInterval js/window @keydown-interval)
                                                                            (reset! keydown-interval nil))))))

                              ;(dispatch [:init-calendar "container"]))
      :reagent-render
       (fn []
           [:div#calendar.uk-width-.uk-flex.uk-flex-center
            {:style {:display "flex"
                     :padding-left "40px"
                     :padding-right "30px"
                     :padding-bottom "100px"}}
            [map-row-title (all-rows)]
            [:div#scroll-container {:style {:overflow-x "auto"}}

             [:div#container.uk-inline.noselect
              {:style {:display "flex"  :z-index 40}}
              [actual-time-sign container]
              [map-column-title (all-columns)]
              [map-calendar (all-rows) (all-columns)]
              (doall
                (map-indexed #(let [col (get-column-number (:employee %2))
                                    row (get-row-number (:start %2))]
                                (-> ^{:key (str (:reservation-id %2) (:length %2) col row)}
                                    [one-event
                                     (str "box" (:reservation-id %2))
                                     col row
                                     (/ (:length %2) step-minute)
                                     %2]))
                  @reservations))
              ;(str @brakes)
              (doall
                (map (fn [[barber barber-brakes]]
                       (doall
                         (if (vector? barber-brakes)
                           (map-indexed (fn [index one-brake-data]
                                          (-> ^{:key (str index one-brake-data)}
                                              [one-brake
                                               (get-column-number barber)
                                               (get-row-number (first one-brake-data))
                                               (/ (- (second one-brake-data)
                                                     (first one-brake-data))
                                                  15)
                                               :work]))
                             barber-brakes)
                           ^{:key (str (random-uuid))}
                           [one-brake
                                    (get-column-number barber)
                                    0
                                    (if (this-open-hours)
                                      (quot (let [[a b] (this-open-hours)]
                                              (- b a))
                                            step-minute)
                                      (quot 815
                                            step-minute))
                                    :nowork])))
                     @brakes))]]])})))






(defn home-page []
  (let [server-time (subscribe [:data :server-time])
        post-request (subscribe [:data :post-request])]
     (reagent/create-class
       {:component-did-mount #(dispatch [:get-user])
         :reagent-render
          (fn []
            [:div
             [:div.uk-container.uk-container-small.uk-margin-large-top
              [:div.uk-card.uk-card-default
               ;[proba-dnd]
               [calendar]]
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

(defn calendar-loader []
  (let [calendar-data-loaded? (subscribe [:calendar-data-loaded?])]
    (reagent/create-class
      {:component-did-mount #(do
                               (dispatch [:inc-loader])
                               (dispatch [:get-calendar-data]))
       :reagent-render
       (fn []
           [:div
            [calendar]])})))

(def input-width "225px")

(defn input-wrapper [content])






(defn simple-input [config the-atom the-key]
  (let [rand-id (str (random-uuid))]
    [:div
     [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
      [:label.uk-form-label.gold-text.bold-text {:for rand-id}
       (:placeholder config)]
      [:div.uk-form-controls
       [:input.uk-input.rounded {:id rand-id :value (get @the-atom the-key) :type "text" :on-change #(swap! the-atom assoc the-key (-> % .-target .-value))}]]]]))
  ;[:div.res-input
   ;[:input.uk-input.uk-width-medium {:placeholder placeholder}]])

(defn date-input [config the-atom the-key]
  (let [rand-id (str (random-uuid))]
    [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
     [:label.uk-form-label.gold-text.bold-text {:for rand-id} (:placeholder config)]
     [:div.uk-form-controls
      [:input.uk-input.rounded
       {:id rand-id
        :value (get @the-atom the-key)
        :type "date"
        :on-change #(swap! the-atom assoc the-key (-> % .-target .-value))}]]]))


(defn convert-to-minutes [time]
  (let [[hours minutes] (clojure.string/split time ":")]
    (+ (js/parseInt minutes)
       (* 60 (js/parseInt hours)))))



(defn time-input [the-atom]
  (let [rand-id (str (random-uuid))
        rand-id2 (str (random-uuid))]
    [:<>
     [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
      [:label.uk-form-label.gold-text.bold-text {:for rand-id} "tól"]
      [:div.uk-form-controls
       [:input.uk-input.rounded {:id rand-id
                                 :value (convert-to-time (:start @the-atom))
                                 :type "time" :on-change #(swap! the-atom assoc :start
                                                                 (convert-to-minutes (-> % .-target .-value)))}]]]
     [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
      [:label.uk-form-label.gold-text.bold-text {:for rand-id2} "ig"]
      [:div.uk-form-controls
       [:input.uk-input.rounded {:id rand-id2
                                 :value (convert-to-time (+ (:start @the-atom) (:length @the-atom)))
                                 :type "time" :on-change #(swap! the-atom assoc :length (- (convert-to-minutes (-> % .-target .-value))
                                                                                           (:start @the-atom)))}]]]]))



(defn select-employee [the-atom the-key]
  (let [employees (subscribe [:data :employees])]
    (fn [the-atom the-key]
      [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
       [:label.uk-form-label.gold-text.bold-text {:for "form-stacked-text"} "Barber"]
       [:div.uk-form-controls
         [:select.uk-select.rounded {:value (get @the-atom the-key)
                                     :on-change (fn [a] (swap! the-atom assoc the-key (-> a .-target .-value)))}
          [:option {:value "nil"}
           "Nincs kiválasztva"]
          (map-indexed
           #(-> ^{:key (:id %2)}[:option {:value (:_id %2)}
                                 (:name %2)])
           @employees)]]])))

(defn select-service [the-atom the-key]
  (let [services (subscribe [:data :services])]
    (fn [the-atom the-key]
      [:div.uk-align-center.uk-margin-remove-bottom {:style {:margin-top "5px" :width input-width}}
       [:label.uk-form-label.gold-text.bold-text {:for "form-stacked-text"} "Szolgáltatás"]
       [:div.uk-form-controls
        [:select.uk-select.rounded {:value (get @the-atom the-key)
                                    :on-change (fn [a]
                                                 (swap! the-atom assoc the-key (-> a .-target .-value)
                                                        :length (:length (first (filter
                                                                                  #(= (:_id %)
                                                                                      (-> a .-target .-value))
                                                                                  @services)))))}

         [:option {:value "nil"}
          "Nincs kiválasztva"]
         (map-indexed
          #(-> ^{:key (:_id %2)}[:option {:value (:_id %2)}
                                 (:name %2)])
          @services)]]])))





(defn reservation-editor [data-atom]
  (let [editor-atom (atom data-atom)
        user-data (subscribe [:data :user-data])
        esc-listener (atom nil)
        no-fn (fn [] (dispatch [:add-to-db {:reservation-editor nil}]))
        yes-fn (fn []
                 (dispatch [:modify-reservation (:reservation-id @editor-atom) @editor-atom])
                 (dispatch [:add-to-db {:reservation-editor nil}]))
                 ;(dispatch [:add-modify-calendar-event @editor-atom]))
        esc-fn (fn [a]
                 (if (= 27 (.-which a))
                     (no-fn)))
        enter-listener (atom nil)
        enter-fn (fn [a] (if (= 13 (.-which a))
                           (yes-fn)))]
    (reagent/create-class
     {:component-did-update (fn [this old-argv]                ;; reagent provides you the entire "argv", not just the "props"
                              (let [new-argv (rest (reagent/argv this))
                                    new-data (first new-argv)
                                    old-data (second old-argv)]
                                (if
                                  (not= old-data new-data)
                                  (reset! editor-atom new-data))))
      :component-did-mount #(do
                              (reset! esc-listener esc-fn)
                              (reset! enter-listener enter-fn)
                              (add-event-listener js/window "keydown" @esc-listener)
                              (add-event-listener (get-el "reservation-editor") "keydown" @enter-listener))
      :component-will-unmount #(remove-event-listener js/window "keydown" @enter-listener)
      :reagent-render
      (fn [data-atom]
        [:div#reservation-editor.uk-width-1-1.uk-margin-large-top

         [:div.uk-text-center.gold-text.playfair {:style {:font-size "1.7em" :margin-bottom "20px" :margin-top "10px"}}
          (if (contains? @editor-atom :reservation-id)
            "Módosítás"
            "Új foglalás")]
         ;(str @editor-atom)
         [:form.uk-form-stacked
          [:div
           [simple-input {:placeholder "Név"} editor-atom :name]
           (if
             (or
               (not (contains? @editor-atom :reservation-id))
               (= "admin" (:role @user-data)))
             [simple-input {:placeholder "E-mail"} editor-atom :email])
           (if
             (or
               (not (contains? @editor-atom :reservation-id))
               (= "admin" (:role @user-data)))
             [simple-input {:placeholder "Telefonszám"} editor-atom :phone])
           [date-input {:placeholder "Dátum"} editor-atom :date]
           [time-input editor-atom]
           [select-employee editor-atom :employee]
           [select-service editor-atom :service-id]]]
         [:div.uk-width-1-1.uk-flex.uk-flex-center.uk-margin-small-top.uk-margin-bottom
          [:div.uk-padding-small [:button.uk-button.res-cancel-button.rounded {:on-click #(no-fn)} "Mégsem"]]
          [:div.uk-padding-small [:button.uk-button.res-save-button.rounded {:on-click #(yes-fn)}
                                  "Mentés"]]]])})))



(defn menu-item [menu? data]
  [:button.uk-button.menu-item {:on-click #(do
                                             (if (= :calendar (:page data))
                                               (reset! menu? false))
                                             (dispatch [:add-to-db {:actual-page (:page data)}]))}
   (:name data)])

(defn menu [menu?]
  [:div.uk-animation-fade {:style {:margin-top "40px"}}
   [menu-item menu? {:name "Naptár" :page :calendar}]
   [menu-item menu? {:name "Szünetek" :page :brakes}]
   [menu-item menu? {:name "Kliensek" :page :clients}]
   [menu-item menu? {:name "Barberek" :page :employees}]
   [menu-item menu? {:name "Szolgáltatások" :page :services}]
   [menu-item menu? {:name "Statisztikák" :page :statistics}]])


(defn sidebar-content []
  (let [user-data (subscribe [:data :user-data])
        selected-date (subscribe [:data :selected-date])
        editor-data (subscribe [:data :reservation-editor])
        menu? (atom false)
        user (subscribe [:data :user-data])
        today (subscribe [:data :today])]
    (fn []
      [:div#blocks
       (if
         (= "admin" (:role @user-data))
         [:div {:on-click #(reset! menu? (not @menu?))
                :style {:z-index 1000
                        :cursor "pointer"
                        :padding "10px"
                        :position "absolute"
                        :left 0
                        :top 0}}
          [:span
           {:style {
                    :color "white"
                    :padding "5px"
                    :border "1px solid white" :border-radius "5px"}
            :data-uk-icon "menu"}]])
       [:div
        [:button.uk-button.menu-item
         [:a {:style {:color "white"}
              :href "/logout"}
          "Kijelentkezés"]]
        (if @editor-data
          [:div
           [reservation-editor @editor-data]]
          (if @menu?
            [menu menu?]
            [:div.uk-animation-fade
             [:div.uk-padding.uk-padding-remove-bottom.uk-padding-remove-top
              [:img.uk-align-center.uk-margin-remove-bottom {:src (str "/logo/" (:shop-id @user-data))}]]
             ;(str @user)
             [flatpickr
              {:value @selected-date
               :options {:locale "hu"
                         :minDate (if (= "admin" (:role @user))
                                    nil
                                    @today)
                         :inline true :onChange (fn [selected-dates date-str instance]
                                                    (dispatch [:select-date date-str]))}}]]))]])))

(defn calendar-sidebar []
  (let [open? (subscribe [:data :sidebar-open?])
        last-open? (atom true)
        close-func (fn [] (do
                              (reset! last-open? false)
                              (anim-to
                                (get-el "sidebar")
                                0.3
                                (clj->js {:transform "translateX(-100%)"
                                          :clearProps"transform"
                                          :onComplete (fn [a]
                                                        (set-gsap (get-el "sidebar") (clj->js {:width "0px"}))
                                                        (set-gsap (get-el "sidebar-inner") (clj->js {:left "-340px"})))}))))
        open-func (fn [] (do (reset! last-open? true)
                             (do
                               (set-gsap (get-el "sidebar-inner") (clj->js {:left "0px" :opacity 0}))
                               (set-gsap
                                 (get-el "sidebar")
                                 (clj->js { :position "relative" :transform "translateX(-100%)"}))
                               (anim-to
                                 (get-el "sidebar")
                                 0.3
                                 (clj->js {:transform "translateX(0%)" :width "340px"
                                           :onComplete (fn [a]
                                                         (set-gsap (get-el "sidebar-inner") (clj->js {:opacity 1})))})))))]
                                           ;:clearProps"transform"})))))]

    (reagent/create-class
      {:component-did-update #(if (not= @last-open? @open?)
                                (if @open?
                                  (open-func)
                                  (close-func)))

       :reagent-render
       (fn []
         [:div#sidebar {:style {:background "#222" :width (str sidebar-width "px")}}
          [:div#sidebar-inner {:style {:height "100vh" :position "fixed" :width "340px"}}
                                 ;:transform "translateX(-100%)"}}
           [:div.uk-inline {:style {:height "100%" :width "100%"}} ;:overflow "auto"}}
            [:div.uk-padding-small {:style {:height "100%" :overflow-y "auto"}}
             [:div#trapezium.uk-text-center
              {:style {:z-index 100}
               :on-click #(dispatch [:add-to-db {:sidebar-open? (not @open?)}])}
              [:span {:data-uk-icon (str "ratio: 1.5; icon: " (if @open? "chevron-left" "chevron-right"))}]]
             [:div
              {:style {:height "100%" :overflow "auto"}}
              [sidebar-content]]]]]])})))


(defn this-date []
  (let [selected-date-and-day (subscribe [:selected-date-and-day])
        reservations (subscribe [:data :reservations])
        user (subscribe [:data :user-data])
        today (subscribe [:data :today])
        day-name (fn [day-key]
                   (case day-key
                     :monday "Hétfő"
                     :tuesday "Kedd"
                     :wednesday "Szerda"
                     :thursday "Csütörtök"
                     :friday "Péntek"
                     :saturday "Szombat"
                     :sunday "Vasárnap"
                     "unknown"))
        month-name (fn [month-number]
                     (case month-number
                       "01" "Január"
                       "02" "Február"
                       "03" "Március"
                       "04" "Április"
                       "05" "Május"
                       "06" "Június"
                       "07" "Július"
                       "08" "Augusztus"
                       "09" "Szeptember"
                       "10" "Október"
                       "11" "November"
                       "12" "December"
                       "unknown"))
        date-in-str (fn [] (let [[year month day] (clojure.string/split (first @selected-date-and-day)
                                                                        #"-")]
                             (str (month-name month) " " day)))]
    [:div.gold-text.playfair.uk-text-center.uk-padding.uk-padding-bottom-remove.noselect.uk-width-medium.uk-align-center
     [:div.this-date.uk-inline.uk-height-small {:style {:align-items "center" :background "#222" :padding "5px" :border-radius "10px"}}
      (if
        (and (not= "admin" (:role @user))
             (= @today (first @selected-date-and-day)))
        nil
        [:div.uk-margin-small-right.uk-position-center-left {:on-click #(do
                                                                          (dispatch [:add-to-db {:reservation-editor nil}])
                                                                          (dispatch [:select-date (get-yesterday (first @selected-date-and-day))]))
                                                             :style {:cursor "pointer"}
                                                             :data-uk-icon "ratio:1.5; icon: chevron-left"}])
      [:div.uk-position-center [:div
                                {:style {:font-size "1.8em"}}
                                (date-in-str)]
            [:div
             {:style {:font-size "1.5em"}}
             (day-name (second @selected-date-and-day))]
            [:div
             {:style {:font-size "1.3em"}}
             (str (count @reservations) " vendég")]]
      [:div.uk-margin-small-left.uk-position-center-right {:on-click #(do
                                                                        (dispatch [:add-to-db {:reservation-editor nil}])
                                                                        (dispatch [:select-date (get-tomorrow (first @selected-date-and-day))]))
                                                           :style {:cursor "pointer"}
                                                           :data-uk-icon "ratio:1.5; icon: chevron-right"}]]]))

(defn calendar-page []
  (let [websocket? (subscribe [:data :websocket?])
        reservations (subscribe [:data :reservations])]
    (fn []
       [:div.uk-width-expand
        [this-date]
        (if @websocket?
          [calendar-loader])])))


(defn modal []
  (let [sidebar-open? (subscribe [:data :sidebar-open?])
        modal-state (subscribe [:data :modal])
        last-open? (atom false)
        open-fn (fn [] (do
                         (reset! last-open? true)
                         (set-gsap (get-el "modal") {:display "inherit"})
                         (anim-to (get-el "modal") 1000 {:opacity 1})))
        close-fn (fn [] (do
                          (reset! last-open? false)
                          (set-gsap (get-el "modal") {:display "none"})))
        esc-listener (atom nil)
        no-fn (fn []
                (do
                  (dispatch [:set-modal {:open? false}])
                  ((:no-fn @modal-state))))
        yes-fn (fn []
                 (do
                   (dispatch [:set-modal {:open? false}])
                   ((:yes-fn @modal-state))))
        no-event (fn [a]
                   (if @last-open?
                     (if (= 27 (.-which a))
                       (no-fn))))
        enter-listener (atom nil)
        yes-event (fn [a]
                    (if @last-open?
                        (if (= 13 (.-which a))
                            (yes-fn))))]
    (reagent/create-class
      {:component-did-mount #(do
                               (reset! esc-listener no-event)
                               (reset! enter-listener yes-event)
                               (add-event-listener js/window "keydown" @esc-listener)
                               (add-event-listener js/window "keydown" @enter-listener))
       :component-will-unmount #(remove-event-listener js/window "keydown" @enter-listener)
       :component-did-update #(if (not= @last-open? (:open? @modal-state))
                                (if (:open? @modal-state)
                                  (open-fn)
                                  (close-fn)))
       :reagent-render
         (fn []
           [:div#modal.uk-inline
            {:style {:position "fixed"
                     :top 0
                     :left (if @sidebar-open?
                             (str sidebar-width "px")
                             "0px")
                     :display "none" :background "rgba(0,0,0,0.7)"
                     :height "100%"
                     :z-index 1000
                     :width (if @sidebar-open?
                              (str "calc(100% - " sidebar-width "px)")
                              "100%")}}
            [:div
             {:style {:z-index 5000}}]
            [:div.uk-position-center.uk-padding-small
             {:style {:z-index 5001
                      :background "white"
                      :width "400px"
                      :border-radius "10px"
                      :border "1px solid black"}}
             (if (:title @modal-state)
               [:h4 (:title @modal-state)])
             [:p.uk-text-bigger (:content @modal-state)]
             [:div.uk-width-1-1.uk-flex
              [:button.uk-button.uk-button-default.uk-flex-1
               {:on-click no-fn}
               "Nem"]
              [:button.uk-button.uk-button-default.uk-flex-1
               {:on-click yes-fn}
               "Igen"]]]])})));






(defn brakes-slider [brake-coll]
  (let [brake-types (subscribe [:data :brake-types])
        brake-not-exists? (fn [brakes this-brake]
                            (empty? (filter
                                      (fn [a] (= a this-brake))
                                      (map #(reduce concat %)
                                           (map :brakes brakes)))))
        add-brakes (fn [coll] (reset! brake-coll coll))]

    (fn []
      [:div ;{:style {:width "500px" :height "1000px" :background "rgba(0,0,0,0.7)"}}
       [:div.uk-container.uk-container-small
        [:div {:style {:padding-top "20px"
                       :height "50px"}}
         [react-slider
          {:className "horizontal-slider"
           :thumbClassName "example-thumb"
           :trackClassName "example-track"
           :min 360
           :max 1440
           :step 5
           ;:orientation "vertical"
           ;:invert true
           :defaultValue @brake-coll
           :value (clj->js @brake-coll)
           :onAfterChange #(reset! brake-coll (js->clj %))
           ;:onBeforeChange #(.log js/console (str "changing" %2))
           :renderThumb (fn [props state]
                          (reagent/as-element
                            [:div.in-thumb (merge
                                             (js->clj props)
                                             {:class (if (odd? (.-index state))
                                                       "in-thumb-right"
                                                       "in-thumb-left")})



                                                  ;{:data-uk-tooltip  (str "pos:bottom; title:" (convert-to-time (.-valueNow state)))})
                             (str (convert-to-time (.-valueNow state)))]))
           :pearling true
           :minDistance 15}]]]
       (if (brake-not-exists? @brake-types @brake-coll)
         [:div.uk-width-1-1
          [:button.uk-align-center.uk-button.uk-button-primary
           {:on-click #(dispatch [:add-brake-type (mapv vec (partition 2 @brake-coll))])}
           "Szünettípus hozzáadása"]])
       [:div.uk-flex.uk-flex-center.uk-width-1-1
        [:button.uk-button.uk-button-default {:on-click #(add-brakes [600 690])} "1 szünet"]
        [:button.uk-button.uk-button-default {:on-click #(add-brakes [600 690 800 860])} "2 szünet"]
        [:button.uk-button.uk-button-default {:on-click #(add-brakes [600 690 800 860 1000 1080])} "3 szünet"]
        [:button.uk-button.uk-button-default {:on-click #(add-brakes [600 690 800 860 1000 1080 1210 1300])} "4 szünet"]]])))




(defn toggle-remove-add [coll item]
  (if (empty? (filter #(= item %) coll))
    (vec (concat  [item] coll))
    (vec (remove #(= item %) coll))))




(defn employee-for-brake [the-atom data]
  [:div.uk-padding-small.uk-width-auto
   [:div.uk-card.uk-card-default.uk-padding-small
    {:style {:border-radius "5px" :cursor "pointer" :user-select "none"}
     :class (if (some #(= (:_id data) %)
                      @the-atom)
              "active-employee")
     :on-click (fn [a] (reset! the-atom (toggle-remove-add @the-atom (:_id data))))}
    (str (:name data))]])

(defn employees-for-brakes [the-atom]
  (let [emps (subscribe [:data :employees])]
    (fn []
      [:div
       [:h1.uk-text-center "Barberek"]
       [:div.uk-grid-collapse {:data-uk-grid true}
        (map-indexed #(-> ^{:key %1}[employee-for-brake the-atom %2])
                     @emps)]])))


(defn brake-type [selected-brake-types selected-brakes data]
  [:div.uk-padding-small.uk-width-auto
   [:span.uk-position-right {:data-uk-icon "close"
                             :on-click #(dispatch [:remove-brake-type (:_id data)])
                             :style {:cursor "pointer"}}]
   [:div.uk-card.uk-card-default.uk-padding-small
    {:style {:border-radius "5px" :cursor "pointer" :user-select "none"}
     :class (if (= (:_id data) @selected-brake-types)
              "active-employee")
     :on-click (fn [a]
                 (reset! selected-brakes (vec (reduce concat (:brakes data))))
                 (reset! selected-brake-types (:_id data)))}
    (map-indexed
      #(-> ^{:key (random-uuid)}
            (let [[a b] %2]
              [:div
               (convert-to-time a)
               " - "
               (convert-to-time b)]))
      (:brakes data))]])


(defn brake-types [selected-brakes selected-brake-types]
  (let [brake-types (subscribe [:data :brake-types])]
    (fn [selected-brakes selected-brake-types]
      [:div.uk-padding-small
       [:h1.uk-text-center "Szünettípusok"]
       [:div.uk-grid-collapse
        {:data-uk-grid "masonry: true"}
        (map-indexed #(-> ^{:key %1}[brake-type selected-brake-types selected-brakes %2])
                     @brake-types)]
       [brakes-slider selected-brakes]])))


(defn table-for-brakes [table-data]
  (let [employees (subscribe [:data :employees])
        get-emp (fn [id] (:name (first (filter #(= (:_id %) id)
                                               @employees))))]
    [:table.uk-table.uk-table-striped.uk-table-small.uk-table-divider
     [:thead
      [:tr
       [:th]
       (map-indexed #(-> ^{:key %1}[:th (get-emp %2)])
                    (sort (set (map first table-data))))]]
     [:tbody
      (map-indexed #(-> ^{:key %1} [:tr
                                    [:td (str (subs (first %2) 5))]
                                    (map-indexed (fn [idx b] (-> ^{:key idx}[:td (if (and (not (empty? (nth b 2)))
                                                                                          (not= nil (nth b 2)))
                                                                                   (map-indexed (fn [the-idx [time1 time2]]
                                                                                                  (-> ^{:key (random-uuid)}[:div (convert-to-time time1) " - " (convert-to-time time2)]))
                                                                                                (nth b 2))
                                                                                   "-")]))
                                         (second %2))])

                   (sort-by first (group-by second table-data)))]]))



(defn brakes []
  (let [selected-dates (atom [])
        selected-employees (atom [])
        selected-brakes (atom [720 780 900 1100])
        selected-brake-type (atom [])
        table-data (subscribe [:data :brakes-on-dates])]
    (fn []
      [:div
       [:div.uk-child-width-1-2.uk-grid-collapse.uk-width-1-1.uk-card.uk-card-default
        {:data-uk-grid true}
        [:div.uk-width-auto.uk-padding-small
         [:h1.uk-text-center"Napok"]
         [flatpickr
          {:mode "multiple"
           :value @selected-dates
           :options {:locale "hu"
                     :inline true :onChange
                             (fn [a date-str instance]
                               (reset! selected-dates
                                       (toggle-remove-add @selected-dates date-str)))}}]]
        [:div.uk-width-expand.uk-padding-small
         [employees-for-brakes selected-employees]]
        (if (and (not (empty? @selected-dates))
                 (not (empty? @selected-employees)))
          [:div.uk-width-1-1.uk-padding-small.uk-flex.uk-flex-center
           {:style {:border-top "1px solid lightgrey"
                    :border-bottom "1px solid lightgrey"}}
           [:button.uk-button.uk-button-primary
            {:on-click #(dispatch [:get-brakes-on-dates @selected-dates @selected-employees])}
            "Táblázat lekérése"]
           (if @table-data
             [:button.uk-button.uk-button-secondary
              {:on-click #(dispatch [:assoc-data-to-key :brakes-on-dates nil])}
              "Táblázat törlése"])])
        [:div.uk-width-1-1
         [table-for-brakes @table-data]]
        [:div.uk-width-1-1
         [brake-types selected-brakes selected-brake-type]]
        [:div.uk-width-1-1.uk-padding-small
         [:button.uk-button.uk-button-primary.uk-align-center
          {:on-click #(dispatch [:add-brakes-to-dates @selected-dates @selected-employees @selected-brake-type])}
          "Szünet mentése a kijelölt barbekre és napokra"]
         [:button.uk-button.uk-button-secondary.uk-align-center
          {:on-click #(dispatch [:add-brakes-to-dates @selected-dates @selected-employees nil])}
          "Szünet törlése a kijelölt barbekre és napokra"]]]])))






(defn clients-page []
  (let [clients (subscribe [:data :clients])
        the-count (subscribe [:data :clients-count])]
    (reagent/create-class
      {:component-did-mount #(do
                               (dispatch [:get-clients])
                               (dispatch [:get-clients-count]))
       :reagent-render (fn []
                         [:div.uk-container.uk-container-large
                          [:div.uk-padding
                           [:h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top
                            {:style {:border-radius "10px" :background "#222"}}
                            "Kliensek: " (str @the-count)]]
                          [:div (map-indexed
                                  #(-> ^{:key %1}[:div.uk-card.uk-card-default.uk-padding-small.uk-grid-collapse.uk-child-width-expand
                                                  {:data-uk-grid true}
                                                  [:div (:name %2)]
                                                  [:div (:email %2)]
                                                  [:div (:phone %2)]])
                                  @clients)
                           [:div.uk-padding
                            [:button.uk-button.uk-button-primary.uk-align-center
                             {:on-click #(dispatch [:get-clients])}
                             "További 20"]]]])})))

(defn current-page []
  (let [actual-page (subscribe [:data :actual-page])];netflix-counter (subscribe [:data :netflix-counter])]
    (reagent/create-class
      {:reagent-render (fn []
                         (let [route-params (subscribe [:data :route-params])]
                           [:div
                            ;[:div (str "hello " (str @user-data))]
                            [:div
                             [:div.uk-width-1-1 {:style {:background "url('/main.jpg')"}}
                              [:div.uk-flex {:style {:min-height "100vh"}}
                               [calendar-sidebar]
                               [:div.uk-width-expand ;.uk-inline
                                (case @actual-page
                                  :calendar [calendar-page]
                                  :employees ^{:key "e"}[dnd :employees]
                                  :services  ^{:key "s"}[dnd :services]
                                  :brakes [brakes]
                                  :clients [clients-page]
                                  "This page doesn't exists.")]]]]
                            [modal]]))})))
