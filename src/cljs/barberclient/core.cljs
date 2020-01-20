(ns barberclient.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [reagent.session :as session]
    [reitit.frontend :as reitit]
    [clerk.core :as clerk]
    [react-flatpickr :default Flatpickr]
    [ajax.core :as ajax :refer [GET POST]]
    ["flatpickr/dist/l10n/hu.js" :refer (Hungarian)]
    ;["flatpickr/dist/l10n/en.js" :refer (English)]
    [accountant.core :as accountant]
    [cljs.reader :refer [read-string]]))

(set! (.-firstDayOfWeek js/flatpickr.l10ns.default) 1)

(defonce app-state
  (atom {:language :hu
         :employees nil
         :services nil
         :opening-hours nil
         :cart []
         :user-data {:name nil
                     :email nil
                     :phone nil
                     :agreement false
                     :marketing false}
         :validation {:name nil
                      :email nil
                      :phone nil}
         :free-dates []
         :free-times []
         :today nil
         :sending nil
         :modal false
         :reservation {}
         :shop-data nil}))

(def google-map-styles
  (js->clj (.parse js/JSON
                   "[\n  {\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#212121\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.icon\",\n    \"stylers\": [\n      {\n        \"visibility\": \"off\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.text.stroke\",\n    \"stylers\": [\n      {\n        \"color\": \"#212121\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.country\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#9e9e9e\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.land_parcel\",\n    \"stylers\": [\n      {\n        \"visibility\": \"off\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.locality\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#bdbdbd\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#181818\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#616161\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"labels.text.stroke\",\n    \"stylers\": [\n      {\n        \"color\": \"#1b1b1b\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road\",\n    \"elementType\": \"geometry.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#2c2c2c\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#8a8a8a\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.arterial\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#373737\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.highway\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#3c3c3c\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.highway.controlled_access\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#4e4e4e\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.local\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#616161\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"transit\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"water\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#000000\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"water\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#3d3d3d\"\n      }\n    ]\n  }\n]\n")))

(defn tr [the-map]
  (get the-map (:language @app-state) "not found"))

(defn get-month-name [number]
  (case number
    "01" (tr {:hu "jan." :en"jan."})
    "02" (tr {:hu "febr." :en "febr."})
    "03" (tr {:hu "marc.":en"marc."})
    "04" (tr {:hu "ápr." :en "apr."})
    "05" (tr {:hu "máj.":en"may"})
    "06" (tr {:hu "jún." :en "june"})
    "07" (tr {:hu "júl." :en "july"})
    "08" (tr {:hu "aug." :en "aug."})
    "09" (tr {:hu "szept." :en "sept."})
    "10" (tr {:hu "okt." :en "oct."})
    "11" (tr {:hu "nov." :en "nov."})
    "12" (tr {:hu "dec." :en "dec."})
    "no such month"))


(defn validate-email
  [email]
  (let [pattern #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (if (and (string? email) (re-matches pattern email))
      true
      false)))

(defn validate-phone
  [text]
  (let [pattern #"[0-9]{9}"]
    (if (re-matches pattern text)
      true
      false)))

(defn validate-name
  [text]
  (let [pattern #".{3,50}"]
    (if (re-matches pattern text)
      true
      false)))

(defn to-readable-date [date-str]
  (let [[year month day] (clojure.string/split date-str "-")]
    (str year " " (get-month-name month) " "
         day)))


(defn ready-anim []
  (let [element (.getElementById js/document "x-loader")]
    (.add (.-classList element) "animated-hide")
    (.setTimeout js/window
                 #(aset (.-style element) "display" "none")
                 1500)))

(defn get-day-from-date [year month day]
  (let [date (new js/Date year (dec month) day)
        day-code (.getDay date)]
    (case day-code
      1 :monday
      2 :tuesday
      3 :wednesday
      4 :thursday
      5 :friday
      6 :saturday
      0 :sunday
      :unknown)))





(defn ajax-get [{:keys [url handler error-handler]}]
  (GET url
       {:handler handler
        :error-handler error-handler}))


(defn ajax-post [{:keys [url handler error-handler params]}]
  (POST url
        {:handler handler
         :params params
         :error-handler error-handler}))

(defn flatpickr [props]
  [:> Flatpickr props])


(defn get-init-data []
  (ajax-get {:url "/get-employees-and-services"
             :handler #(let [data (read-string %)
                             employees (:employees data)
                             services (:services data)]
                         (.log js/console (str "wat" (first data)))
                         (swap! app-state assoc
                                :employees employees
                                :services services)
                         (ready-anim))

             :error-handler #(js/window.alert "Error get-employees-and-services")})
  (ajax-get {:url "/server-time"
             :handler #(swap! app-state assoc :actual-time (let [time (clojure.string/split
                                                                        (second (read-string %))
                                                                        ":")]
                                                             (+
                                                               (* 60 (js/parseInt (first time)))
                                                               (js/parseInt (second time))))
                              :actual-date (first (read-string %)))})

  (ajax-get {:url "/min-max-date"
             :handler #(swap! app-state assoc
                              :min-max-date (read-string %))
             :error-handler #(js/window.alert "Error today")})
  (ajax-get {:url "/shop-data"
             :handler #(swap! app-state assoc
                              :shop-data (read-string %))
             :error-handler #(js/window.alert "Error shop-data")}))

(defn two-digits [number]
  (if (= (count (str number)) 1)
    (str "0" number)
    (str number)))

(defn convert-to-time [number]
  (let [hours (two-digits (quot number 60))
        minutes (two-digits (mod number 60))]
    (str hours ":" minutes)))

(defn get-today-str []
  (let [today (js/Date.)
        year (.getFullYear today)
        month (two-digits (inc (.getMonth today)))
        date (two-digits (.getDate today))]
    (str year "-" month "-" date)))

(defn convert-to-opening-hours [the-vector]
  (if (or (nil? the-vector)
          (empty? the-vector))
    (tr {:hu "Zárva" :en "Closed"})
    (let [[start end] the-vector]
      (str (convert-to-time start)
           " - "
           (convert-to-time end)))))




(def router
  (reitit/router
    [["/" :index]]))

(defn set-chosen [the-key the-data]
  (swap! app-state assoc-in [:reservation the-key] the-data))

(defn get-chosen [the-key]
  (get-in @app-state [:reservation the-key]))

(defn has-chosen? [the-key]
  (if (get-in @app-state [:reservation the-key])
    true false))


(defn convert-free-times-to-reservation-times [coll]
  (let [length (:length (get-chosen :service))]
    (reduce concat
            (for [[brake-start brake-end] coll]
              (let [mod-on-start (mod brake-start 30)
                    brake-start (if (= 0 mod-on-start)
                                  brake-start
                                  (+ brake-start (- 30 mod-on-start)))]
                (if (<= brake-start (- brake-end length))
                  (for [multiplier (range (inc (quot (- (- brake-end length)
                                                        brake-start)
                                                     30)))]
                    (+ brake-start (* 30 multiplier)))))))))




(defn free-times->emp [coll]
  (dissoc (reduce
            (fn [till-now this-one]
              (apply assoc till-now
                     (apply concat (map (fn [a]
                                          (vector a
                                                  (conj (get till-now a [])
                                                        (:employee this-one))))
                                        (convert-free-times-to-reservation-times
                                          (:free-times this-one))))))
            {}
            coll)
          nil))
    ;(convert-free-times-to-reservation-times (:free-times (first coll))))





(defn merge-free-times [coll]
  (vec (map first coll)))

(defn get-free-times [employee date]
  (ajax-get {:url (str "/get-free-times/" employee
                       "/" date)
             :handler #(do
                         (let [brakes-emp (free-times->emp (read-string %))]
                           ;(.log js/console (str "hello: " brakes-emp))
                           (swap! app-state assoc
                                  :brakes-emp brakes-emp
                                  :free-times (vec (sort (merge-free-times brakes-emp))))))
             :error-handler #(.alert js/window "error free-times")}))


(defn get-free-dates [employee length]
  (ajax-get {:url (str "/get-free-dates/" employee
                       "/" length)
             :handler #(let [new-free-dates (read-string %)
                             any-free? (not (empty? new-free-dates))]
                         (swap! app-state assoc :free-dates new-free-dates)
                         (if any-free?
                           (do
                             (set-chosen :date (first new-free-dates))
                             (get-free-times employee (first new-free-dates)))))

             :error-handler #(.alert js/window "error free dates")}))

(defn employee [data]
  [:div.uk-text-center.one-item
   {:role "button"
    :on-click #(set-chosen :employee data)}
   (str (:name data))])

(defn employees-step []
  [:div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade
   [:h3.playfair.one-title {:role "button"
                            :on-click #(do
                                         (swap! app-state assoc :free-times [])
                                         (set-chosen :employee nil)
                                         (set-chosen :start nil))}
    (if
      (has-chosen? :employee)
      (str (:name (get-chosen :employee)))
      (tr {:hu "Válassz barbert" :en "Choose barber"}))]
   (if-not
     (has-chosen? :employee)
     [:div
      [employee {:name (tr {:hu "Bárki" :en "Anyone"})
                 :_id "0"}]
      (map-indexed #(-> ^{:key %1}[employee %2])
                   (sort-by :priority (:employees @app-state)))])])


(defn service [data]
  [:div.one-item.uk-grid-collapse
   {:data-uk-grid true
    :on-click #(set-chosen :service data)
    :role "button"}
   [:div.uk-width-auto
    (str (case (:language @app-state)
           :en (:enname data)
           :hu (:name data)
           "not found"))]
   [:div.uk-width-expand.uk-text-right
    (str (:price data) " Ft")]])

(defn services-step []
  [:div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade
   [:h3.playfair.one-title {:role "button"
                            :on-click #(do
                                         (swap! app-state assoc :free-times [])
                                         (set-chosen :start nil)
                                         (set-chosen :service nil))}
    (if
      (has-chosen? :service)
      (str (case (:language @app-state)
             :en (:enname (get-chosen :service))
             :hu (:name (get-chosen :service))
             "not found"))
      (tr {:hu "Válassz szolgáltatást" :en "Choose service"}))]
   (if-not
     (has-chosen? :service)
     [:div
      (map-indexed #(-> ^{:key %1}[service %2])
                   (sort-by :priority (:services @app-state)))])])










(defn one-brake [time]
  [:div.playfair {:style {:padding-top "10px"

                          :padding-left "5px"
                          :padding-right "5px"}};}}
   [:div.one-brake
    {:class (if
              (= time
                 (get-chosen :start))
              "active-brake")
     :on-click (fn [a]
                 (set-chosen :start time)
                 (.log js/console (str "hello: " (rand-nth (get (:brakes-emp @app-state) time))))
                 (set-chosen :employee (let [this-id (rand-nth (get (:brakes-emp @app-state) time))]
                                         (first (filter
                                                  #(= this-id (:_id %))
                                                  (:employees @app-state))))))}

    (str
      (convert-to-time time))]])

(defn decide-day-section [number]
  (cond
    (< number 720)
    :morning
    (and
      (>= number 720)
      (< number 1080))
    :afternoon
    :else :evening))


(defn day-section [[the-key coll]]
  (let [new-coll coll]
    [:div
     (if (not (empty? new-coll))
       [:h4.uk-margin-remove-bottom.uk-margin-small-left.playfair.one-title
        (case the-key
          :morning (tr {:hu "Délelőtt" :en "Morning"})
          :afternoon (tr {:hu "Délután" :en "Afternoon"})
          :evening (tr {:hu "Este" :en "Evening"})
          "no such thing")])
     [:div.uk-grid-collapse.uk-flex.uk-flex-center.uk-padding-small {:data-uk-grid true}
      ;(str new-coll)
      (map-indexed
        #(-> ^{:key %1}[one-brake %2])
        new-coll)]]))

(defn date-step []
  (let [old-times (fn [] (:free-times @app-state))
        the-times (fn [] (if (= (:actual-date @app-state)
                                (:date (:reservation @app-state)))
                           (filter
                             (fn [a] (< (+ (:actual-time @app-state) 120)
                                        a))
                             (old-times))
                           (old-times)))]
    (reagent/create-class
      {:component-did-mount #(get-free-dates
                               (:_id (get-chosen :employee))
                               (:length (get-chosen :service)))
       :reagent-render
       (fn []
         [:div.uk-card.uk-card-default.one-step.uk-animation-fade
          [:h3.playfair.one-title {:on-click #(do
                                                (set-chosen :start nil))}
           (if
             (has-chosen? :date)
             (str (to-readable-date (get-chosen :date))
                  (if (has-chosen? :start)
                    (str " - "(convert-to-time (get-chosen :start)))))
             (tr {:hu "Válassz napot" :en "Choose date"}))]
          (if-not
            (has-chosen? :start)
            [:div
             [:div.uk-flex-center.uk-flex.uk-padding-small
              (if (not (empty? (:free-dates @app-state)))
                (case (:language @app-state)
                  :en ^{:key 2}[flatpickr {:value (get-chosen :date)
                                           :options {:enable (clj->js (:free-dates @app-state))
                                                     :dateformat "Y-m-d"
                                                     :minDate (first (:min-max-date @app-state))
                                                     :maxDate (second (:min-max-date @app-state))
                                                     :inline true
                                                     :locale "default"
                                                     :onChange (fn [selected-dates date-str instance]
                                                                 (set-chosen :start nil)
                                                                 (get-free-times
                                                                   (:_id (get-chosen :employee))
                                                                   date-str)
                                                                 (set-chosen :date date-str))}}]
                  :hu ^{:key 1}[flatpickr {:value (get-chosen :date)
                                           :options {:enable (clj->js (:free-dates @app-state))
                                                     :dateformat "Y-m-d"
                                                     :minDate (first (:min-max-date @app-state))
                                                     :maxDate (second (:min-max-date @app-state))
                                                     :inline true
                                                     :locale "hu"
                                                     :onChange (fn [selected-dates date-str instance]
                                                                (set-chosen :start nil)
                                                                (get-free-times
                                                                  (:_id (get-chosen :employee))
                                                                  date-str)
                                                                (set-chosen :date date-str))}}]
                  "default")
                [:div.uk-text-center.playfair
                 (tr {:hu "Nincs időpont. Próbáld meg egy másik barberrel vagy szolgáltatással!"
                      :en "No appointments available. Try with another barber or service!"})])]
             [:div
              {:style {:padding-bottom "20px"}}
              ;(str (convert-free-times-to-reservation-times (:free-times @app-state)))
              (if (not (empty? (the-times)))
                (map
                  #(-> ^{:key (first %)}[day-section %])
                  (group-by decide-day-section
                            (the-times)))
                [:div.uk-text-center.uk-padding-small
                 {:style {:font-size "1.3em"}}
                 (tr {:hu "A mai napra sajnos már nem tudsz foglalni."
                      :en "Unfortunately there are no more reservations for today"})])]])])})))





(defn reserve! []
  (let [reservation-data (:reservation @app-state)
        employee (:_id (:employee reservation-data))
        service (:_id (:service reservation-data))
        date (:date reservation-data)
        start (:start reservation-data)
        language (:language @app-state)
        user-data (:user-data @app-state)
        res-map {:employee employee
                 :service-id service
                 :date date
                 :start start
                 :length (:length (:service reservation-data))
                 :language language
                 :shop (:_id (:shop-data @app-state))
                 :user (if
                         (:phone (:validation @app-state))
                         user-data
                         (dissoc user-data :phone))}]
    (swap! app-state assoc :sending :loading)
    (ajax-post {:url "/reserve"
                :params res-map
                :handler #(swap! app-state assoc :sending (case %
                                                            "reserved" :reserved
                                                            "success" :success
                                                            %))
                :error-handler #(swap! app-state assoc :sending :fail
                                       :sending-error (str %))})))
    ;(swap! app-state assoc :sending :loading)))

