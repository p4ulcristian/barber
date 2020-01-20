goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__,req){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__,req){
return (function (state_64789){
var state_val_64790 = (state_64789[(1)]);
if((state_val_64790 === (7))){
var state_64789__$1 = state_64789;
var statearr_64791_65047 = state_64789__$1;
(statearr_64791_65047[(2)] = false);

(statearr_64791_65047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (1))){
var state_64789__$1 = state_64789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64789__$1,(2),req);
} else {
if((state_val_64790 === (4))){
var inst_64747 = (state_64789[(7)]);
var inst_64754 = (inst_64747 == null);
var inst_64755 = cljs.core.not(inst_64754);
var state_64789__$1 = state_64789;
if(inst_64755){
var statearr_64797_65048 = state_64789__$1;
(statearr_64797_65048[(1)] = (6));

} else {
var statearr_64798_65049 = state_64789__$1;
(statearr_64798_65049[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (15))){
var state_64789__$1 = state_64789;
var statearr_64799_65050 = state_64789__$1;
(statearr_64799_65050[(2)] = null);

(statearr_64799_65050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (13))){
var inst_64747 = (state_64789[(7)]);
var state_64789__$1 = state_64789;
var statearr_64801_65052 = state_64789__$1;
(statearr_64801_65052[(2)] = inst_64747);

(statearr_64801_65052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (6))){
var inst_64747 = (state_64789[(7)]);
var inst_64757 = inst_64747.cljs$lang$protocol_mask$partition0$;
var inst_64758 = (inst_64757 & (64));
var inst_64759 = inst_64747.cljs$core$ISeq$;
var inst_64760 = (cljs.core.PROTOCOL_SENTINEL === inst_64759);
var inst_64761 = ((inst_64758) || (inst_64760));
var state_64789__$1 = state_64789;
if(cljs.core.truth_(inst_64761)){
var statearr_64802_65054 = state_64789__$1;
(statearr_64802_65054[(1)] = (9));

} else {
var statearr_64803_65055 = state_64789__$1;
(statearr_64803_65055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (17))){
var inst_64785 = (state_64789[(2)]);
var state_64789__$1 = state_64789;
var statearr_64804_65056 = state_64789__$1;
(statearr_64804_65056[(2)] = inst_64785);

(statearr_64804_65056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (3))){
var state_64789__$1 = state_64789;
var statearr_64805_65058 = state_64789__$1;
(statearr_64805_65058[(2)] = null);

(statearr_64805_65058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (12))){
var inst_64747 = (state_64789[(7)]);
var inst_64770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64747);
var state_64789__$1 = state_64789;
var statearr_64822_65059 = state_64789__$1;
(statearr_64822_65059[(2)] = inst_64770);

(statearr_64822_65059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (2))){
var inst_64747 = (state_64789[(7)]);
var inst_64747__$1 = (state_64789[(2)]);
var inst_64748 = (inst_64747__$1 == null);
var state_64789__$1 = (function (){var statearr_64823 = state_64789;
(statearr_64823[(7)] = inst_64747__$1);

return statearr_64823;
})();
if(cljs.core.truth_(inst_64748)){
var statearr_64824_65060 = state_64789__$1;
(statearr_64824_65060[(1)] = (3));

} else {
var statearr_64825_65061 = state_64789__$1;
(statearr_64825_65061[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (11))){
var inst_64765 = (state_64789[(2)]);
var state_64789__$1 = state_64789;
var statearr_64826_65062 = state_64789__$1;
(statearr_64826_65062[(2)] = inst_64765);

(statearr_64826_65062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (9))){
var state_64789__$1 = state_64789;
var statearr_64827_65064 = state_64789__$1;
(statearr_64827_65064[(2)] = true);

(statearr_64827_65064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (5))){
var inst_64787 = (state_64789[(2)]);
var state_64789__$1 = state_64789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64789__$1,inst_64787);
} else {
if((state_val_64790 === (14))){
var inst_64773 = (state_64789[(8)]);
var inst_64773__$1 = (state_64789[(2)]);
var inst_64779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64773__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_64780 = (inst_64779 === (0));
var state_64789__$1 = (function (){var statearr_64832 = state_64789;
(statearr_64832[(8)] = inst_64773__$1);

return statearr_64832;
})();
if(cljs.core.truth_(inst_64780)){
var statearr_64834_65065 = state_64789__$1;
(statearr_64834_65065[(1)] = (15));

} else {
var statearr_64841_65066 = state_64789__$1;
(statearr_64841_65066[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (16))){
var inst_64773 = (state_64789[(8)]);
var inst_64783 = console.warn("file open failed",inst_64773);
var state_64789__$1 = state_64789;
var statearr_64850_65067 = state_64789__$1;
(statearr_64850_65067[(2)] = inst_64783);

(statearr_64850_65067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (10))){
var state_64789__$1 = state_64789;
var statearr_64851_65068 = state_64789__$1;
(statearr_64851_65068[(2)] = false);

(statearr_64851_65068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64790 === (8))){
var inst_64768 = (state_64789[(2)]);
var state_64789__$1 = state_64789;
if(cljs.core.truth_(inst_64768)){
var statearr_64852_65069 = state_64789__$1;
(statearr_64852_65069[(1)] = (12));

} else {
var statearr_64853_65070 = state_64789__$1;
(statearr_64853_65070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__60108__auto__,req))
;
return ((function (switch__59851__auto__,c__60108__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____0 = (function (){
var statearr_64858 = [null,null,null,null,null,null,null,null,null];
(statearr_64858[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__);

(statearr_64858[(1)] = (1));

return statearr_64858;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____1 = (function (state_64789){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_64789);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e64861){if((e64861 instanceof Object)){
var ex__59855__auto__ = e64861;
var statearr_64866_65071 = state_64789;
(statearr_64866_65071[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65072 = state_64789;
state_64789 = G__65072;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__ = function(state_64789){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____1.call(this,state_64789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__,req))
})();
var state__60110__auto__ = (function (){var statearr_64874 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_64874[(6)] = c__60108__auto__);

return statearr_64874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__,req))
);

return c__60108__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__64876 = arguments.length;
switch (G__64876) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___65074 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___65074 == null)){
} else {
var x_65075 = temp__5739__auto___65074;
shadow.dom.remove(x_65075);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__,el,container_el,temp__5739__auto__){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__,el,container_el,temp__5739__auto__){
return (function (state_64900){
var state_val_64901 = (state_64900[(1)]);
if((state_val_64901 === (1))){
var inst_64884 = cljs.core.async.timeout((250));
var state_64900__$1 = state_64900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64900__$1,(2),inst_64884);
} else {
if((state_val_64901 === (2))){
var inst_64886 = (state_64900[(2)]);
var inst_64891 = [el];
var inst_64892 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_64893 = [inst_64892];
var inst_64894 = cljs.core.PersistentHashMap.fromArrays(inst_64891,inst_64893);
var inst_64895 = shadow.animate.start((250),inst_64894);
var state_64900__$1 = (function (){var statearr_64910 = state_64900;
(statearr_64910[(7)] = inst_64886);

return statearr_64910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64900__$1,(3),inst_64895);
} else {
if((state_val_64901 === (3))){
var inst_64897 = (state_64900[(2)]);
var inst_64898 = shadow.dom.remove(container_el);
var state_64900__$1 = (function (){var statearr_64920 = state_64900;
(statearr_64920[(8)] = inst_64897);

return statearr_64920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64900__$1,inst_64898);
} else {
return null;
}
}
}
});})(c__60108__auto__,el,container_el,temp__5739__auto__))
;
return ((function (switch__59851__auto__,c__60108__auto__,el,container_el,temp__5739__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____0 = (function (){
var statearr_64922 = [null,null,null,null,null,null,null,null,null];
(statearr_64922[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__);

(statearr_64922[(1)] = (1));

return statearr_64922;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____1 = (function (state_64900){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_64900);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e64923){if((e64923 instanceof Object)){
var ex__59855__auto__ = e64923;
var statearr_64925_65076 = state_64900;
(statearr_64925_65076[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65077 = state_64900;
state_64900 = G__65077;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__ = function(state_64900){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____1.call(this,state_64900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__,el,container_el,temp__5739__auto__))
})();
var state__60110__auto__ = (function (){var statearr_64934 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_64934[(6)] = c__60108__auto__);

return statearr_64934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__,el,container_el,temp__5739__auto__))
);

return c__60108__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__64937(s__64938){
return (new cljs.core.LazySeq(null,(function (){
var s__64938__$1 = s__64938;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64938__$1);
if(temp__5735__auto__){
var s__64938__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64938__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64938__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64940 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64939 = (0);
while(true){
if((i__64939 < size__4522__auto__)){
var vec__64947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__64939);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64947,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64947,(1),null);
cljs.core.chunk_append(b__64940,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__64951 = "%4d | %s";
var G__64952 = (((1) + idx) + start_idx);
var G__64953 = text;
return goog.string.format(G__64951,G__64952,G__64953);
})()], null));

var G__65078 = (i__64939 + (1));
i__64939 = G__65078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64940),shadow$cljs$devtools$client$hud$source_line_html_$_iter__64937(cljs.core.chunk_rest(s__64938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64940),null);
}
} else {
var vec__64962 = cljs.core.first(s__64938__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64962,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64962,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__64969 = "%4d | %s";
var G__64970 = (((1) + idx) + start_idx);
var G__64971 = text;
return goog.string.format(G__64969,G__64970,G__64971);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__64937(cljs.core.rest(s__64938__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__64978 = arguments.length;
switch (G__64978) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__64994){
var map__64996 = p__64994;
var map__64996__$1 = (((((!((map__64996 == null))))?(((((map__64996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64996):map__64996);
var warning = map__64996__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__64996,map__64996__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__64996,map__64996__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__65011){
var map__65012 = p__65011;
var map__65012__$1 = (((((!((map__65012 == null))))?(((((map__65012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65012):map__65012);
var warning = map__65012__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65012__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__65018 = source_excerpt;
var map__65018__$1 = (((((!((map__65018 == null))))?(((((map__65018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65018):map__65018);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__65022){
var map__65023 = p__65022;
var map__65023__$1 = (((((!((map__65023 == null))))?(((((map__65023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65023):map__65023);
var msg = map__65023__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65023__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65023__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__65025 = info;
var map__65025__$1 = (((((!((map__65025 == null))))?(((((map__65025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65025):map__65025);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65025__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__65025,map__65025__$1,sources,map__65023,map__65023__$1,msg,type,info){
return (function (p1__65021_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__65021_SHARP_));
});})(map__65025,map__65025__$1,sources,map__65023,map__65023__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__65027(s__65028){
return (new cljs.core.LazySeq(null,((function (map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info){
return (function (){
var s__65028__$1 = s__65028;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65028__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__65033 = cljs.core.first(xs__6292__auto__);
var map__65033__$1 = (((((!((map__65033 == null))))?(((((map__65033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65033):map__65033);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65033__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__65028__$1,map__65033,map__65033__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__65027_$_iter__65029(s__65030){
return (new cljs.core.LazySeq(null,((function (s__65028__$1,map__65033,map__65033__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info){
return (function (){
var s__65030__$1 = s__65030;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65030__$1);
if(temp__5735__auto____$1){
var s__65030__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65030__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65030__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65032 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65031 = (0);
while(true){
if((i__65031 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__65031);
cljs.core.chunk_append(b__65032,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__65080 = (i__65031 + (1));
i__65031 = G__65080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65032),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__65027_$_iter__65029(cljs.core.chunk_rest(s__65030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65032),null);
}
} else {
var warning = cljs.core.first(s__65030__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__65027_$_iter__65029(cljs.core.rest(s__65030__$2)));
}
} else {
return null;
}
break;
}
});})(s__65028__$1,map__65033,map__65033__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info))
,null,null));
});})(s__65028__$1,map__65033,map__65033__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__65027(cljs.core.rest(s__65028__$1)));
} else {
var G__65081 = cljs.core.rest(s__65028__$1);
s__65028__$1 = G__65081;
continue;
}
} else {
return null;
}
break;
}
});})(map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info))
,null,null));
});})(map__65025,map__65025__$1,sources,sources_with_warnings,map__65023,map__65023__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__65038){
var map__65045 = p__65038;
var map__65045__$1 = (((((!((map__65045 == null))))?(((((map__65045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65045):map__65045);
var msg = map__65045__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65045__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
