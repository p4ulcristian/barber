goog.provide('barberclient.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
var module$node_modules$react_flatpickr$build$index=shadow.js.require("module$node_modules$react_flatpickr$build$index", {});
goog.require('ajax.core');
var module$node_modules$flatpickr$dist$l10n$hu=shadow.js.require("module$node_modules$flatpickr$dist$l10n$hu", {});
goog.require('accountant.core');
goog.require('cljs.reader');
flatpickr.l10ns.default.firstDayOfWeek = (1);
if((typeof barberclient !== 'undefined') && (typeof barberclient.core !== 'undefined') && (typeof barberclient.core.app_state !== 'undefined')){
} else {
barberclient.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sending","sending",-1806704862),new cljs.core.Keyword(null,"cart","cart",-119094748),new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883),new cljs.core.Keyword(null,"reservation","reservation",1852688040),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"free-times","free-times",-1086492522),new cljs.core.Keyword(null,"free-dates","free-dates",1423036474),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"employees","employees",1002695450),new cljs.core.Keyword(null,"services","services",970478783)],[null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,false,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"phone","phone",-763596057),null,new cljs.core.Keyword(null,"agreement","agreement",-156381462),false,new cljs.core.Keyword(null,"payment","payment",-1682035288),"cash",new cljs.core.Keyword(null,"marketing","marketing",2054879774),false], null),null,new cljs.core.Keyword(null,"hu","hu",-1762884758),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"phone","phone",-763596057),null], null),null,null]));
}
barberclient.core.google_map_styles = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse("[\n  {\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#212121\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.icon\",\n    \"stylers\": [\n      {\n        \"visibility\": \"off\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"elementType\": \"labels.text.stroke\",\n    \"stylers\": [\n      {\n        \"color\": \"#212121\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.country\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#9e9e9e\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.land_parcel\",\n    \"stylers\": [\n      {\n        \"visibility\": \"off\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"administrative.locality\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#bdbdbd\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#181818\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#616161\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"poi.park\",\n    \"elementType\": \"labels.text.stroke\",\n    \"stylers\": [\n      {\n        \"color\": \"#1b1b1b\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road\",\n    \"elementType\": \"geometry.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#2c2c2c\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#8a8a8a\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.arterial\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#373737\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.highway\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#3c3c3c\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.highway.controlled_access\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#4e4e4e\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"road.local\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#616161\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"transit\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#757575\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"water\",\n    \"elementType\": \"geometry\",\n    \"stylers\": [\n      {\n        \"color\": \"#000000\"\n      }\n    ]\n  },\n  {\n    \"featureType\": \"water\",\n    \"elementType\": \"labels.text.fill\",\n    \"stylers\": [\n      {\n        \"color\": \"#3d3d3d\"\n      }\n    ]\n  }\n]\n"));
barberclient.core.tr = (function barberclient$core$tr(the_map){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(the_map,new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)),"not found");
});
barberclient.core.get_month_name = (function barberclient$core$get_month_name(number){
var G__2824 = number;
switch (G__2824) {
case "01":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"jan.",new cljs.core.Keyword(null,"en","en",88457073),"jan."], null));

break;
case "02":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"febr.",new cljs.core.Keyword(null,"en","en",88457073),"febr."], null));

break;
case "03":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"marc.",new cljs.core.Keyword(null,"en","en",88457073),"marc."], null));

break;
case "04":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"\u00E1pr.",new cljs.core.Keyword(null,"en","en",88457073),"apr."], null));

break;
case "05":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"m\u00E1j.",new cljs.core.Keyword(null,"en","en",88457073),"may"], null));

break;
case "06":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"j\u00FAn.",new cljs.core.Keyword(null,"en","en",88457073),"june"], null));

break;
case "07":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"j\u00FAl.",new cljs.core.Keyword(null,"en","en",88457073),"july"], null));

break;
case "08":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"aug.",new cljs.core.Keyword(null,"en","en",88457073),"aug."], null));

break;
case "09":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"szept.",new cljs.core.Keyword(null,"en","en",88457073),"sept."], null));

break;
case "10":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"okt.",new cljs.core.Keyword(null,"en","en",88457073),"oct."], null));

break;
case "11":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"nov.",new cljs.core.Keyword(null,"en","en",88457073),"nov."], null));

break;
case "12":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"dec.",new cljs.core.Keyword(null,"en","en",88457073),"dec."], null));

break;
default:
return "no such month";

}
});
barberclient.core.validate_email = (function barberclient$core$validate_email(email){
var pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof email === 'string';
if(and__4120__auto__){
return cljs.core.re_matches(pattern,email);
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
return false;
}
});
barberclient.core.validate_phone = (function barberclient$core$validate_phone(text){
var pattern = /[0-9]{9}/;
if(cljs.core.truth_(cljs.core.re_matches(pattern,text))){
return true;
} else {
return false;
}
});
barberclient.core.validate_name = (function barberclient$core$validate_name(text){
var pattern = /.{3,50}/;
if(cljs.core.truth_(cljs.core.re_matches(pattern,text))){
return true;
} else {
return false;
}
});
barberclient.core.to_readable_date = (function barberclient$core$to_readable_date(date_str){
var vec__2825 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,"-");
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2825,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2825,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2825,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(barberclient.core.get_month_name(month))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
});
barberclient.core.ready_anim = (function barberclient$core$ready_anim(){
var element = document.getElementById("x-loader");
element.classList.add("animated-hide");

return window.setTimeout(((function (element){
return (function (){
return (element.style["display"] = "none");
});})(element))
,(1500));
});
barberclient.core.get_day_from_date = (function barberclient$core$get_day_from_date(year,month,day){
var date = (new Date(year,(month - (1)),day));
var day_code = date.getDay();
var G__2828 = day_code;
switch (G__2828) {
case (1):
return new cljs.core.Keyword(null,"monday","monday",-1107743655);

break;
case (2):
return new cljs.core.Keyword(null,"tuesday","tuesday",299624080);

break;
case (3):
return new cljs.core.Keyword(null,"wednesday","wednesday",-2061677647);

break;
case (4):
return new cljs.core.Keyword(null,"thursday","thursday",1681780767);

break;
case (5):
return new cljs.core.Keyword(null,"friday","friday",459046165);

break;
case (6):
return new cljs.core.Keyword(null,"saturday","saturday",-1342278228);

break;
case (0):
return new cljs.core.Keyword(null,"sunday","sunday",1381770036);

break;
default:
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
});
barberclient.core.ajax_get = (function barberclient$core$ajax_get(p__2829){
var map__2830 = p__2829;
var map__2830__$1 = (((((!((map__2830 == null))))?(((((map__2830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2830):map__2830);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2830__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2830__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2830__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barberclient.core.ajax_post = (function barberclient$core$ajax_post(p__2832){
var map__2833 = p__2832;
var map__2833__$1 = (((((!((map__2833 == null))))?(((((map__2833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2833):map__2833);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2833__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2833__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2833__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2833__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barberclient.core.flatpickr = (function barberclient$core$flatpickr(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_flatpickr$build$index.default,props], null);
});
barberclient.core.get_init_data = (function barberclient$core$get_init_data(){
barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"/get-employees-and-services",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2835_SHARP_){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2835_SHARP_);
var employees = new cljs.core.Keyword(null,"employees","employees",1002695450).cljs$core$IFn$_invoke$arity$1(data);
var services = new cljs.core.Keyword(null,"services","services",970478783).cljs$core$IFn$_invoke$arity$1(data);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"employees","employees",1002695450),employees,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"services","services",970478783),services], 0));

return barberclient.core.ready_anim();
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("Error get-employees-and-services");
})], null));

barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/server-time",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2836_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"actual-time","actual-time",-862199229),(function (){var time = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2836_SHARP_)),":");
return (((60) * parseInt(cljs.core.first(time))) + parseInt(cljs.core.second(time)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual-date","actual-date",-1046107089),cljs.core.first(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2836_SHARP_))], 0));
})], null));

barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"/min-max-date",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2837_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"min-max-date","min-max-date",-6666333),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2837_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("Error today");
})], null));

return barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"/shop-data",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2838_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2838_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("Error shop-data");
})], null));
});
barberclient.core.get_barion_payment_state = (function barberclient$core$get_barion_payment_state(id){
return barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),["/barion-payment-state/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2839_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"barion-state","barion-state",-372228289),p1__2839_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("Error get-employees-and-services");
})], null));
});
barberclient.core.two_digits = (function barberclient$core$two_digits(number){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)).length),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(number);
}
});
barberclient.core.convert_to_time = (function barberclient$core$convert_to_time(number){
var hours = barberclient.core.two_digits(cljs.core.quot(number,(60)));
var minutes = barberclient.core.two_digits(cljs.core.mod(number,(60)));
return [hours,":",minutes].join('');
});
barberclient.core.get_today_str = (function barberclient$core$get_today_str(){
var today = (new Date());
var year = today.getFullYear();
var month = barberclient.core.two_digits((today.getMonth() + (1)));
var date = barberclient.core.two_digits(today.getDate());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",month,"-",date].join('');
});
barberclient.core.convert_to_opening_hours = (function barberclient$core$convert_to_opening_hours(the_vector){
if((((the_vector == null)) || (cljs.core.empty_QMARK_(the_vector)))){
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Z\u00E1rva",new cljs.core.Keyword(null,"en","en",88457073),"Closed"], null));
} else {
var vec__2840 = the_vector;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2840,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2840,(1),null);
return [barberclient.core.convert_to_time(start)," - ",barberclient.core.convert_to_time(end)].join('');
}
});
barberclient.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/barion-redirect",new cljs.core.Keyword(null,"barion","barion",-1238341160)], null)], null));
barberclient.core.set_chosen = (function barberclient$core$set_chosen(the_key,the_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reservation","reservation",1852688040),the_key], null),the_data);
});
barberclient.core.get_chosen = (function barberclient$core$get_chosen(the_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barberclient.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reservation","reservation",1852688040),the_key], null));
});
barberclient.core.has_chosen_QMARK_ = (function barberclient$core$has_chosen_QMARK_(the_key){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barberclient.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reservation","reservation",1852688040),the_key], null)))){
return true;
} else {
return false;
}
});
barberclient.core.convert_free_times_to_reservation_times = (function barberclient$core$convert_free_times_to_reservation_times(coll){
var length = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"service","service",-1963054559)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = ((function (length){
return (function barberclient$core$convert_free_times_to_reservation_times_$_iter__2843(s__2844){
return (new cljs.core.LazySeq(null,((function (length){
return (function (){
var s__2844__$1 = s__2844;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__2844__$1);
if(temp__5735__auto__){
var s__2844__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2844__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2844__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2846 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2845 = (0);
while(true){
if((i__2845 < size__4522__auto__)){
var vec__2847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2845);
var brake_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2847,(0),null);
var brake_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2847,(1),null);
cljs.core.chunk_append(b__2846,(function (){var mod_on_start = cljs.core.mod(brake_start,(30));
var brake_start__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),mod_on_start))?brake_start:(brake_start + ((30) - mod_on_start)));
if((brake_start__$1 <= (brake_end - length))){
var iter__4523__auto__ = ((function (i__2845,mod_on_start,brake_start__$1,vec__2847,brake_start,brake_end,c__4521__auto__,size__4522__auto__,b__2846,s__2844__$2,temp__5735__auto__,length){
return (function barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2850(s__2851){
return (new cljs.core.LazySeq(null,((function (i__2845,mod_on_start,brake_start__$1,vec__2847,brake_start,brake_end,c__4521__auto__,size__4522__auto__,b__2846,s__2844__$2,temp__5735__auto__,length){
return (function (){
var s__2851__$1 = s__2851;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__2851__$1);
if(temp__5735__auto____$1){
var s__2851__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__2851__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__2851__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__2853 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__2852 = (0);
while(true){
if((i__2852 < size__4522__auto____$1)){
var multiplier = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__2852);
cljs.core.chunk_append(b__2853,(brake_start__$1 + ((30) * multiplier)));

var G__2905 = (i__2852 + (1));
i__2852 = G__2905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2853),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2850(cljs.core.chunk_rest(s__2851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2853),null);
}
} else {
var multiplier = cljs.core.first(s__2851__$2);
return cljs.core.cons((brake_start__$1 + ((30) * multiplier)),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2850(cljs.core.rest(s__2851__$2)));
}
} else {
return null;
}
break;
}
});})(i__2845,mod_on_start,brake_start__$1,vec__2847,brake_start,brake_end,c__4521__auto__,size__4522__auto__,b__2846,s__2844__$2,temp__5735__auto__,length))
,null,null));
});})(i__2845,mod_on_start,brake_start__$1,vec__2847,brake_start,brake_end,c__4521__auto__,size__4522__auto__,b__2846,s__2844__$2,temp__5735__auto__,length))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.quot(((brake_end - length) - brake_start__$1),(30)) + (1))));
} else {
return null;
}
})());

var G__2906 = (i__2845 + (1));
i__2845 = G__2906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2846),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843(cljs.core.chunk_rest(s__2844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2846),null);
}
} else {
var vec__2854 = cljs.core.first(s__2844__$2);
var brake_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2854,(0),null);
var brake_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2854,(1),null);
return cljs.core.cons((function (){var mod_on_start = cljs.core.mod(brake_start,(30));
var brake_start__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),mod_on_start))?brake_start:(brake_start + ((30) - mod_on_start)));
if((brake_start__$1 <= (brake_end - length))){
var iter__4523__auto__ = ((function (mod_on_start,brake_start__$1,vec__2854,brake_start,brake_end,s__2844__$2,temp__5735__auto__,length){
return (function barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2857(s__2858){
return (new cljs.core.LazySeq(null,((function (mod_on_start,brake_start__$1,vec__2854,brake_start,brake_end,s__2844__$2,temp__5735__auto__,length){
return (function (){
var s__2858__$1 = s__2858;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__2858__$1);
if(temp__5735__auto____$1){
var s__2858__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__2858__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2858__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2860 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2859 = (0);
while(true){
if((i__2859 < size__4522__auto__)){
var multiplier = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2859);
cljs.core.chunk_append(b__2860,(brake_start__$1 + ((30) * multiplier)));

var G__2907 = (i__2859 + (1));
i__2859 = G__2907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2860),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2857(cljs.core.chunk_rest(s__2858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2860),null);
}
} else {
var multiplier = cljs.core.first(s__2858__$2);
return cljs.core.cons((brake_start__$1 + ((30) * multiplier)),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843_$_iter__2857(cljs.core.rest(s__2858__$2)));
}
} else {
return null;
}
break;
}
});})(mod_on_start,brake_start__$1,vec__2854,brake_start,brake_end,s__2844__$2,temp__5735__auto__,length))
,null,null));
});})(mod_on_start,brake_start__$1,vec__2854,brake_start,brake_end,s__2844__$2,temp__5735__auto__,length))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.quot(((brake_end - length) - brake_start__$1),(30)) + (1))));
} else {
return null;
}
})(),barberclient$core$convert_free_times_to_reservation_times_$_iter__2843(cljs.core.rest(s__2844__$2)));
}
} else {
return null;
}
break;
}
});})(length))
,null,null));
});})(length))
;
return iter__4523__auto__(coll);
})());
});
barberclient.core.free_times__GT_emp = (function barberclient$core$free_times__GT_emp(coll){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (till_now,this_one){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,till_now,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(till_now,a,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"employee","employee",-504836945).cljs$core$IFn$_invoke$arity$1(this_one))],null));
}),barberclient.core.convert_free_times_to_reservation_times(new cljs.core.Keyword(null,"free-times","free-times",-1086492522).cljs$core$IFn$_invoke$arity$1(this_one)))));
}),cljs.core.PersistentArrayMap.EMPTY,coll),null);
});
barberclient.core.merge_free_times = (function barberclient$core$merge_free_times(coll){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coll));
});
barberclient.core.get_free_times = (function barberclient$core$get_free_times(employee,date){
return barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),["/get-free-times/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(employee),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2861_SHARP_){
var brakes_emp = barberclient.core.free_times__GT_emp(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2861_SHARP_));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"brakes-emp","brakes-emp",-1136920633),brakes_emp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"free-times","free-times",-1086492522),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(barberclient.core.merge_free_times(brakes_emp)))], 0));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("error free-times");
})], null));
});
barberclient.core.get_free_dates = (function barberclient$core$get_free_dates(employee,length){
return barberclient.core.ajax_get(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),["/get-free-dates/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(employee),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__2862_SHARP_){
var new_free_dates = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2862_SHARP_);
var any_free_QMARK_ = (!(cljs.core.empty_QMARK_(new_free_dates)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"free-dates","free-dates",1423036474),new_free_dates);

if(any_free_QMARK_){
barberclient.core.set_chosen(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.first(new_free_dates));

return barberclient.core.get_free_times(employee,cljs.core.first(new_free_dates));
} else {
return null;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return window.alert("error free dates");
})], null));
});
barberclient.core.employee = (function barberclient$core$employee(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.one-item","div.uk-text-center.one-item",-75525812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return barberclient.core.set_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945),data);
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data))], null);
});
barberclient.core.employees_step = (function barberclient$core$employees_step(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade","div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade",1421997623),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"free-times","free-times",-1086492522),cljs.core.PersistentVector.EMPTY);

barberclient.core.set_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945),null);

return barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);
})], null),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"employee","employee",-504836945)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945)))):barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"V\u00E1lassz barbert",new cljs.core.Keyword(null,"en","en",88457073),"Choose barber"], null)))], null),(((!(barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"employee","employee",-504836945)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.employee,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"B\u00E1rki",new cljs.core.Keyword(null,"en","en",88457073),"Anyone"], null)),new cljs.core.Keyword(null,"_id","_id",-789960287),"0"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__2863_SHARP_,p2__2864_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.employee,p2__2864_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__2863_SHARP_], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"employees","employees",1002695450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))], null):null)], null);
});
barberclient.core.service = (function barberclient$core$service(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.one-item.uk-grid-collapse","div.one-item.uk-grid-collapse",-935405375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return barberclient.core.set_chosen(new cljs.core.Keyword(null,"service","service",-1963054559),data);
}),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto","div.uk-width-auto",-1506646300),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__2866 = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2866__$1 = (((G__2866 instanceof cljs.core.Keyword))?G__2866.fqn:null);
switch (G__2866__$1) {
case "en":
return new cljs.core.Keyword(null,"enname","enname",956090365).cljs$core$IFn$_invoke$arity$1(data);

break;
case "hu":
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data);

break;
default:
return "not found";

}
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-text-right","div.uk-width-expand.uk-text-right",-998026752),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(data))," Ft"].join('')], null)], null);
});
barberclient.core.services_step = (function barberclient$core$services_step(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade","div.uk-card.uk-card-default.one-step.playfair.uk-animation-fade",1421997623),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"free-times","free-times",-1086492522),cljs.core.PersistentVector.EMPTY);

barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);

return barberclient.core.set_chosen(new cljs.core.Keyword(null,"service","service",-1963054559),null);
})], null),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"service","service",-1963054559)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__2870 = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2870__$1 = (((G__2870 instanceof cljs.core.Keyword))?G__2870.fqn:null);
switch (G__2870__$1) {
case "en":
return new cljs.core.Keyword(null,"enname","enname",956090365).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"service","service",-1963054559)));

break;
case "hu":
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"service","service",-1963054559)));

break;
default:
return "not found";

}
})()):barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"V\u00E1lassz szolg\u00E1ltat\u00E1st",new cljs.core.Keyword(null,"en","en",88457073),"Choose service"], null)))], null),(((!(barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"service","service",-1963054559)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__2867_SHARP_,p2__2868_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.service,p2__2868_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__2867_SHARP_], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"services","services",970478783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))], null):null)], null);
});
barberclient.core.one_brake = (function barberclient$core$one_brake(time){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playfair","div.playfair",-768196667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.one-brake","div.one-brake",-697266671),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,barberclient.core.get_chosen(new cljs.core.Keyword(null,"start","start",-355208981))))?"active-brake":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (a){
barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),time);

return barberclient.core.set_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945),(function (){var this_id = cljs.core.rand_nth(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brakes-emp","brakes-emp",-1136920633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)),time));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_id){
return (function (p1__2871_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__2871_SHARP_));
});})(this_id))
,new cljs.core.Keyword(null,"employees","employees",1002695450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))));
})());
})], null),barberclient.core.convert_to_time(time)], null)], null);
});
barberclient.core.decide_day_section = (function barberclient$core$decide_day_section(number){
if((number < (720))){
return new cljs.core.Keyword(null,"morning","morning",-229871035);
} else {
if((((number >= (720))) && ((number < (1080))))){
return new cljs.core.Keyword(null,"afternoon","afternoon",1529569827);
} else {
return new cljs.core.Keyword(null,"evening","evening",1560377406);

}
}
});
barberclient.core.day_section = (function barberclient$core$day_section(p__2874){
var vec__2875 = p__2874;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2875,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2875,(1),null);
var new_coll = coll;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!(cljs.core.empty_QMARK_(new_coll))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-margin-remove-bottom.uk-margin-small-left.playfair.one-title","h4.uk-margin-remove-bottom.uk-margin-small-left.playfair.one-title",1607698094),(function (){var G__2878 = the_key;
var G__2878__$1 = (((G__2878 instanceof cljs.core.Keyword))?G__2878.fqn:null);
switch (G__2878__$1) {
case "morning":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"D\u00E9lel\u0151tt",new cljs.core.Keyword(null,"en","en",88457073),"Morning"], null));