(defn reserve-step []
  (reagent/create-class
    {:component-did-mount #()
     :reagent-render
     (fn []
       [:div.uk-card.uk-card-default.one-step
        [:h3.playfair.one-title
         (tr {:hu "Foglalás részletei" :en "Reservation details"})]
        [:div.uk-flex-center.uk-flex.uk-padding
         [:form.uk-width-medium
          [:div.uk-margin
           [:div.uk-inline.uk-width-1-1
            [:span.uk-form-icon {:data-uk-icon "icon: mail"}]
            [:input.uk-input {:class (case (:email (:validation @app-state))
                                       true "good-input"
                                       false "bad-input"
                                       nil)
                              :value (get-in @app-state [:user-data :email])
                              :on-blur #(swap! app-state assoc-in [:validation :email] (validate-email (-> % .-target .-value)))
                              :on-change #(swap! app-state assoc-in [:user-data :email] (-> % .-target .-value))
                              :type "text" :placeholder (tr {:hu "E-mail" :en "Email"})}]]]
          [:div.uk-margin
           [:div.uk-inline.uk-width-1-1
            [:span.uk-form-icon {:data-uk-icon "icon: user"}]
            [:input.uk-input {:class (case (:name (:validation @app-state))
                                       true "good-input"
                                       false "bad-input"
                                       nil)
                              :on-blur #(swap! app-state assoc-in [:validation :name] (validate-name (-> % .-target .-value)))
                              :value (get-in @app-state [:user-data :name])
                              :max-length "50"
                              :on-change #(swap! app-state assoc-in [:user-data :name] (-> % .-target .-value))
                              :type "text" :placeholder (tr {:hu "Név" :en "Name"})}]]]

          [:div.uk-margin
           [:div.uk-grid-collapse.uk-width-1-1.uk-grid {:data-uk-grid "true"}
            [:div.uk-input.uk-width-auto.uk-padding-remove-vertical
             [:span {:style {:margin-left "7px" :margin-right "7px"}
                     :data-uk-icon "icon: receiver"}]
             [:span "+36"]]
            [:div.uk-width-expand
             [:input.uk-input {:class (case (:phone (:validation @app-state))
                                        true "good-input"
                                        false "bad-input"
                                        nil)
                               :value (get-in @app-state [:user-data :phone])
                               :on-change #(swap! app-state assoc-in [:user-data :phone]
                                                  (-> % .-target .-value))
                               :on-blur #(swap! app-state assoc-in [:validation :phone] (validate-phone (-> % .-target .-value)))
                               :type "tel"
                               :max-length "9"
                               :placeholder (tr {:hu "Telefonszám" :en "Phone number"})}]]]]

          [:div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid
           [:label
            [:input.uk-checkbox {:type "checkbox"
                                 :on-change #(swap! app-state assoc-in [:user-data :agreement] (not (:agreement (:user-data @app-state))))
                                 :checked (:agreement (:user-data @app-state))}]
            [:span.uk-margin-small-left
             (tr {:hu "Elfogadom a "
                  :en "I accept the conditions of the "})]
            [:a
             {;:on-click #(js/window.open "http://localhost:3000/files/szeged-hozzajarulo.pdf")
              :target "_blank"
              :href (str "http://localhost:3000/files/" (:_id (:shop-data @app-state))
                                                        "-hozzajarulo.pdf")}
             (tr {:hu "hozzájáruló nyilatkozat"
                  :en "statement of consent"})]
            (tr {:hu " és az "
                 :en " and the "})
            [:a
             {:target "_blank"
              :href (str "http://localhost:3000/files/"
                         (:_id (:shop-data @app-state))
                         "-altalanos.pdf")}
             (tr {:hu "adatkezelési tájékoztató"
                  :en "data management informant"})]
            (tr {:hu " feltételeit."
                 :en ""})]]

          [:div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid
           [:label
            [:input.uk-checkbox {:type "checkbox"
                                 :on-change #(swap! app-state assoc-in [:user-data :marketing] (not (:marketing (:user-data @app-state))))
                                 :checked (:marketing (:user-data @app-state))}]
            [:span.uk-margin-small-left
             (tr {:hu "Hozzájárulok, hogy személyreszabott ajánlatokat és marketing tartalmú leveleket kapjak."
                  :en "You allow receiving marketing communications from us."})]]]
          (let [user-data (:user-data @app-state)
                validation (:validation @app-state)]
            [:button.uk-button.uk-button-default.uk-align-center.uk-margin-remove-bottom.uk-margin-small-top.uk-animation-fade
             {:disabled (if
                          (and (:email validation) (:name validation)
                               (:agreement user-data))
                          false
                          true)

              :on-click #(do
                           (.preventDefault %)
                           (swap! app-state assoc :modal true))}
             (tr {:hu "Foglalás"
                  :en "Reserve"})])]]])}))




