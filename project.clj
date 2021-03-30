(defproject barber "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring-server "0.5.0"]
                 [ring "1.7.1"]
                 ;[ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]
                 [cheshire "5.10.0"]
                 [reagent "0.10.0"]
                 [clj-http "3.10.0"]
                 [reagent-utils "0.3.3"]
                 [yogthos/config "1.1.3"]
                 [metosin/reitit "0.3.7"]
                 [pez/clerk "1.0.0"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]
                 ;Custom elemek
                 [re-frame "0.10.8"]
                 [com.taoensso/sente "1.14.0-RC2"]
                 [cljs-ajax "0.8.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-ssl "0.3.0"]
                 [ring/ring-headers "0.3.0"]
                 [ring/ring-anti-forgery "1.3.0"]
                 [http-kit "2.3.0"]
                 [buddy/buddy-auth "2.1.0"]
                 [buddy/buddy-hashers "1.3.0"]
                 [com.novemberain/monger "3.5.0"]
                 [ring-transit "0.1.6"]
                 [clj-time "0.15.2"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [com.draines/postal "2.0.3"]
                 [org.clojure/clojurescript "1.10.520"]
                 [hara/io.scheduler "3.0.7"]

                 ;Shadow Cljs libraries
                 [thheller/shadow-cljs "2.8.83"]
                 [com.google.javascript/closure-compiler-unshaded "v20190325"]
                 [org.clojure/google-closure-library "0.0-20190213-2033d5d9"]]
                 ;Shadow Cljs libraries]




  :plugins [[lein-shadow "0.1.6"]]

  :ring {:handler barber.handler/app
         :uberwar-name "barber.war"}

  :min-lein-version "2.5.0"
  :uberjar-name "barber.jar"
  :main barber.server
  :clean-targets ^{:protect false}
  [:target-path
   "resources/public/js/"
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :resource-paths ["resources" "target/cljsbuild"]

  :shadow-cljs {:builds
                {:app {:target :browser
                       :modules {:main {:init-fn barber.core/init!}}
                       :output-dir       "resources/public/js"
                       :devtools {:watch-dir "resources/public"
                                  :after-load barber.core/mount-root}}
                 :client {:target :browser
                          :modules {:client {:init-fn barberclient.core/init!}}
                          :output-dir       "resources/public/js"
                          :devtools {:watch-dir "resources/public"
                                     :after-load barberclient.core/mount-root}}}}



  :profiles {:uberjar {:source-paths ["src/barber/clj"]
                       :prep-tasks ["clean"
                                    "compile"
                                    ["shadow" "compile" "app"]
                                    ["shadow" "compile" "client"]]
                                    ;"compile" ["shadow" "release" "client"]]
                       :aot :all
                       :omit-source true}})
