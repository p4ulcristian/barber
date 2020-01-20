goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65274 = arguments.length;
var i__4731__auto___65275 = (0);
while(true){
if((i__4731__auto___65275 < len__4730__auto___65274)){
args__4736__auto__.push((arguments[i__4731__auto___65275]));

var G__65276 = (i__4731__auto___65275 + (1));
i__4731__auto___65275 = G__65276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65082){
var G__65083 = cljs.core.first(seq65082);
var seq65082__$1 = cljs.core.next(seq65082);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65083,seq65082__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__65091){
var map__65092 = p__65091;
var map__65092__$1 = (((((!((map__65092 == null))))?(((((map__65092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65092):map__65092);
var src = map__65092__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65092__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65092__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65098 = cljs.core.seq(sources);
var chunk__65099 = null;
var count__65100 = (0);
var i__65101 = (0);
while(true){
if((i__65101 < count__65100)){
var map__65112 = chunk__65099.cljs$core$IIndexed$_nth$arity$2(null,i__65101);
var map__65112__$1 = (((((!((map__65112 == null))))?(((((map__65112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65112):map__65112);
var src = map__65112__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e65114){var e_65281 = e65114;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65281);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65281.message)].join('')));
}

var G__65282 = seq__65098;
var G__65283 = chunk__65099;
var G__65284 = count__65100;
var G__65285 = (i__65101 + (1));
seq__65098 = G__65282;
chunk__65099 = G__65283;
count__65100 = G__65284;
i__65101 = G__65285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65098);
if(temp__5735__auto__){
var seq__65098__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65098__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65098__$1);
var G__65287 = cljs.core.chunk_rest(seq__65098__$1);
var G__65288 = c__4550__auto__;
var G__65289 = cljs.core.count(c__4550__auto__);
var G__65290 = (0);
seq__65098 = G__65287;
chunk__65099 = G__65288;
count__65100 = G__65289;
i__65101 = G__65290;
continue;
} else {
var map__65115 = cljs.core.first(seq__65098__$1);
var map__65115__$1 = (((((!((map__65115 == null))))?(((((map__65115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65115):map__65115);
var src = map__65115__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e65117){var e_65292 = e65117;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65292);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65292.message)].join('')));
}

var G__65293 = cljs.core.next(seq__65098__$1);
var G__65294 = null;
var G__65295 = (0);
var G__65296 = (0);
seq__65098 = G__65293;
chunk__65099 = G__65294;
count__65100 = G__65295;
i__65101 = G__65296;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__65118 = cljs.core.seq(js_requires);
var chunk__65119 = null;
var count__65120 = (0);
var i__65121 = (0);
while(true){
if((i__65121 < count__65120)){
var js_ns = chunk__65119.cljs$core$IIndexed$_nth$arity$2(null,i__65121);
var require_str_65298 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65298);


var G__65299 = seq__65118;
var G__65300 = chunk__65119;
var G__65301 = count__65120;
var G__65302 = (i__65121 + (1));
seq__65118 = G__65299;
chunk__65119 = G__65300;
count__65120 = G__65301;
i__65121 = G__65302;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65118);
if(temp__5735__auto__){
var seq__65118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65118__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65118__$1);
var G__65303 = cljs.core.chunk_rest(seq__65118__$1);
var G__65304 = c__4550__auto__;
var G__65305 = cljs.core.count(c__4550__auto__);
var G__65306 = (0);
seq__65118 = G__65303;
chunk__65119 = G__65304;
count__65120 = G__65305;
i__65121 = G__65306;
continue;
} else {
var js_ns = cljs.core.first(seq__65118__$1);
var require_str_65307 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65307);


var G__65308 = cljs.core.next(seq__65118__$1);
var G__65309 = null;
var G__65310 = (0);
var G__65311 = (0);
seq__65118 = G__65308;
chunk__65119 = G__65309;
count__65120 = G__65310;
i__65121 = G__65311;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__65122 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__65122) : callback.call(null,G__65122));
} else {
var G__65123 = shadow.cljs.devtools.client.env.files_url();
var G__65124 = ((function (G__65123){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__65123))
;
var G__65125 = "POST";
var G__65126 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__65127 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__65123,G__65124,G__65125,G__65126,G__65127);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__65129){
var map__65130 = p__65129;
var map__65130__$1 = (((((!((map__65130 == null))))?(((((map__65130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65130):map__65130);
var msg = map__65130__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__65132 = info;
var map__65132__$1 = (((((!((map__65132 == null))))?(((((map__65132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65132):map__65132);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65132__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65132__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65134(s__65135){
return (new cljs.core.LazySeq(null,((function (map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info){
return (function (){
var s__65135__$1 = s__65135;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65135__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__65140 = cljs.core.first(xs__6292__auto__);
var map__65140__$1 = (((((!((map__65140 == null))))?(((((map__65140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65140):map__65140);
var src = map__65140__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__65135__$1,map__65140,map__65140__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65134_$_iter__65136(s__65137){
return (new cljs.core.LazySeq(null,((function (s__65135__$1,map__65140,map__65140__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info){
return (function (){
var s__65137__$1 = s__65137;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65137__$1);
if(temp__5735__auto____$1){
var s__65137__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65137__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65137__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65139 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65138 = (0);
while(true){
if((i__65138 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__65138);
cljs.core.chunk_append(b__65139,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65316 = (i__65138 + (1));
i__65138 = G__65316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65139),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65134_$_iter__65136(cljs.core.chunk_rest(s__65137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65139),null);
}
} else {
var warning = cljs.core.first(s__65137__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65134_$_iter__65136(cljs.core.rest(s__65137__$2)));
}
} else {
return null;
}
break;
}
});})(s__65135__$1,map__65140,map__65140__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info))
,null,null));
});})(s__65135__$1,map__65140,map__65140__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65134(cljs.core.rest(s__65135__$1)));
} else {
var G__65318 = cljs.core.rest(s__65135__$1);
s__65135__$1 = G__65318;
continue;
}
} else {
var G__65319 = cljs.core.rest(s__65135__$1);
s__65135__$1 = G__65319;
continue;
}
} else {
return null;
}
break;
}
});})(map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info))
,null,null));
});})(map__65132,map__65132__$1,sources,compiled,map__65130,map__65130__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__65143_65320 = cljs.core.seq(warnings);
var chunk__65144_65321 = null;
var count__65145_65322 = (0);
var i__65146_65323 = (0);
while(true){
if((i__65146_65323 < count__65145_65322)){
var map__65151_65324 = chunk__65144_65321.cljs$core$IIndexed$_nth$arity$2(null,i__65146_65323);
var map__65151_65325__$1 = (((((!((map__65151_65324 == null))))?(((((map__65151_65324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65151_65324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65151_65324):map__65151_65324);
var w_65326 = map__65151_65325__$1;
var msg_65327__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151_65325__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151_65325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151_65325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151_65325__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65330)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65328),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65329),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65327__$1)].join(''));


var G__65332 = seq__65143_65320;
var G__65333 = chunk__65144_65321;
var G__65334 = count__65145_65322;
var G__65335 = (i__65146_65323 + (1));
seq__65143_65320 = G__65332;
chunk__65144_65321 = G__65333;
count__65145_65322 = G__65334;
i__65146_65323 = G__65335;
continue;
} else {
var temp__5735__auto___65336 = cljs.core.seq(seq__65143_65320);
if(temp__5735__auto___65336){
var seq__65143_65337__$1 = temp__5735__auto___65336;
if(cljs.core.chunked_seq_QMARK_(seq__65143_65337__$1)){
var c__4550__auto___65338 = cljs.core.chunk_first(seq__65143_65337__$1);
var G__65339 = cljs.core.chunk_rest(seq__65143_65337__$1);
var G__65340 = c__4550__auto___65338;
var G__65341 = cljs.core.count(c__4550__auto___65338);
var G__65342 = (0);
seq__65143_65320 = G__65339;
chunk__65144_65321 = G__65340;
count__65145_65322 = G__65341;
i__65146_65323 = G__65342;
continue;
} else {
var map__65153_65344 = cljs.core.first(seq__65143_65337__$1);
var map__65153_65345__$1 = (((((!((map__65153_65344 == null))))?(((((map__65153_65344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65153_65344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65153_65344):map__65153_65344);
var w_65346 = map__65153_65345__$1;
var msg_65347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153_65345__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153_65345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153_65345__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153_65345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65350)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65348),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65349),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65347__$1)].join(''));


var G__65351 = cljs.core.next(seq__65143_65337__$1);
var G__65352 = null;
var G__65353 = (0);
var G__65354 = (0);
seq__65143_65320 = G__65351;
chunk__65144_65321 = G__65352;
count__65145_65322 = G__65353;
i__65146_65323 = G__65354;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info){
return (function (p__65155){
var map__65156 = p__65155;
var map__65156__$1 = (((((!((map__65156 == null))))?(((((map__65156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65156):map__65156);
var src = map__65156__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65156__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65156__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info){
return (function (p__65158){
var map__65159 = p__65158;
var map__65159__$1 = (((((!((map__65159 == null))))?(((((map__65159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65159):map__65159);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65159__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info){
return (function (p__65161){
var map__65162 = p__65161;
var map__65162__$1 = (((((!((map__65162 == null))))?(((((map__65162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65162):map__65162);
var rc = map__65162__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65162__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
});})(map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info){
return (function (p1__65128_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65128_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__65132,map__65132__$1,sources,compiled,warnings,map__65130,map__65130__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__65166){
var map__65168 = p__65166;
var map__65168__$1 = (((((!((map__65168 == null))))?(((((map__65168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65168):map__65168);
var msg = map__65168__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65168__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__65170 = cljs.core.seq(updates);
var chunk__65172 = null;
var count__65173 = (0);
var i__65174 = (0);
while(true){
if((i__65174 < count__65173)){
var path = chunk__65172.cljs$core$IIndexed$_nth$arity$2(null,i__65174);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65206_65359 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65209_65360 = null;
var count__65210_65361 = (0);
var i__65211_65362 = (0);
while(true){
if((i__65211_65362 < count__65210_65361)){
var node_65363 = chunk__65209_65360.cljs$core$IIndexed$_nth$arity$2(null,i__65211_65362);
var path_match_65364 = shadow.cljs.devtools.client.browser.match_paths(node_65363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65364)){
var new_link_65365 = (function (){var G__65218 = node_65363.cloneNode(true);
G__65218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65218;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65364], 0));

goog.dom.insertSiblingAfter(new_link_65365,node_65363);

goog.dom.removeNode(node_65363);


var G__65366 = seq__65206_65359;
var G__65367 = chunk__65209_65360;
var G__65368 = count__65210_65361;
var G__65369 = (i__65211_65362 + (1));
seq__65206_65359 = G__65366;
chunk__65209_65360 = G__65367;
count__65210_65361 = G__65368;
i__65211_65362 = G__65369;
continue;
} else {
var G__65370 = seq__65206_65359;
var G__65371 = chunk__65209_65360;
var G__65372 = count__65210_65361;
var G__65373 = (i__65211_65362 + (1));
seq__65206_65359 = G__65370;
chunk__65209_65360 = G__65371;
count__65210_65361 = G__65372;
i__65211_65362 = G__65373;
continue;
}
} else {
var temp__5735__auto___65374 = cljs.core.seq(seq__65206_65359);
if(temp__5735__auto___65374){
var seq__65206_65375__$1 = temp__5735__auto___65374;
if(cljs.core.chunked_seq_QMARK_(seq__65206_65375__$1)){
var c__4550__auto___65376 = cljs.core.chunk_first(seq__65206_65375__$1);
var G__65377 = cljs.core.chunk_rest(seq__65206_65375__$1);
var G__65378 = c__4550__auto___65376;
var G__65379 = cljs.core.count(c__4550__auto___65376);
var G__65380 = (0);
seq__65206_65359 = G__65377;
chunk__65209_65360 = G__65378;
count__65210_65361 = G__65379;
i__65211_65362 = G__65380;
continue;
} else {
var node_65381 = cljs.core.first(seq__65206_65375__$1);
var path_match_65382 = shadow.cljs.devtools.client.browser.match_paths(node_65381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65382)){
var new_link_65383 = (function (){var G__65219 = node_65381.cloneNode(true);
G__65219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65219;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65382], 0));

goog.dom.insertSiblingAfter(new_link_65383,node_65381);

goog.dom.removeNode(node_65381);


var G__65385 = cljs.core.next(seq__65206_65375__$1);
var G__65386 = null;
var G__65387 = (0);
var G__65388 = (0);
seq__65206_65359 = G__65385;
chunk__65209_65360 = G__65386;
count__65210_65361 = G__65387;
i__65211_65362 = G__65388;
continue;
} else {
var G__65389 = cljs.core.next(seq__65206_65375__$1);
var G__65390 = null;
var G__65391 = (0);
var G__65392 = (0);
seq__65206_65359 = G__65389;
chunk__65209_65360 = G__65390;
count__65210_65361 = G__65391;
i__65211_65362 = G__65392;
continue;
}
}
} else {
}
}
break;
}


var G__65393 = seq__65170;
var G__65394 = chunk__65172;
var G__65395 = count__65173;
var G__65396 = (i__65174 + (1));
seq__65170 = G__65393;
chunk__65172 = G__65394;
count__65173 = G__65395;
i__65174 = G__65396;
continue;
} else {
var G__65397 = seq__65170;
var G__65398 = chunk__65172;
var G__65399 = count__65173;
var G__65400 = (i__65174 + (1));
seq__65170 = G__65397;
chunk__65172 = G__65398;
count__65173 = G__65399;
i__65174 = G__65400;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65170);
if(temp__5735__auto__){
var seq__65170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65170__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65170__$1);
var G__65401 = cljs.core.chunk_rest(seq__65170__$1);
var G__65402 = c__4550__auto__;
var G__65403 = cljs.core.count(c__4550__auto__);
var G__65404 = (0);
seq__65170 = G__65401;
chunk__65172 = G__65402;
count__65173 = G__65403;
i__65174 = G__65404;
continue;
} else {
var path = cljs.core.first(seq__65170__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65221_65405 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65224_65406 = null;
var count__65225_65407 = (0);
var i__65226_65408 = (0);
while(true){
if((i__65226_65408 < count__65225_65407)){
var node_65409 = chunk__65224_65406.cljs$core$IIndexed$_nth$arity$2(null,i__65226_65408);
var path_match_65410 = shadow.cljs.devtools.client.browser.match_paths(node_65409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65410)){
var new_link_65412 = (function (){var G__65232 = node_65409.cloneNode(true);
G__65232.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65232;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65410], 0));

goog.dom.insertSiblingAfter(new_link_65412,node_65409);

goog.dom.removeNode(node_65409);


var G__65413 = seq__65221_65405;
var G__65414 = chunk__65224_65406;
var G__65415 = count__65225_65407;
var G__65416 = (i__65226_65408 + (1));
seq__65221_65405 = G__65413;
chunk__65224_65406 = G__65414;
count__65225_65407 = G__65415;
i__65226_65408 = G__65416;
continue;
} else {
var G__65417 = seq__65221_65405;
var G__65418 = chunk__65224_65406;
var G__65419 = count__65225_65407;
var G__65420 = (i__65226_65408 + (1));
seq__65221_65405 = G__65417;
chunk__65224_65406 = G__65418;
count__65225_65407 = G__65419;
i__65226_65408 = G__65420;
continue;
}
} else {
var temp__5735__auto___65421__$1 = cljs.core.seq(seq__65221_65405);
if(temp__5735__auto___65421__$1){
var seq__65221_65422__$1 = temp__5735__auto___65421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65221_65422__$1)){
var c__4550__auto___65423 = cljs.core.chunk_first(seq__65221_65422__$1);
var G__65424 = cljs.core.chunk_rest(seq__65221_65422__$1);
var G__65425 = c__4550__auto___65423;
var G__65426 = cljs.core.count(c__4550__auto___65423);
var G__65427 = (0);
seq__65221_65405 = G__65424;
chunk__65224_65406 = G__65425;
count__65225_65407 = G__65426;
i__65226_65408 = G__65427;
continue;
} else {
var node_65429 = cljs.core.first(seq__65221_65422__$1);
var path_match_65430 = shadow.cljs.devtools.client.browser.match_paths(node_65429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65430)){
var new_link_65431 = (function (){var G__65234 = node_65429.cloneNode(true);
G__65234.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65234;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65430], 0));

goog.dom.insertSiblingAfter(new_link_65431,node_65429);

goog.dom.removeNode(node_65429);


var G__65432 = cljs.core.next(seq__65221_65422__$1);
var G__65433 = null;
var G__65434 = (0);
var G__65435 = (0);
seq__65221_65405 = G__65432;
chunk__65224_65406 = G__65433;
count__65225_65407 = G__65434;
i__65226_65408 = G__65435;
continue;
} else {
var G__65437 = cljs.core.next(seq__65221_65422__$1);
var G__65438 = null;
var G__65439 = (0);
var G__65440 = (0);
seq__65221_65405 = G__65437;
chunk__65224_65406 = G__65438;
count__65225_65407 = G__65439;
i__65226_65408 = G__65440;
continue;
}
}
} else {
}
}
break;
}


var G__65442 = cljs.core.next(seq__65170__$1);
var G__65443 = null;
var G__65444 = (0);
var G__65445 = (0);
seq__65170 = G__65442;
chunk__65172 = G__65443;
count__65173 = G__65444;
i__65174 = G__65445;
continue;
} else {
var G__65446 = cljs.core.next(seq__65170__$1);
var G__65447 = null;
var G__65448 = (0);
var G__65449 = (0);
seq__65170 = G__65446;
chunk__65172 = G__65447;
count__65173 = G__65448;
i__65174 = G__65449;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__65237){
var map__65238 = p__65237;
var map__65238__$1 = (((((!((map__65238 == null))))?(((((map__65238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65238):map__65238);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65238__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__65238,map__65238__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__65238,map__65238__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__65240,done){
var map__65242 = p__65240;
var map__65242__$1 = (((((!((map__65242 == null))))?(((((map__65242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65242):map__65242);
var msg = map__65242__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__65242,map__65242__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__65244){
var map__65245 = p__65244;
var map__65245__$1 = (((((!((map__65245 == null))))?(((((map__65245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65245):map__65245);
var src = map__65245__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__65242,map__65242__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__65242,map__65242__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e65247){var e = e65247;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__65242,map__65242__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__65249,done){
var map__65250 = p__65249;
var map__65250__$1 = (((((!((map__65250 == null))))?(((((map__65250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65250):map__65250);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__65250,map__65250__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__65250,map__65250__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__65252){
var map__65254 = p__65252;
var map__65254__$1 = (((((!((map__65254 == null))))?(((((map__65254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65254):map__65254);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__65256,done){
var map__65257 = p__65256;
var map__65257__$1 = (((((!((map__65257 == null))))?(((((map__65257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65257):map__65257);
var msg = map__65257__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__65260_65457 = type;
var G__65260_65458__$1 = (((G__65260_65457 instanceof cljs.core.Keyword))?G__65260_65457.fqn:null);
switch (G__65260_65458__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__65261 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__65262 = ((function (G__65261){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__65261))
;
var G__65263 = "POST";
var G__65264 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__65265 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__65261,G__65262,G__65263,G__65264,G__65265);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__65269 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__65268 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__65268.cljs$core$IFn$_invoke$arity$1 ? fexpr__65268.cljs$core$IFn$_invoke$arity$1(G__65269) : fexpr__65268.call(null,G__65269));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e65271){var e = e65271;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___65473 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___65473)){
var s_65474 = temp__5735__auto___65473;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_65474.onclose = ((function (s_65474,temp__5735__auto___65473){
return (function (e){
return null;
});})(s_65474,temp__5735__auto___65473))
;

s_65474.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