break;
case "afternoon":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"D\u00E9lut\u00E1n",new cljs.core.Keyword(null,"en","en",88457073),"Afternoon"], null));

break;
case "evening":
return barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Este",new cljs.core.Keyword(null,"en","en",88457073),"Evening"], null));

break;
default:
return "no such thing";

}
})()], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-collapse.uk-flex.uk-flex-center.uk-padding-small","div.uk-grid-collapse.uk-flex.uk-flex-center.uk-padding-small",-2053102841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (new_coll,vec__2875,the_key,coll){
return (function (p1__2872_SHARP_,p2__2873_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.one_brake,p2__2873_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__2872_SHARP_], null));
});})(new_coll,vec__2875,the_key,coll))
,new_coll)], null)], null);
});
barberclient.core.date_step = (function barberclient$core$date_step(){
var old_times = (function (){
return new cljs.core.Keyword(null,"free-times","free-times",-1086492522).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
});
var the_times = ((function (old_times){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual-date","actual-date",-1046107089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reservation","reservation",1852688040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (old_times){
return (function (a){
return ((new cljs.core.Keyword(null,"actual-time","actual-time",-862199229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)) + (60)) < a);
});})(old_times))
,old_times());
} else {
return old_times();
}
});})(old_times))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (old_times,the_times){
return (function (){
return barberclient.core.get_free_dates(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945))),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"service","service",-1963054559))));
});})(old_times,the_times))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (old_times,the_times){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step.uk-animation-fade","div.uk-card.uk-card-default.one-step.uk-animation-fade",-1465517121),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (old_times,the_times){
return (function (){
return barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);
});})(old_times,the_times))
], null),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"date","date",-1463434462)))?[barberclient.core.to_readable_date(barberclient.core.get_chosen(new cljs.core.Keyword(null,"date","date",-1463434462))),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981)))?[" - ",barberclient.core.convert_to_time(barberclient.core.get_chosen(new cljs.core.Keyword(null,"start","start",-355208981)))].join(''):null)].join(''):barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"V\u00E1lassz napot",new cljs.core.Keyword(null,"en","en",88457073),"Choose date"], null)))], null),(((!(barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex-center.uk-flex.uk-padding-small","div.uk-flex-center.uk-flex.uk-padding-small",126893496),(((!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"free-dates","free-dates",1423036474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))))?(function (){var G__2880 = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2880__$1 = (((G__2880 instanceof cljs.core.Keyword))?G__2880.fqn:null);
switch (G__2880__$1) {
case "en":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.flatpickr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),barberclient.core.get_chosen(new cljs.core.Keyword(null,"date","date",-1463434462)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"enable","enable",-1839114332),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"free-dates","free-dates",1423036474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"dateformat","dateformat",788125747),"Y-m-d",new cljs.core.Keyword(null,"minDate","minDate",229610480),cljs.core.first(new cljs.core.Keyword(null,"min-max-date","min-max-date",-6666333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"maxDate","maxDate",1297159788),cljs.core.second(new cljs.core.Keyword(null,"min-max-date","min-max-date",-6666333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"locale","locale",-2115712697),"default",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__2880,G__2880__$1,old_times,the_times){
return (function (selected_dates,date_str,instance){
barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);

barberclient.core.get_free_times(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945))),date_str);

return barberclient.core.set_chosen(new cljs.core.Keyword(null,"date","date",-1463434462),date_str);
});})(G__2880,G__2880__$1,old_times,the_times))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null));

break;
case "hu":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.flatpickr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),barberclient.core.get_chosen(new cljs.core.Keyword(null,"date","date",-1463434462)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"enable","enable",-1839114332),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"free-dates","free-dates",1423036474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"dateformat","dateformat",788125747),"Y-m-d",new cljs.core.Keyword(null,"minDate","minDate",229610480),cljs.core.first(new cljs.core.Keyword(null,"min-max-date","min-max-date",-6666333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"maxDate","maxDate",1297159788),cljs.core.second(new cljs.core.Keyword(null,"min-max-date","min-max-date",-6666333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"locale","locale",-2115712697),"hu",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__2880,G__2880__$1,old_times,the_times){
return (function (selected_dates,date_str,instance){
barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);

barberclient.core.get_free_times(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945))),date_str);

return barberclient.core.set_chosen(new cljs.core.Keyword(null,"date","date",-1463434462),date_str);
});})(G__2880,G__2880__$1,old_times,the_times))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null));

break;
default:
return "default";

}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.playfair","div.uk-text-center.playfair",2115485443),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Nincs id\u0151pont. Pr\u00F3b\u00E1ld meg egy m\u00E1sik barberrel vagy szolg\u00E1ltat\u00E1ssal!",new cljs.core.Keyword(null,"en","en",88457073),"No appointments available. Try with another barber or service!"], null))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"20px"], null)], null),(((!(cljs.core.empty_QMARK_(the_times()))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (old_times,the_times){
return (function (p1__2879_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.day_section,p1__2879_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(p1__2879_SHARP_)], null));
});})(old_times,the_times))
,cljs.core.group_by(barberclient.core.decide_day_section,the_times())):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.uk-padding-small","div.uk-text-center.uk-padding-small",-2089900622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"A mai napra sajnos m\u00E1r nem tudsz foglalni.",new cljs.core.Keyword(null,"en","en",88457073),"Unfortunately there are no more reservations for today"], null))], null))], null)], null):null)], null);
});})(old_times,the_times))
], null));
});
barberclient.core.reserve_BANG_ = (function barberclient$core$reserve_BANG_(){
var reservation_data = new cljs.core.Keyword(null,"reservation","reservation",1852688040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var employee = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"employee","employee",-504836945).cljs$core$IFn$_invoke$arity$1(reservation_data));
var service = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(reservation_data));
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(reservation_data);
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(reservation_data);
var language = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var user_data = new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var res_map = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"employee","employee",-504836945),employee,new cljs.core.Keyword(null,"service-id","service-id",-569220412),service,new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(reservation_data)),new cljs.core.Keyword(null,"language","language",-1591107564),language,new cljs.core.Keyword(null,"shop","shop",-823644406),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))),new cljs.core.Keyword(null,"user","user",1532431356),(cljs.core.truth_(new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))?user_data:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user_data,new cljs.core.Keyword(null,"phone","phone",-763596057)))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sending","sending",-1806704862),new cljs.core.Keyword(null,"loading","loading",-737050189));