(defn sending-reservation []
  (let [new-button [:button.uk-button.uk-button-default.uk-button-small.uk-margin-top
                    {:on-click #(do
                                  (.log js/console (str @app-state))
                                  (swap! app-state assoc :sending nil)
                                  (set-chosen :start nil)
                                  (set-chosen :date nil)
                                  (get-free-dates
                                    (:_id (get-chosen :employee))
                                    (:length (get-chosen :service))))}

                    (tr {:hu "Új foglalás"
                         :en "New reservation"})]]

    (if (:sending @app-state)
      [:div.uk-card.uk-card-default.one-step
       [:h3.playfair.one-title {:on-click #()}
        (tr
          (case (:sending @app-state)
            :loading {:hu "Feldolgozás alatt..." :en "Processing..."}
            :success {:hu "Igazold vissza foglalásod!" :en "Confirm your reservation!"}
            :reserved {:hu "Foglalt!" :en "Already reserved!"}
            :fail {:hu "Sikertelen foglalás" :en "Unsuccessful reservation"}
            {:hu "Foglalások: " :en "Reservations: "}))]
       [:div
        [:div.uk-flex-center.uk-flex.uk-padding-small
         (case (:sending @app-state)
           :loading [:div.uk-padding  {:data-uk-spinner "true"}]
           :reserved [:div
                      [:div.uk-text-center
                       [:span (tr {:hu "Időpontodat időközben más befoglalta. Köszönjük megértésed."
                                   :en "Your appointment is already reserved by somebody else. Thank you for your understanding."})]]
                      [:div.uk-text-right
                       new-button]]
           :success [:div
                     [:div.uk-text-center
                      [:span "Foglalásához a megerősítő emailt elküldtük a(z) '"]
                      [:b (:email (:user-data @app-state))]
                      [:span "' email címre."]]
                     [:div.uk-text-right.uk-margin-large-top
                      new-button]]
           :fail [:div (tr {:hu "A foglalás meghiúsult"
                            :en "Reservation failed"})
                  [:div (tr {:hu "A hiba oka: "
                             :en "The reason:"})
                   (str (:sending-error @app-state))]
                  [:div new-button]]
           (str (:sending @app-state)))]]])))



