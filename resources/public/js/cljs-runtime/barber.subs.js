goog.provide('barber.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__12132_12236 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__12133_12237 = ((function (G__12132_12236){
return (function (db,p__12135){
var vec__12136 = p__12135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,the_key);
});})(G__12132_12236))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12132_12236,G__12133_12237) : re_frame.core.reg_sub.call(null,G__12132_12236,G__12133_12237));
var G__12142_12243 = new cljs.core.Keyword(null,"selected-date-and-day","selected-date-and-day",1409782707);
var G__12143_12244 = ((function (G__12142_12243){
return (function (db,p__12145){
var vec__12146 = p__12145;
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"selected-day","selected-day",1859078310))],null));
});})(G__12142_12243))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12142_12243,G__12143_12244) : re_frame.core.reg_sub.call(null,G__12142_12243,G__12143_12244));
var G__12150_12251 = new cljs.core.Keyword(null,"calendar-data-loaded?","calendar-data-loaded?",-1699413915);
var G__12151_12252 = ((function (G__12150_12251){
return (function (db,p__12153){
var vec__12154 = p__12153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"employees","employees",1002695450).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = new cljs.core.Keyword(null,"services","services",970478783).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(and__4120__auto____$2)){
return new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
return false;
}
});})(G__12150_12251))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12150_12251,G__12151_12252) : re_frame.core.reg_sub.call(null,G__12150_12251,G__12151_12252));
var G__12161_12256 = new cljs.core.Keyword(null,"showing","showing",798009604);
var G__12162_12257 = ((function (G__12161_12256){
return (function (db,_){
return new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(db);
});})(G__12161_12256))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12161_12256,G__12162_12257) : re_frame.core.reg_sub.call(null,G__12161_12256,G__12162_12257));
barber.subs.sorted_todos = (function barber$subs$sorted_todos(db,_){
return new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(db);
});
var G__12168_12261 = new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733);
var G__12169_12262 = barber.subs.sorted_todos;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12168_12261,G__12169_12262) : re_frame.core.reg_sub.call(null,G__12168_12261,G__12169_12262));
var G__12172_12264 = new cljs.core.Keyword(null,"todos","todos",630308868);
var G__12173_12265 = ((function (G__12172_12264){
return (function (query_v,_){
var G__12177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12177) : re_frame.core.subscribe.call(null,G__12177));
});})(G__12172_12264))
;
var G__12174_12266 = ((function (G__12172_12264,G__12173_12265){
return (function (sorted_todos,query_v,_){
return cljs.core.vals(sorted_todos);
});})(G__12172_12264,G__12173_12265))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12172_12264,G__12173_12265,G__12174_12266) : re_frame.core.reg_sub.call(null,G__12172_12264,G__12173_12265,G__12174_12266));
var G__12182_12268 = new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253);
var G__12183_12269 = ((function (G__12182_12268){
return (function (query_v,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12186) : re_frame.core.subscribe.call(null,G__12186));
})(),(function (){var G__12188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing","showing",798009604)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12188) : re_frame.core.subscribe.call(null,G__12188));
})()], null);
});})(G__12182_12268))
;
var G__12184_12270 = ((function (G__12182_12268,G__12183_12269){
return (function (p__12190,_){
var vec__12191 = p__12190;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191,(0),null);
var showing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191,(1),null);
var filter_fn = (function (){var G__12195 = showing;
var G__12195__$1 = (((G__12195 instanceof cljs.core.Keyword))?G__12195.fqn:null);
switch (G__12195__$1) {
case "active":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12195__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,todos);
});})(G__12182_12268,G__12183_12269))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12182_12268,G__12183_12269,G__12184_12270) : re_frame.core.reg_sub.call(null,G__12182_12268,G__12183_12269,G__12184_12270));
var G__12201_12278 = new cljs.core.Keyword(null,"all-complete?","all-complete?",85738111);
var G__12202_12279 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__12203_12280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__12204_12281 = ((function (G__12201_12278,G__12202_12279,G__12203_12280){
return (function (todos,_){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),todos);
});})(G__12201_12278,G__12202_12279,G__12203_12280))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__12201_12278,G__12202_12279,G__12203_12280,G__12204_12281) : re_frame.core.reg_sub.call(null,G__12201_12278,G__12202_12279,G__12203_12280,G__12204_12281));
var G__12209_12288 = new cljs.core.Keyword(null,"completed-count","completed-count",484261033);
var G__12210_12289 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__12211_12290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__12212_12291 = ((function (G__12209_12288,G__12210_12289,G__12211_12290){
return (function (todos,_){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),todos));
});})(G__12209_12288,G__12210_12289,G__12211_12290))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__12209_12288,G__12210_12289,G__12211_12290,G__12212_12291) : re_frame.core.reg_sub.call(null,G__12209_12288,G__12210_12289,G__12211_12290,G__12212_12291));
var G__12217_12295 = new cljs.core.Keyword(null,"footer-counts","footer-counts",179032732);
var G__12218_12296 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__12219_12297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__12220_12298 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__12221_12299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed-count","completed-count",484261033)], null);
var G__12222_12300 = ((function (G__12217_12295,G__12218_12296,G__12219_12297,G__12220_12298,G__12221_12299){
return (function (p__12224,_){
var vec__12228 = p__12224;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228,(0),null);
var completed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(todos) - completed),completed], null);
});})(G__12217_12295,G__12218_12296,G__12219_12297,G__12220_12298,G__12221_12299))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__12217_12295,G__12218_12296,G__12219_12297,G__12220_12298,G__12221_12299,G__12222_12300) : re_frame.core.reg_sub.call(null,G__12217_12295,G__12218_12296,G__12219_12297,G__12220_12298,G__12221_12299,G__12222_12300));

//# sourceMappingURL=barber.subs.js.map