return barberclient.core.ajax_post(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),"/reserve",new cljs.core.Keyword(null,"params","params",710516235),res_map,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (reservation_data,employee,service,date,start,language,user_data,res_map){
return (function (p1__2881_SHARP_){
console.log(["reserve-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2881_SHARP_))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sending","sending",-1806704862),(function (){var G__2883 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2881_SHARP_));
switch (G__2883) {
case "reserved":
return new cljs.core.Keyword(null,"reserved","reserved",-775228297);

break;
case "success-with-cash":
return new cljs.core.Keyword(null,"success-with-cash","success-with-cash",-1209197318);

break;
case "success-with-barion":
return new cljs.core.Keyword(null,"success-with-barion","success-with-barion",-286397080);

break;
default:
return console.log("coming back with: ",p1__2881_SHARP_);

}
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success-with-barion",new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2881_SHARP_)))){
return window.location.replace(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__2881_SHARP_)));
} else {
return null;
}
});})(reservation_data,employee,service,date,start,language,user_data,res_map))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (reservation_data,employee,service,date,start,language,user_data,res_map){
return (function (p1__2882_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sending","sending",-1806704862),new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sending-error","sending-error",-1915147007),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2882_SHARP_)], 0));
});})(reservation_data,employee,service,date,start,language,user_data,res_map))
], null));
});
barberclient.core.choose_payment = (function barberclient$core$choose_payment(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin.uk-grid-small.uk-child-width-1-1.uk-grid","div.uk-margin.uk-grid-small.uk-child-width-1-1.uk-grid",654317071),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair","h3.playfair",-1403430559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Fizetesi modok:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-radio","input.uk-radio",-1095958438),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"payment","payment",-1682035288)], null),"cash");
}),new cljs.core.Keyword(null,"checked","checked",-50955819),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cash",new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))))?true:false),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"cash"], null)], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"K\u00E9szp\u00E9nz",new cljs.core.Keyword(null,"en","en",88457073),"Cash"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-radio","input.uk-radio",-1095958438),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"payment","payment",-1682035288)], null),"barion");
}),new cljs.core.Keyword(null,"checked","checked",-50955819),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("barion",new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))))?true:false),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"barion"], null)], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Barion k\u00E1rty\u00E1s fizet\u00E9s",new cljs.core.Keyword(null,"en","en",88457073),"Barion card payment"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/barion/barion.svg"], null)], null)], null)], null)], null);
});
barberclient.core.reserve_step = (function barberclient$core$reserve_step(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step","div.uk-card.uk-card-default.one-step",-382013748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglal\u00E1s r\u00E9szletei",new cljs.core.Keyword(null,"en","en",88457073),"Reservation details"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex-center.uk-flex.uk-padding","div.uk-flex-center.uk-flex.uk-padding",1673860636),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-width-medium","form.uk-width-medium",1824632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin","div.uk-margin",1820567476),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-width-1-1","div.uk-inline.uk-width-1-1",-1828058358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-form-icon","span.uk-form-icon",1307255838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: mail"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input","input.uk-input",-1990973192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__2891 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__2891)){
return "good-input";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__2891)){
return "bad-input";
} else {
return null;

}
}
})(),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barberclient.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"email","email",1415816706)], null)),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__2884_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"email","email",1415816706)], null),barberclient.core.validate_email(p1__2884_SHARP_.target.value));
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__2885_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"email","email",1415816706)], null),clojure.string.lower_case(p1__2885_SHARP_.target.value));
}),new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"E-mail",new cljs.core.Keyword(null,"en","en",88457073),"Email"], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin","div.uk-margin",1820567476),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.uk-width-1-1","div.uk-inline.uk-width-1-1",-1828058358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-form-icon","span.uk-form-icon",1307255838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: user"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input","input.uk-input",-1990973192),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__2892 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__2892)){
return "good-input";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__2892)){
return "bad-input";
} else {
return null;

}
}
})(),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__2886_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"name","name",1843675177)], null),barberclient.core.validate_name(p1__2886_SHARP_.target.value));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barberclient.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"max-length","max-length",-254826109),"50",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__2887_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__2887_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"N\u00E9v",new cljs.core.Keyword(null,"en","en",88457073),"Name"], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin","div.uk-margin",1820567476),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-collapse.uk-width-1-1.uk-grid","div.uk-grid-collapse.uk-width-1-1.uk-grid",739625875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-input.uk-width-auto.uk-padding-remove-vertical","div.uk-input.uk-width-auto.uk-padding-remove-vertical",1354235333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"7px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"7px"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"icon: receiver"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+36"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input","input.uk-input",-1990973192),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__2893 = new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__2893)){
return "good-input";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__2893)){
return "bad-input";
} else {
return null;

}
}
})(),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barberclient.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"phone","phone",-763596057)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__2888_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"phone","phone",-763596057)], null),p1__2888_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__2889_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"phone","phone",-763596057)], null),barberclient.core.validate_phone(p1__2889_SHARP_.target.value));
}),new cljs.core.Keyword(null,"type","type",1174270348),"tel",new cljs.core.Keyword(null,"max-length","max-length",-254826109),"9",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Telefonsz\u00E1m",new cljs.core.Keyword(null,"en","en",88457073),"Phone number"], null))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid","div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid",1969746272),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-checkbox","input.uk-checkbox",-981725814),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"agreement","agreement",-156381462)], null),cljs.core.not(new cljs.core.Keyword(null,"agreement","agreement",-156381462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))));
}),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"agreement","agreement",-156381462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-margin-small-left","span.uk-margin-small-left",1587588278),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Elfogadom a ",new cljs.core.Keyword(null,"en","en",88457073),"I accept the conditions of the "], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))),"-hozzajarulo.pdf"].join('')], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"hozz\u00E1j\u00E1rul\u00F3 nyilatkozat, ",new cljs.core.Keyword(null,"en","en",88457073),"statement of consent, "], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"/files/aszf.pdf"], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"\u00C1ltal\u00E1nos szerz\u0151d\u00E9si felt\u00E9teleket ",new cljs.core.Keyword(null,"en","en",88457073),"Terms and Conditions "], null))], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758)," \u00E9s az ",new cljs.core.Keyword(null,"en","en",88457073)," and the "], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))),"-altalanos.pdf"].join('')], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"adatkezel\u00E9si t\u00E1j\u00E9koztat\u00F3",new cljs.core.Keyword(null,"en","en",88457073),"data management informant"], null))], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758)," felt\u00E9teleit.",new cljs.core.Keyword(null,"en","en",88457073),""], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid","div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid",1969746272),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-checkbox","input.uk-checkbox",-981725814),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"marketing","marketing",2054879774)], null),cljs.core.not(new cljs.core.Keyword(null,"marketing","marketing",2054879774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))));
}),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"marketing","marketing",2054879774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-margin-small-left","span.uk-margin-small-left",1587588278),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Hozz\u00E1j\u00E1rulok, hogy szem\u00E9lyreszabott aj\u00E1nlatokat \u00E9s marketing tartalm\u00FA leveleket kapjak.",new cljs.core.Keyword(null,"en","en",88457073),"You allow receiving marketing communications from us."], null))], null)], null)], null),(function (){var user_data = new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var validation = new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-align-center.uk-margin-remove-bottom.uk-margin-small-top.uk-animation-fade","button.uk-button.uk-button-default.uk-align-center.uk-margin-remove-bottom.uk-margin-small-top.uk-animation-fade",786294834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(validation);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(validation);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"agreement","agreement",-156381462).cljs$core$IFn$_invoke$arity$1(user_data);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?false:true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user_data,validation){
return (function (p1__2890_SHARP_){
p1__2890_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"modal","modal",-1031880850),true);
});})(user_data,validation))
], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglal\u00E1s",new cljs.core.Keyword(null,"en","en",88457073),"Reserve"], null))], null);
})()], null)], null)], null);
})], null));
});
barberclient.core.sending_reservation = (function barberclient$core$sending_reservation(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.scrollTo((0),(0));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var new_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-button-small.uk-margin-top","button.uk-button.uk-button-default.uk-button-small.uk-margin-top",-1207137013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sending","sending",-1806704862),null);