(defn steps []
  [:div.uk-padding
   [:div.uk-width-large.uk-align-center
    (if (= nil (:sending @app-state))
      [:div
        [employees-step]
        (if
          (has-chosen? :employee)
          [services-step])
        (if (and
              (has-chosen? :employee)
              (has-chosen? :service))
          [date-step])
        (if (has-chosen? :start)
          [reserve-step])])
    [sending-reservation]]
   [:div
    {:style {:background "url(/main.jpg)"
             :background-size "cover"
             :background-repeat "no-repeat";
             :background-position "center";
             :background-color "#222"
             :position "fixed"
             :top 0
             :left 0
             :z-index -1
             :width "100%"
             :height "100vh"}}]])






(defn get-el [id]
  (.getElementById js/document id))

(defn add-event-listener [el type callback]
  (.addEventListener el type callback false))

(defn remove-event-listener [el type callback]
  (.removeEventListener el type callback false))

(defn modal []
  (let [last-open? (atom false)
        open-fn (fn [] (reset! last-open? true))
        close-fn (fn [] (reset! last-open? false))
        esc-listener (atom nil)
        no-fn (fn []
                (do
                  (swap! app-state assoc :modal false)))

        yes-fn (fn []
                 (do
                   (swap! app-state assoc :modal false)
                   (reserve!)))
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
       :component-will-unmount #(do
                                  (remove-event-listener js/window "keydown" @enter-listener)
                                  (remove-event-listener js/window "keydown" @esc-listener))

       :reagent-render
       (fn []
         [:div#modal.uk-inline.uk-animation-fade.uk-animation-fast
          {:style {:position "fixed"
                   :top 0
                   :background "rgba(0,0,0,0.7)"
                   :height "100%"
                   :z-index 1000
                   :width "100%"}}
          [:div
           {:style {:z-index 5000}}]
          [:div.uk-position-center.uk-padding-small
           {:style {:z-index 5001
                    :background "white"
                    :width "400px"
                    :border-radius "10px"
                    :border "1px solid black"}}
           [:h4.uk-text-center.uk-heading-line [:span (tr {:hu "Ez az email címed?"
                                                           :en "Is this your email address?"})]]
           [:p.uk-text.bigger.uk-text-center [:span.the-email (:email (:user-data @app-state))]]
           (tr {:hu [:p.uk-text-bigger.uk-text-center
                     "Ha igen, az \"Elfogadás\" gombra kattintva megkapod fiókodba a megerősítő e-mailt ahol vissza tudod "
                     [:b "igazolni"]
                     " foglalásodat."]
                :en [:p.uk-text-bigger.uk-text-center
                     "If it's correct, click the \" Accept\" button and we'll send an e-mail to you where you can "
                     [:b "confirm"]
                     " your appointment."]})
           [:div.uk-width-1-1.uk-flex
            [:button.uk-button.uk-button-default.uk-flex-1
             {:on-click no-fn}
             (tr {:hu "Mégse"
                  :en "Cancel"})]
            [:button.uk-button.uk-button-default.uk-flex-1.uk-margin-left
             {:on-click yes-fn}
             (tr {:hu "Foglalás"
                  :en "Reserve"})]]]])})))

