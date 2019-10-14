(ns barber.views
  (:require
    [hiccup.core :as hiccup]
    [ring.middleware.anti-forgery :as anti-forgery :refer :all]
    [hiccup.page :refer [include-js include-css html5]]
    [config.core :refer [env]]))




(def mount-target
  "Loading screen for mounting"
  [:div#app
   [:h2 "Wait till it loads..."]])

(defn head []
  "Head with some metatags"
  [:head
   [:title "Barber"]
   [:link {:rel "icon" :href "/favicon.png" :type "image/png"}]
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css "/css/uikit.min.css")
   (include-css "css/flatpickr.min.css")
   (include-css "/css/site.css")])

(defn loading-page []
  "The app's page"
  (html5
   (head)
   [:body {:class "body-container"}
    (let [csrf-token (force anti-forgery/*anti-forgery-token*)]
        [:div#sente-csrf-token {:data-csrf-token csrf-token}])
    mount-target
    (include-js "/js/uikit.min.js")
    (include-js "/js/uikit-icons.min.js")
    (include-js "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js")
    (include-js "https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js")
    (include-js "/js/main.js")]))


(defn login-page
  "The Login page"
  [_request]
  (html5
    (head)
    [:body.uk-container.uk-container-small {:class "body-container"}
     [:div.uk-card-uk-card-default.uk-position-center.uk-card-default
      [:div.uk-card-body.uk-text-center
       [:img {:src "/img/logo.png" :width "150px"}]
       [:h1.uk-heading (str
                         (clojure.string/capitalize "barber")
                         " login page")]
       [:form.uk-form-horizontal
        {:method "post", :action "/login"}
        (let [csrf-token (force anti-forgery/*anti-forgery-token*)]
          [:field-set
           [:input {:value csrf-token
                    :type "hidden",
                    :id "__anti-forgery-token"
                    :name "__anti-forgery-token"}]
           [:div
             [:label.uk-form-label {:for "username"} "Username:"]
             [:div.uk-form-controls
                [:div.uk-inline
                 [:span.uk-form-icon {:data-uk-icon "icon: user"}]
                 [:input.uk-input.uk-form-width-small {:name "username", :type "text"}]]]]
           [:div
             [:label.uk-form-label {:for "password"} "Password:"]
             [:div.uk-form-controls
              [:div.uk-inline
               [:span.uk-form-icon {:data-uk-icon "icon: password"}]
               [:input.uk-input.uk-form-width-small {:name "password", :type "password"}]]]]
           [:div.uk-margin ][:input.uk-button.uk-button-default {:value "Sign In", :type "submit"}]])]]]]
    (include-js "/js/uikit.min.js")
    (include-js "/js/uikit-icons.min.js")))