barberclient.core.set_chosen(new cljs.core.Keyword(null,"start","start",-355208981),null);

barberclient.core.set_chosen(new cljs.core.Keyword(null,"date","date",-1463434462),null);

return barberclient.core.get_free_dates(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"employee","employee",-504836945))),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(barberclient.core.get_chosen(new cljs.core.Keyword(null,"service","service",-1963054559))));
})], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"\u00DAj foglal\u00E1s",new cljs.core.Keyword(null,"en","en",88457073),"New reservation"], null))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"sending","sending",-1806704862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step","div.uk-card.uk-card-default.one-step",-382013748),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (new_button){
return (function (){
return cljs.core.List.EMPTY;
});})(new_button))
], null),barberclient.core.tr((function (){var G__2894 = new cljs.core.Keyword(null,"sending","sending",-1806704862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2894__$1 = (((G__2894 instanceof cljs.core.Keyword))?G__2894.fqn:null);
switch (G__2894__$1) {
case "loading":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Feldolgoz\u00E1s alatt...",new cljs.core.Keyword(null,"en","en",88457073),"Processing..."], null);

break;
case "success-with-cash":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Igazold vissza foglal\u00E1sod!",new cljs.core.Keyword(null,"en","en",88457073),"Confirm your reservation!"], null);

break;
case "success-with-barion":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en","en",88457073),"Payment with Barion",new cljs.core.Keyword(null,"hu","hu",-1762884758),"Fizet\u00E9s Barionnal"], null);

break;
case "reserved":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglalt!",new cljs.core.Keyword(null,"en","en",88457073),"Already reserved!"], null);

break;
case "fail":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Sikertelen foglal\u00E1s",new cljs.core.Keyword(null,"en","en",88457073),"Unsuccessful reservation"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglal\u00E1sok: ",new cljs.core.Keyword(null,"en","en",88457073),"Reservations: "], null);

}
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex-center.uk-flex.uk-padding-small","div.uk-flex-center.uk-flex.uk-padding-small",126893496),(function (){var G__2895 = new cljs.core.Keyword(null,"sending","sending",-1806704862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2895__$1 = (((G__2895 instanceof cljs.core.Keyword))?G__2895.fqn:null);
switch (G__2895__$1) {
case "loading":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-spinner","data-uk-spinner",-817089100),"true"], null)], null);

break;
case "reserved":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Id\u0151pontodat id\u0151k\u00F6zben m\u00E1s befoglalta. K\u00F6sz\u00F6nj\u00FCk meg\u00E9rt\u00E9sed.",new cljs.core.Keyword(null,"en","en",88457073),"Your appointment is already reserved by somebody else. Thank you for your understanding."], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right","div.uk-text-right",-1941585944),new_button], null)], null);

break;
case "success-with-cash":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglal\u00E1s\u00E1hoz a meger\u0151s\u00EDt\u0151 emailt elk\u00FCldt\u00FCk a(z) '",new cljs.core.Keyword(null,"en","en",88457073),"Your confirmation email has been sent to: "], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"' email c\u00EDmre.",new cljs.core.Keyword(null,"en","en",88457073),""], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right.uk-margin-large-top","div.uk-text-right.uk-margin-large-top",-308874785),new_button], null)], null);

break;
case "success-with-barion":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Fizess a Barion hatterben megnyitott ablakaban",new cljs.core.Keyword(null,"en","en",88457073),"Pay in the opened Barion window"], null))], null)], null)], null);

break;
case "fail":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"A foglal\u00E1s meghi\u00FAsult",new cljs.core.Keyword(null,"en","en",88457073),"Reservation failed"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"A hiba oka: ",new cljs.core.Keyword(null,"en","en",88457073),"The reason:"], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sending-error","sending-error",-1915147007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new_button], null)], null);

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sending","sending",-1806704862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));

}
})()], null)], null)], null);
} else {
return null;
}
})], null));
});
barberclient.core.wallpaper = (function barberclient$core$wallpaper(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[(0),"#222","100%","url(/main.jpg)",(-1),"fixed","no-repeat","center","cover","100vh",(0)])], null)], null);
});
barberclient.core.reservation_steps = (function barberclient$core$reservation_steps(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-large.uk-align-center","div.uk-width-large.uk-align-center",-240556734),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"sending","sending",-1806704862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.employees_step], null),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"employee","employee",-504836945)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.services_step], null):null),((((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"employee","employee",-504836945))) && (barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"service","service",-1963054559)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.date_step], null):null),((barberclient.core.has_chosen_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.reserve_step], null):null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.sending_reservation], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.wallpaper], null)], null);
});
barberclient.core.get_el = (function barberclient$core$get_el(id){
return document.getElementById(id);
});
barberclient.core.add_event_listener = (function barberclient$core$add_event_listener(el,type,callback){
return el.addEventListener(type,callback,false);
});
barberclient.core.remove_event_listener = (function barberclient$core$remove_event_listener(el,type,callback){
return el.removeEventListener(type,callback,false);
});
barberclient.core.modal = (function barberclient$core$modal(){
var last_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var open_fn = ((function (last_open_QMARK_){
return (function (){
return cljs.core.reset_BANG_(last_open_QMARK_,true);
});})(last_open_QMARK_))
;
var close_fn = ((function (last_open_QMARK_,open_fn){
return (function (){
return cljs.core.reset_BANG_(last_open_QMARK_,false);
});})(last_open_QMARK_,open_fn))
;
var esc_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var no_fn = ((function (last_open_QMARK_,open_fn,close_fn,esc_listener){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"modal","modal",-1031880850),false);
});})(last_open_QMARK_,open_fn,close_fn,esc_listener))
;
var yes_fn = ((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"modal","modal",-1031880850),false);

return barberclient.core.reserve_BANG_();
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn))
;
var no_event = ((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(last_open_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),a.which)){
return no_fn();
} else {
return null;
}
} else {
return null;
}
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn))
;
var enter_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var yes_event = ((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(last_open_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),a.which)){
return yes_fn();
} else {
return null;
}
} else {
return null;
}
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
cljs.core.reset_BANG_(esc_listener,no_event);

cljs.core.reset_BANG_(enter_listener,yes_event);

barberclient.core.add_event_listener(window,"keydown",cljs.core.deref(esc_listener));

return barberclient.core.add_event_listener(window,"keydown",cljs.core.deref(enter_listener));
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
barberclient.core.remove_event_listener(window,"keydown",cljs.core.deref(enter_listener));