(defn header []
  [:div
   {:style { :overflow "auto" :background "#222"}}
   [:a
    {:href "/"}
    [:img.uk-align-center.uk-width-medium.uk-margin-remove-bottom
     {:src (str "https://szeged.barbershopbp.hu/logo/" (:_id (:shop-data @app-state)))}]]])
   ;(str @app-state)])

(defn with-icon [icon content]
  [:div.uk-width-large.uk-padding-small {:style {:margin-left "-40px"}
                                         :class "uk-grid-collapse" :data-uk-grid true}
    [:div.uk-width-auto.uk-flex.uk-flex-middle
     [:span {:data-uk-icon (str "icon: " icon)}]]
    [:div.uk-width-expand.uk-margin-left.uk-text-center
     {:style {:margin-left "-20px"}}
     content]])

(defn contact []
  [:div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-bottom
   {:class "uk-width-1-1 uk-width-1-2@m"}
   [:h3.uk-text-center.playfair (tr {:hu "Kapcsolat" :en "Contact"})]
   (let [shop (:shop-data @app-state)
         address (:contact-address shop)]

     [:div.uk-flex-center.uk-flex.uk-grid-collapse {:data-uk-grid true}
      [:div.uk-width-large
       [with-icon
        "location"
        [:div.uk-text-center
         [:a {:href (:url address)
              :target "_blank"}
          [:div (:name address)]
          [:div (:street address)]
          [:div (:city address)]]]]
       [with-icon
        "mail"
        [:div.uk-text-center
         [:a {:target "_blank"
              :href (str "mailto:" (:email shop))}
          (:email shop)]]]

       [with-icon
        "receiver"
        [:div.uk-text-center
         [:a {:target "_blank"
              :href (str "tel:" (:contact-phone shop))}
           (:contact-phone shop)]]]
       [with-icon
        "facebook"
        [:div.uk-text-center
         [:a {:target "_blank"
              :href (str "https://www.facebook.com/" (:facebook shop))}
          (str "@" (:facebook shop))]]]]])])



