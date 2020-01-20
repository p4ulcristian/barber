(ns barber.email
  (:require
    [postal.core :as postal]
    [hiccup.core :as hiccup]
    [barber.db :as db]
    [hiccup.page :refer [include-js include-css html5]]))




(defn tr [language the-map]
  (get the-map (if (string? language)
                 (keyword language)
                 language)

       "not found"))

(defn two-digits [number]
  (if (= (count (str number)) 1)
    (str "0" number)
    (str number)))

(defn convert-to-time [number]
  (let [hours (two-digits (quot number 60))
        minutes (two-digits (mod number 60))]
    (str hours ":" minutes)))

(defn get-month-name [lng number]
  (case number
    "01" (tr lng {:hu "jan." :en"jan."})
    "02" (tr lng {:hu "febr." :en "febr."})
    "03" (tr lng {:hu "marc.":en"marc."})
    "04" (tr lng {:hu "ápr." :en "apr."})
    "05" (tr lng {:hu "máj.":en"may"})
    "06" (tr lng {:hu "jún." :en "june"})
    "07" (tr lng {:hu "júl." :en "july"})
    "08" (tr lng {:hu "aug." :en "aug."})
    "09" (tr lng {:hu "szept." :en "sept."})
    "10" (tr lng {:hu "okt." :en "oct."})
    "11" (tr lng {:hu "nov." :en "nov."})
    "12" (tr lng {:hu "dec." :en "dec."})
    "no such month"))

(defn human-date [lng date minutes]
  (let [[year month day] (clojure.string/split date #"-")]
    (str year " " (get-month-name lng month)
         " " day " - " (convert-to-time minutes))))

(defn email-head []
  [:head
   [:meta {:name "viewport" :content "width=device-width"}]
   [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
   [:title "Barber Shop Budapest - Igazolja vissza foglalását."]
   [:style {:type "text/css"} "img {
            max-width: 100%;
            }
            body {
            -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
            }
            body {
            background-color: #f6f6f6;
            }
            @media only screen and (max-width: 640px) {
              body {
                padding: 0 !important;
              }
              h1 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
              }
              h2 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
              }
              h3 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
              }
              h4 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
              }
              h1 {
                font-size: 22px !important;
              }
              h2 {
                font-size: 18px !important;
              }
              h3 {
                font-size: 16px !important;
              }
              .container {
                padding: 0 !important; width: 100% !important;
              }
              .content {
                padding: 0 !important;
              }
              .content-wrap {
                padding: 10px !important;
              }
              .invoice {
                width: 100% !important;
              }}"]])

(defn email-footer [lng]
  [:div.footer {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;"}
   [:table {:width "100%" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
    [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
     [:td.aligncenter.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
           font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0;"
                                     :align "center" :valign "top"}
      (tr lng
          {:hu "Kérdéseid vannak? "
           :en "Questions? Email "})
      [:a {:href "mailto:info@barbershopbp.hu" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;"}
       "info@barbershopbp.hu"]]]]])

(defn email-shop-data [shop]
  (let [name (:company-name shop)
        addr (:contact-address shop)
        street (:street addr)
        zip-code (if (:zip-code addr)
                   (int (:zip-code addr)))
        google-url (:url addr)
        city (:city addr)

        phone  (:contact-phone shop)
        facebook (:facebook shop)]
    (list
      [:tr {:style "font-weight: bold; background: #222; color: #FFF; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block.aligncenter {:style "padding-top: 10px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
               font-size: 14px; vertical-align: top; text-align: center; margin: 0; " :align "center" :valign "top"}
        name]]
      [:tr {:style "font-weight: bold; background: #222; color: #FFF; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
               font-size: 14px; vertical-align: top; text-align: center; margin: 0; " :align "center" :valign "top"}
        [:a {:style "color: #FFF;"
             :href google-url
             :target "_blank"}
         (str zip-code " " city ", " street)]]]
      [:tr {:style "font-weight: bold; background: #222; color: #FFF; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
               font-size: 14px; vertical-align: top; text-align: center; margin: 0; " :align "center" :valign "top"}
        [:a {:style "color: #FFF;"
             :href (str "tel:" phone)
             :target "_blank"}
         phone]]]
      [:tr {:style "font-weight: bold; background: #222; color: #FFF; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block.aligncenter {:style "padding-bottom: 10px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
               font-size: 14px; vertical-align: top; text-align: center; margin: 0; " :align "center" :valign "top"}
        [:a {:href (str "https://facebook.com/" facebook)
             :style "color: #FFF;"
             :target "_blank"}
         (str "@" facebook)]]])))

(defn email-info [lng]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center;" :align "center"}
     (tr lng
         {:hu "Kérjük, hogy érkezz időben a foglalásod előtt pár perccel! Összetett foglalásnál (pl. Hajvágás és szakáll igazítás) 10 perc késés esetén már csak annak egyik részét áll módunkban elvégezni!"
          :en "Please arrive in time (few minutes before your booking)! If case of multiple service (Haircut & Beard trim) we can undertake only one part of it if you late 10 minutes!"})]
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     (tr lng {:hu "Megértésedet köszönjük!"
              :en "Thank you for your understanding!"})]]])