return barberclient.core.remove_event_listener(window,"keydown",cljs.core.deref(esc_listener));
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#modal.uk-inline.uk-animation-fade.uk-animation-fast","div#modal.uk-inline.uk-animation-fade.uk-animation-fast",1637660528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.7)",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5000)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center.uk-padding-small","div.uk-position-center.uk-padding-small",1329306557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5001),new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-text-center.uk-heading-line","h4.uk-text-center.uk-heading-line",1582188547),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Ez az email c\u00EDmed?",new cljs.core.Keyword(null,"en","en",88457073),"Is this your email address?"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text.bigger.uk-text-center","p.uk-text.bigger.uk-text-center",1849934354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.the-email","span.the-email",1127481037),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null)], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-bigger.uk-text-center","p.uk-text-bigger.uk-text-center",-354874625),"Ha igen, az \"Elfogad\u00E1s\" gombra kattintva megkapod fi\u00F3kodba a meger\u0151s\u00EDt\u0151 e-mailt ahol vissza tudod ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"igazolni"], null)," foglal\u00E1sodat."], null),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-bigger.uk-text-center","p.uk-text-bigger.uk-text-center",-354874625),"If it's correct, click the \" Accept\" button and we'll send an e-mail to you where you can ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"confirm"], null)," your appointment."], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-flex","div.uk-width-1-1.uk-flex",1205095905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-flex-1","button.uk-button.uk-button-default.uk-flex-1",-1759476927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),no_fn], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"M\u00E9gse",new cljs.core.Keyword(null,"en","en",88457073),"Cancel"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-flex-1.uk-margin-left","button.uk-button.uk-button-default.uk-flex-1.uk-margin-left",2026761014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),yes_fn], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Foglal\u00E1s",new cljs.core.Keyword(null,"en","en",88457073),"Reserve"], null))], null)], null)], null)], null);
});})(last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
], null));
});
barberclient.core.header = (function barberclient$core$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"background","background",-863952629),"#222"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center.uk-width-medium.uk-margin-remove-bottom","img.uk-align-center.uk-width-medium.uk-margin-remove-bottom",1725570552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://szeged.barbershopbp.hu/logo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))))].join('')], null)], null)], null)], null);
});
barberclient.core.with_icon = (function barberclient$core$with_icon(icon,content){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-large.uk-padding-small","div.uk-width-large.uk-padding-small",-281521003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-40px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"uk-grid-collapse",new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto.uk-flex.uk-flex-middle","div.uk-width-auto.uk-flex.uk-flex-middle",1965729332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),["icon: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-margin-left.uk-text-center","div.uk-width-expand.uk-margin-left.uk-text-center",1161646796),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-20px"], null)], null),content], null)], null);
});
barberclient.core.contact = (function barberclient$core$contact(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-bottom","div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-bottom",1126971024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-1 uk-width-1-2@m"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.playfair","h3.uk-text-center.playfair",1938894220),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Kapcsolat",new cljs.core.Keyword(null,"en","en",88457073),"Contact"], null))], null),(function (){var shop = new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var address = new cljs.core.Keyword(null,"contact-address","contact-address",1393285377).cljs$core$IFn$_invoke$arity$1(shop);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex-center.uk-flex.uk-grid-collapse","div.uk-flex-center.uk-flex.uk-grid-collapse",488249906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-large","div.uk-width-large",-1189402375),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.with_icon,"location",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(address)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.with_icon,"mail",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(shop))].join('')], null),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(shop)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.with_icon,"receiver",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["tel:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contact-phone","contact-phone",2117583337).cljs$core$IFn$_invoke$arity$1(shop))].join('')], null),new cljs.core.Keyword(null,"contact-phone","contact-phone",2117583337).cljs$core$IFn$_invoke$arity$1(shop)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.with_icon,"facebook",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["https://www.facebook.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"facebook","facebook",-1297545787).cljs$core$IFn$_invoke$arity$1(shop))].join('')], null),["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"facebook","facebook",-1297545787).cljs$core$IFn$_invoke$arity$1(shop))].join('')], null)], null)], null)], null)], null);
})()], null);
});
barberclient.core.opening_hours = (function barberclient$core$opening_hours(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-top","div.uk-flex.uk-flex-center.uk-flex-column.uk-margin-top",431554648),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-1 uk-width-1-2@m"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.uk-text-center.playfair","h3.uk-text-center.playfair",1938894220),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Nyitvatart\u00E1s",new cljs.core.Keyword(null,"en","en",88457073),"Opening hours"], null))], null),(function (){var opening = new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playfair.uk-grid-collapse.uk-child-width-1-1.uk-text-center.uk-width-large.uk-align-center.uk-margin-remove-top.uk-margin-bottom","div.playfair.uk-grid-collapse.uk-child-width-1-1.uk-text-center.uk-width-large.uk-align-center.uk-margin-remove-top.uk-margin-bottom",1205715382),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"H\u00E9tf\u0151",new cljs.core.Keyword(null,"en","en",88457073),"Monday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"monday","monday",-1107743655).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Kedd",new cljs.core.Keyword(null,"en","en",88457073),"Tuesday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"tuesday","tuesday",299624080).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Szerda",new cljs.core.Keyword(null,"en","en",88457073),"Wednesday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"wednesday","wednesday",-2061677647).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Cs\u00FCt\u00F6rt\u00F6k",new cljs.core.Keyword(null,"en","en",88457073),"Thursday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"thursday","thursday",1681780767).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"P\u00E9ntek",new cljs.core.Keyword(null,"en","en",88457073),"Friday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"friday","friday",459046165).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Szombat",new cljs.core.Keyword(null,"en","en",88457073),"Saturday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"saturday","saturday",-1342278228).cljs$core$IFn$_invoke$arity$1(opening))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center","div.uk-padding-small.uk-grid-collapse.uk-child-width-1-2.uk-text-center",1981018565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Vas\u00E1rnap",new cljs.core.Keyword(null,"en","en",88457073),"Sunday"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barberclient.core.convert_to_opening_hours(new cljs.core.Keyword(null,"sunday","sunday",1381770036).cljs$core$IFn$_invoke$arity$1(opening))], null)], null)], null);
})()], null);
});
barberclient.core.google_icon = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),"/img/barbershop.svg",new cljs.core.Keyword(null,"scaledSize","scaledSize",799656530),(new google.maps.Size((40),(40))),new cljs.core.Keyword(null,"origin","origin",1037372088),(new google.maps.Point((0),(0))),new cljs.core.Keyword(null,"anchor","anchor",1549638489),(new google.maps.Point((0),(0)))], null);
barberclient.core.home_did_mount = (function barberclient$core$home_did_mount(this$,coordinates){
var lat = cljs.core.first(coordinates);
var lng = cljs.core.second(coordinates);
var latlng = (new google.maps.LatLng(lat,lng));
var map_canvas = reagent.dom.dom_node(this$);
var map_options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["center",latlng,"zoom",(17),"options",new cljs.core.PersistentArrayMap(null, 1, ["styles",barberclient.core.google_map_styles], null)], null));
var the_map = (new google.maps.Map(map_canvas,map_options));
var the_marker = (new google.maps.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),latlng,new cljs.core.Keyword(null,"map","map",1371690461),the_map,new cljs.core.Keyword(null,"icon","icon",1679606541),barberclient.core.google_icon], null))));
return the_marker;
});
barberclient.core.home_render = (function barberclient$core$home_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw"], null)], null)], null);
});
barberclient.core.google_maps = (function barberclient$core$google_maps(coordinates){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),barberclient.core.home_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__2896_SHARP_){
return barberclient.core.home_did_mount(p1__2896_SHARP_,coordinates);
})], null));
});
barberclient.core.barion_footer = (function barberclient$core$barion_footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center","div.uk-align-center",235600962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-width-1-1 uk-width-1-2@m"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.uk-padding-small","div.uk-text-center.uk-padding-small",-2089900622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null),"Honlapunkon lehetseges a kartyas fizetes a barionos feluleten keresztul."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-padding-small.uk-width-medium.uk-align-center.uk-margin-remove-top","img.uk-padding-small.uk-width-medium.uk-align-center.uk-margin-remove-top",1301362484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/barion/barion.svg"], null)], null)], null);
});
barberclient.core.footer = (function barberclient$core$footer(){
var coordinates = new cljs.core.Keyword(null,"map-coordinates","map-coordinates",1632861134).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-data","shop-data",-1796065883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.uk-card.uk-card-secondary.uk-grid-collapse.playfair","section.uk-card.uk-card-secondary.uk-grid-collapse.playfair",-92392259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#222"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.opening_hours], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.contact], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.barion_footer], null),(cljs.core.truth_(coordinates)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.google_maps,coordinates], null):null)], null);
});
barberclient.core.one_lng = (function barberclient$core$one_lng(name,the_key){
var is_active_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_key,new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)));
});
return ((function (is_active_QMARK_){
return (function (name__$1,the_key__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"5px",new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),"5px",new cljs.core.Keyword(null,"background","background",-863952629),((is_active_QMARK_())?"rgb(255, 226, 38)":"transparent")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_active_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"language","language",-1591107564),the_key__$1);
});})(is_active_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 3px 3px 5px",new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"5px",new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),"5px",new cljs.core.Keyword(null,"transform","transform",1381301764),((is_active_QMARK_())?"translateX(-10px)":"inherit"),new cljs.core.Keyword(null,"transition","transition",765692007),"0.2s ease-in",new cljs.core.Keyword(null,"color","color",1011675173),((is_active_QMARK_())?"#222":"white"),new cljs.core.Keyword(null,"background","background",-863952629),((is_active_QMARK_())?"rgb(255, 226, 38)":"#222")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),name__$1], null)], null)], null);
});
;})(is_active_QMARK_))
});
barberclient.core.language_button = (function barberclient$core$language_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-sticky","data-uk-sticky",1691370808),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-right.uk-margin-top","div.uk-position-right.uk-margin-top",-1468453280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playfair","div.playfair",-768196667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.one_lng,"EN |",new cljs.core.Keyword(null,"en","en",88457073)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.one_lng,"HU |",new cljs.core.Keyword(null,"hu","hu",-1762884758)], null)], null)], null)], null)], null);
});
barberclient.core.barion_page = (function barberclient$core$barion_page(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return barberclient.core.get_barion_payment_state(new cljs.core.Keyword(null,"paymentId","paymentId",147477748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var order_details = new cljs.core.Keyword(null,"order-details","order-details",582680591).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"barion-state","barion-state",-372228289).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state))));
var service = new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(order_details);
var barber = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"employee-data","employee-data",1233698405).cljs$core$IFn$_invoke$arity$1(order_details));
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(order_details);
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(order_details);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-large.uk-align-center","div.uk-width-large.uk-align-center",-240556734),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.one-step.uk-animation-fade","div.uk-card.uk-card-default.one-step.uk-animation-fade",-1465517121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.playfair.one-title","h3.playfair.one-title",-1328362448),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Sikeres fizet\u00E9s",new cljs.core.Keyword(null,"en","en",88457073),"Successful payment"], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.p-no-margin","div.uk-padding-small.p-no-margin",-900891343),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Tranzakci\u00F3 id: ",new cljs.core.Keyword(null,"en","en",88457073),"Transaction id: "], null))], null),new cljs.core.Keyword(null,"paymentId","paymentId",147477748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Szolg\u00E1ltat\u00E1s: ",new cljs.core.Keyword(null,"en","en",88457073),"Service: "], null))], null),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(service),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"enname","enname",956090365).cljs$core$IFn$_invoke$arity$1(service)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Barber: "], null),barber], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Id\u0151pont: ",new cljs.core.Keyword(null,"en","en",88457073),"Time: "], null))], null),barberclient.core.to_readable_date(date)," - ",barberclient.core.convert_to_time(start)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.uk-padding-small.uk-text-center","h4.uk-padding-small.uk-text-center",157525911),barberclient.core.tr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hu","hu",-1762884758),"Fizet\u00E9sed sikeres volt. K\u00E9rj\u00FCk jelenj meg a foglalt id\u0151pontodon.",new cljs.core.Keyword(null,"en","en",88457073),"Your payment was successful. Please come to your reserved appointment."], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.wallpaper], null)], null);
})], null));
});
barberclient.core.client_page = (function barberclient$core$client_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.language_button], null),(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.modal], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex.uk-flex-center.uk-flex-column","div.uk-flex.uk-flex-center.uk-flex-column",-1777326595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"50vh"], null)], null),(function (){var G__2897 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(barberclient.core.app_state));
var G__2897__$1 = (((G__2897 instanceof cljs.core.Keyword))?G__2897.fqn:null);
switch (G__2897__$1) {
case "barion":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.barion_page], null);