(defn opening-hours []
  [:div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-top
   {:class "uk-width-1-1 uk-width-1-2@m"}
   [:h3.uk-text-center.playfair (tr {:hu "Nyitvatartás" :en "Opening hours"})]
   (let [opening (:opening-hours (:shop-data @app-state))]
     [:div.playfair.uk-grid-collapse.uk-child-width-1-1.uk-text-center.uk-width-large.uk-align-center.uk-margin-remove-top.uk-margin-bottom
      {:data-uk-grid true}
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Hétfő" :en "Monday"})]
       [:div (convert-to-opening-hours (:monday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Kedd" :en "Tuesday"})]
       [:div (convert-to-opening-hours (:tuesday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Szerda" :en "Wednesday"})]
       [:div (convert-to-opening-hours (:wednesday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Csütörtök" :en "Thursday"})]
       [:div (convert-to-opening-hours (:thursday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Péntek" :en "Friday"})]
       [:div (convert-to-opening-hours (:friday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Szombat" :en "Saturday"})]
       [:div (convert-to-opening-hours (:saturday opening))]]
      [:div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center {:data-uk-grid true}
       [:div (tr {:hu "Vasárnap" :en "Sunday"})]
       [:div (convert-to-opening-hours (:sunday opening))]]])])


(def google-icon
  {:url "/img/barbershop.svg"
   :scaledSize (js/google.maps.Size. 40 40)
   :origin (js/google.maps.Point. 0 0)
   :anchor (js/google.maps.Point. 0 0)})

 ;"AIzaSyAfwbhHb9Dq81Hh4K1I-_7xcho7B7IyCC0"}
(defn home-did-mount [this coordinates]
  (let [lat (first coordinates)
        lng (second coordinates)
        latlng (js/google.maps.LatLng. lat lng)
        map-canvas (reagent/dom-node this)
        map-options (clj->js {"center" latlng
                              "zoom" 17
                              "options" {"styles" google-map-styles}})
        the-map (js/google.maps.Map. map-canvas map-options)
        the-marker (js/google.maps.Marker.
                     (clj->js {:position latlng :map the-map :icon google-icon}))]
    the-marker))

(defn home-render []
  [:div {:style {:height "50vh" :width "100vw"}}])


(defn google-maps [coordinates]
  (reagent/create-class {:reagent-render home-render
                         :component-did-mount #(home-did-mount % coordinates)}))

(defn footer []
  (let [coordinates (:map-coordinates (:shop-data @app-state))]
    [:div.uk-card.uk-card-secondary.uk-grid-collapse.playfair
     {:data-uk-grid true
      :style {:background "#222"}}
     [opening-hours]
     [contact]
     (if coordinates
       [google-maps coordinates])]))


(defn one-lng [name the-key]
  (let [is-active? (fn [] (= the-key (:language @app-state)))]
    (fn [name the-key]
      [:div
       {:style {:border-top-left-radius "5px"
                :border-bottom-left-radius "5px"
                :background (if (is-active?) "rgb(255, 226, 38)" "transparent")}}
       [:div {:on-click #(swap! app-state assoc :language the-key)
              :style {:cursor "pointer"
                      :padding "3px 3px 3px 5px"
                      :border-top-left-radius "5px"
                      :border-bottom-left-radius "5px"
                      :transform (if (is-active?) "translateX(-10px)" "inherit")
                      :transition "0.2s ease-in"
                      :color (if (is-active?) "#222" "white")
                      :background (if (is-active?)
                                    "rgb(255, 226, 38)"
                                    "#222")}}
        [:b name]]])))

(defn language-button []
  [:div {:data-uk-sticky true}
   [:div.uk-position-right.uk-margin-top

    [:div
     [:div.playfair {:style {:border-radius "5px"
                             :font-size "1.2em"}}
      [one-lng "EN |" :en]
      [one-lng "HU |" :hu]]]]])


(defn client-page []
  [:div {:style {:min-height "100vh"}}
   (comment [:div.uk-card.uk-card-default
             (str (:brakes-emp @app-state)
               " - " (:free-times @app-state))])
   [language-button]
   (if
     (:modal @app-state)
     [modal])
   [header]
   [:div.uk-flex.uk-flex-center.uk-flex-column
    {:style {:min-height "50vh"}}
    ;:background-size "cover"}}
    [steps]]
   [footer]])

(defn mount-root []
  (reagent/render [client-page] (.getElementById js/document "app")))



;(defonce _start-once (sente/start!))

(def ?csrf-token
  (when-let [el (.getElementById js/document "sente-csrf-token")]
    (.getAttribute el "data-csrf-token")))

(defn local-uri? [{:keys [uri]}]
  (not (re-find #"^\w+?://" uri)))


(defn default-headers [request]
  (if (local-uri? request)
    (-> request
        (update
          :headers
          #(merge
             {"Accept" "application/transit+json"
              "x-csrf-token" ?csrf-token}
             %)))
    request))


(defn load-interceptors! []
  (swap! ajax/default-interceptors
         conj
         (ajax/to-interceptor {:name "default headers"
                               :request default-headers})))



(defn init! []
  (get-init-data)
  (load-interceptors!)
  (clerk/initialize!)
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (let [match (reitit/match-by-path router path)
             current-page (:name (:data  match))
             route-params (:path-params match)]
         (reagent/after-render clerk/after-render!)
         ;(dispatch [:add-to-db {:current-page current-page
         ;                       :route-params route-params)
         (clerk/navigate-page! path)))

     :path-exists?
     (fn [path]
       (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))

