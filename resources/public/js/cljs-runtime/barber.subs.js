goog.provide('barber.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__71703_71821 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__71704_71822 = ((function (G__71703_71821){
return (function (db,p__71706){
var vec__71718 = p__71706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71718,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71718,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,the_key);
});})(G__71703_71821))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71703_71821,G__71704_71822) : re_frame.core.reg_sub.call(null,G__71703_71821,G__71704_71822));
var G__71721_71823 = new cljs.core.Keyword(null,"selected-date-and-day","selected-date-and-day",1409782707);
var G__71722_71824 = ((function (G__71721_71823){
return (function (db,p__71723){
var vec__71724 = p__71723;
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"selected-day","selected-day",1859078310))],null));
});})(G__71721_71823))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71721_71823,G__71722_71824) : re_frame.core.reg_sub.call(null,G__71721_71823,G__71722_71824));
var G__71727_71826 = new cljs.core.Keyword(null,"calendar-data-loaded?","calendar-data-loaded?",-1699413915);
var G__71728_71827 = ((function (G__71727_71826){
return (function (db,p__71729){
var vec__71730 = p__71729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71730,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71730,(1),null);
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
});})(G__71727_71826))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71727_71826,G__71728_71827) : re_frame.core.reg_sub.call(null,G__71727_71826,G__71728_71827));
var G__71738_71844 = new cljs.core.Keyword(null,"showing","showing",798009604);
var G__71739_71845 = ((function (G__71738_71844){
return (function (db,_){
return new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(db);
});})(G__71738_71844))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71738_71844,G__71739_71845) : re_frame.core.reg_sub.call(null,G__71738_71844,G__71739_71845));
barber.subs.sorted_todos = (function barber$subs$sorted_todos(db,_){
return new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(db);
});
var G__71755_71846 = new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733);
var G__71756_71847 = barber.subs.sorted_todos;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__71755_71846,G__71756_71847) : re_frame.core.reg_sub.call(null,G__71755_71846,G__71756_71847));
var G__71764_71849 = new cljs.core.Keyword(null,"todos","todos",630308868);
var G__71765_71850 = ((function (G__71764_71849){
return (function (query_v,_){
var G__71767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71767) : re_frame.core.subscribe.call(null,G__71767));
});})(G__71764_71849))
;
var G__71766_71851 = ((function (G__71764_71849,G__71765_71850){
return (function (sorted_todos,query_v,_){
return cljs.core.vals(sorted_todos);
});})(G__71764_71849,G__71765_71850))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__71764_71849,G__71765_71850,G__71766_71851) : re_frame.core.reg_sub.call(null,G__71764_71849,G__71765_71850,G__71766_71851));
var G__71773_71858 = new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253);
var G__71774_71859 = ((function (G__71773_71858){
return (function (query_v,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71786) : re_frame.core.subscribe.call(null,G__71786));
})(),(function (){var G__71787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing","showing",798009604)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71787) : re_frame.core.subscribe.call(null,G__71787));
})()], null);
});})(G__71773_71858))
;
var G__71775_71860 = ((function (G__71773_71858,G__71774_71859){
return (function (p__71789,_){
var vec__71790 = p__71789;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71790,(0),null);
var showing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71790,(1),null);
var filter_fn = (function (){var G__71794 = showing;
var G__71794__$1 = (((G__71794 instanceof cljs.core.Keyword))?G__71794.fqn:null);
switch (G__71794__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71794__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,todos);
});})(G__71773_71858,G__71774_71859))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__71773_71858,G__71774_71859,G__71775_71860) : re_frame.core.reg_sub.call(null,G__71773_71858,G__71774_71859,G__71775_71860));
var G__71799_71865 = new cljs.core.Keyword(null,"all-complete?","all-complete?",85738111);
var G__71800_71866 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71801_71867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__71802_71868 = ((function (G__71799_71865,G__71800_71866,G__71801_71867){
return (function (todos,_){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),todos);
});})(G__71799_71865,G__71800_71866,G__71801_71867))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__71799_71865,G__71800_71866,G__71801_71867,G__71802_71868) : re_frame.core.reg_sub.call(null,G__71799_71865,G__71800_71866,G__71801_71867,G__71802_71868));
var G__71803_71872 = new cljs.core.Keyword(null,"completed-count","completed-count",484261033);
var G__71804_71873 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71805_71874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__71806_71875 = ((function (G__71803_71872,G__71804_71873,G__71805_71874){
return (function (todos,_){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),todos));
});})(G__71803_71872,G__71804_71873,G__71805_71874))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__71803_71872,G__71804_71873,G__71805_71874,G__71806_71875) : re_frame.core.reg_sub.call(null,G__71803_71872,G__71804_71873,G__71805_71874,G__71806_71875));
var G__71808_71877 = new cljs.core.Keyword(null,"footer-counts","footer-counts",179032732);
var G__71809_71878 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71810_71879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var G__71811_71880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__71812_71881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed-count","completed-count",484261033)], null);
var G__71813_71882 = ((function (G__71808_71877,G__71809_71878,G__71810_71879,G__71811_71880,G__71812_71881){
return (function (p__71816,_){
var vec__71817 = p__71816;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71817,(0),null);
var completed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(todos) - completed),completed], null);
});})(G__71808_71877,G__71809_71878,G__71810_71879,G__71811_71880,G__71812_71881))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__71808_71877,G__71809_71878,G__71810_71879,G__71811_71880,G__71812_71881,G__71813_71882) : re_frame.core.reg_sub.call(null,G__71808_71877,G__71809_71878,G__71810_71879,G__71811_71880,G__71812_71881,G__71813_71882));

//# sourceMappingURL=barber.subs.js.map