break;
case "index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.reservation_steps], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2897__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.footer], null)], null);
});
barberclient.core.mount_root = (function barberclient$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barberclient.core.client_page], null),document.getElementById("app"));
});
barberclient.core._QMARK_csrf_token = (function (){var temp__5735__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
barberclient.core.local_uri_QMARK_ = (function barberclient$core$local_uri_QMARK_(p__2898){
var map__2899 = p__2898;
var map__2899__$1 = (((((!((map__2899 == null))))?(((((map__2899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2899):map__2899);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
barberclient.core.default_headers = (function barberclient$core$default_headers(request){
if(barberclient.core.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__2901_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",barberclient.core._QMARK_csrf_token], null),p1__2901_SHARP_], 0));
}));
} else {
return request;
}
});
barberclient.core.load_interceptors_BANG_ = (function barberclient$core$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__2902 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),barberclient.core.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__2902) : ajax.core.to_interceptor.call(null,G__2902));
})());
});
barberclient.core.init_BANG_ = (function barberclient$core$init_BANG_(){
barberclient.core.get_init_data();

barberclient.core.load_interceptors_BANG_();

clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(barberclient.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
var query_params = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match));
reagent.core.after_render(clerk.core.after_render_BANG_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(barberclient.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], 0));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(barberclient.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return barberclient.core.mount_root();
});

//# sourceMappingURL=barberclient.core.js.map