(defn email-success-confirm [lng]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     (tr lng {:hu "Kérjük hogy, mondd le az időpontod ha nem tudsz eljönni."
              :en "If you can't show up, please cancel your appointment"})]
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     (tr lng {:hu "Megértésedet köszönjük!"
              :en "Thank you for your understanding!"})]]])

(defn email-success-cancel [shop-id lng]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     (tr lng {:hu "Időpontodat sikeresen lemondtad, az alábbi linken tudsz új időpontot foglalni."
              :en "Your appointment was successfully cancelled. You can reserve a new one in the link below."})]
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     [:a {:href (str "https://" shop-id ".barbershopbp.hu")}
      (str "https://" shop-id ".barbershopbp.hu")]]]])

(defn email-success-auto-cancel [shop-id lng]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     (tr lng {:hu "Időpontodat rendszerünk törölte megerősítés hiányában, az alábbi linken tudsz új időpontot foglalni."
              :en "Your appointment was automatically removed by our system because lack of confirmation. You can reserve a new one in the link below."})]
    [:p.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box;
                font-size: 16px; color: #000; line-height: 1.6em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     [:a {:href (str "https://" shop-id ".barbershopbp.hu")}
      (str "https://" shop-id ".barbershopbp.hu")]]]])


(defn email-invoice [params]
  (let [service-id (:service-id params)
        employee-id (:employee params)
        shop-id (:shop params)
        service (db/get-service shop-id service-id)
        employee (db/get-employee shop-id employee-id)
        date (:date params)
        lng (:language params)
        start (:start params)]

    [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
     [:td.content-block.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" :align "center" :valign "top"}
      [:table.invoice {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box;
              font-size: 14px; text-align: left; width: 80%; margin: 20px auto;"}
       [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
        [:td {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px;
                vertical-align: top; margin: 0; padding: 5px 0;" :valign "top"}
         (if (:name (:user params))
           (:name (:user params))
           (:name params))]]
       [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
        [:td {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" :valign "top"}
         [:table.invoice-items
          {:cellpadding "0" :cellspacing "0"
           :style "border-bottom: 2px solid #333; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: 0;"}
          [:tr {:style "border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
           [:td {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" :valign "top"}
            (str ;"Hajvágás (4100 Ft) - Sanyi"
                 (tr lng {:hu (:name service)
                          :en (:enname service)})
                 " ("(:price service) " Ft)"
                 " - "(:name employee))]

           [:td.alignright {:style "white-space: nowrap; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" :align "right" :valign "top"}
            (if
              (and lng date start)
              (human-date lng date start))]]]]]]]]))

(defn email-header [shop-id]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "background: #222; box-sizing: border-box; font-size: 14px;" :valign "top"}
    [:img.aligncenter {:src (str "https://" shop-id ".barbershopbp.hu/logo/" shop-id)
                       :style " height: 150px;"}]]])


(defn email-title [title]
  [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
   [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
    [:h2.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;" :align "center"}
     title]]])

(defn confirm [lng shop-id res-id]
  [:table
   {:width "100%" :cellpadding "0" :cellspacing "0" :itemprop "action" :itemscope "true" :itemtype "http://schema.org/ConfirmAction" :style "" :bgcolor "#fff"}
   [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
    [:td.content-wrap {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" :valign "top"}
     [:meta {:itemprop "name" :content "Confirm Email" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}]
     [:table {:width "100%" :cellpadding "0" :cellspacing "0" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
      [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px;
       vertical-align: top; margin: 0; padding: 0 0 20px;" :valign "top"}
        [:h3 {:style "margin-top: 0px; margin-bottom: 20px"}
         (tr lng {:hu "Kérjük erősítsd meg foglalásod."
                  :en "Please confirm your reservation."})]]]
        ;"Please confirm your email address by clicking the link below."]]
      [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
           [:td.content-block {:itemprop "handler" :itemscope "true" :itemtype "http://schema.org/HttpActionHandler"
                               :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                               box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" :valign "top"}
            [:table
             {:width "100%" :cellpadding "0" :cellspacing "0"}
             [:tr
              [:tr {:style "border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
               [:td
                [:a.btn-secondary {:href (str "https://" shop-id ".barbershopbp.hu/cancel/" res-id)
                                   :itemprop "url"
                                   :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                                 box-sizing: border-box; font-size: 14px;
                                 color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold;
                                  text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize;
                                   background-color: #3B0602; margin: 0;
                                   border-color: #3B0602; border-style: solid; border-width: 10px 20px;"}
                 (tr lng {:hu "Lemondom"
                          :en "Cancel"})]]
               [:td
                [:a.btn-secondary {:href (str "https://" shop-id ".barbershopbp.hu/confirm/" res-id)
                                   :itemprop "url"
                                   :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                                 box-sizing: border-box; font-size: 14px;
                                 color: #222; text-decoration: none; line-height: 2em; font-weight: bold;
                                  text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize;
                                   background-color: rgb(255, 226, 38); margin: 0;
                                   border-color: rgb(255, 226, 38); border-style: solid; border-width: 10px 20px;"}
                 (tr lng {:hu "Megerősítem"
                          :en "Confirm"})]]]]]]]


      [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,
                  sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}]]]]])

(defn cancel-reservation [lng shop-id res-id]
  [:table
   {:width "100%" :cellpadding "0" :cellspacing "0" :itemprop "action" :itemscope "true" :itemtype "http://schema.org/ConfirmAction" :style "" :bgcolor "#fff"}
   [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
    [:td.content-wrap {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" :valign "top"}
     [:meta {:itemprop "name" :content "Confirm Email" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}]
     [:table {:width "100%" :cellpadding "0" :cellspacing "0" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
      [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
       [:td.content-block {:itemprop "handler" :itemscope "true" :itemtype "http://schema.org/HttpActionHandler"
                           :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                               box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" :valign "top"}
        [:table
         {:width "100%" :cellpadding "0" :cellspacing "0"}
         [:tr
          [:tr {:style "border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
           [:td
            [:a.btn-secondary {:href (str "https://" shop-id ".barbershopbp.hu/cancel/" res-id)
                               :itemprop "url"
                               :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                                 box-sizing: border-box; font-size: 14px;
                                 color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold;
                                  text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize;
                                   background-color: #3B0602; margin: 0;
                                   border-color: #3B0602; border-style: solid; border-width: 10px 20px;"}
             (tr lng {:hu "Időpont lemondása"
                      :en "Cancel appointment"})]]]]]]]


      [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,
                  sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}]]]]])


(defn email-body [content lng]
  (let [];lng (:language reservation-data)]

    (html5 ;{:xmlns "http://www.w3.org/1999/xhtml" :style "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
     (email-head)
     [:body {:itemscope "true" :itemtype "http://schema.org/EmailMessage" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" :bgcolor "#f6f6f6"}
      [:table.body-wrap {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" :bgcolor "#f6f6f6"}
       [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"} [:td {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" :valign "top"}]
        [:td.container {:width "600" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" :valign "top"}
         [:div.content {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;"}
          [:table.main {:width "100%" :cellpadding "0" :cellspacing "0" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" :bgcolor "#fff"}
           [:tr {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
            [:td.content-wrap.aligncenter {:style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;" :align "center" :valign "top"}
             [:table {:width "100%" :cellpadding "0" :cellspacing "0" :style "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}
              content]]]]
          (email-footer lng)]]]]])))

(defn pls-confirm-email [shop params]
  (let [shop (read-string shop)
        lng (:language params)]
    (email-body
      (list
        (email-header (:_id shop))
        (email-title (tr lng {:hu "Köszönjük hogy minket választott!"
                              :en "Thanks for choosing us!"}))
        (email-invoice params)
        (email-info lng)
        (confirm lng (:_id shop) (:reservation-id params))
        (email-shop-data shop))
      lng)))

(defn successful-confirmation-email [shop params]
  (let [shop (read-string shop)
        lng (:language params)]
    (email-body
      (list
        (email-header (:_id shop))
        (email-title (tr lng {:hu "Sikeres megerősítés!"
                              :en "Successful confirmation!"}))

        (email-invoice params)
        ;(str params)
        (email-success-confirm lng)

        (cancel-reservation lng (:_id shop) (:reservation-id params))
        (email-shop-data shop))
      lng)))


(defn successful-cancellation-email [shop params]
  (let [shop (read-string shop)
        lng (:language params)]
    (email-body
      (list
        (email-header (:_id shop))
        (email-title (tr lng {:hu "Sikeresen lemondtad foglalásod!"
                              :en "Successful appointment cancellation!"}))
        (email-invoice params)
        (email-success-cancel (:_id shop) lng)
        (email-shop-data shop))
      lng)))

(defn automatic-cancellation-email [shop params]
  (let [shop (read-string shop)
        lng (:language params)]
    (email-body
      (list
        (email-header (:_id shop))
        (email-title (tr lng {:hu "Foglalásodat rendszerünk törölte!"
                              :en "Our system removed your reservation!"}))
        (email-invoice params)
        (email-success-auto-cancel (:_id shop) lng)
        (email-shop-data shop))
      lng)))


;:pls-confirm :confirm :cancel
(defn send-email [the-key shop params]
  (let [language (:language params)]

    (postal/send-message
      {:host "mx-s3.vivawebhost.com"
       :user "foglalas@barbershopbp.hu"
       :pass "#4k0sP3t40912"
       :ssl true
       :port 465}
      ;:port 587
      ;:tls true}
      {:from "foglalas@barbershopbp.hu"
       :to (:email params)
       :subject (case the-key
                  :pls-confirm (tr language {:hu "Erősítsd meg foglalásod."
                                             :en "Confirm your reservation."})
                  :confirm (tr language {:hu "Foglalás megerősítve."
                                         :en "Reservation confirmed."})
                  :cancel (tr language {:hu "Foglalás lemondva."
                                        :en "Reservation cancelled."})
                  :auto-cancel (tr language {:hu "Foglalásodat rendszerünk törölte."
                                             :en "Our system removed your reservation."}))
       :body [{ :type "text/html; charset=utf-8"
               :content (case the-key
                          :pls-confirm (pls-confirm-email shop params)
                          :confirm (successful-confirmation-email shop params)
                          :cancel (successful-cancellation-email shop params)
                          :auto-cancel (automatic-cancellation-email shop params))}]})))


