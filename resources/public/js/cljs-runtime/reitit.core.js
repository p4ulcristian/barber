goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.expand[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4434__auto__.call(null,this$,opts));
} else {
var m__4431__auto__ = (reitit.core.expand["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4431__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

var G__67576_67885 = reitit.core.expand;
var G__67577_67886 = "function";
var G__67578_67887 = ((function (G__67576_67885,G__67577_67886){
return (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
});})(G__67576_67885,G__67577_67886))
;
goog.object.set(G__67576_67885,G__67577_67886,G__67578_67887);

goog.object.set(reitit.core.Expand,"null",true);

var G__67579_67888 = reitit.core.expand;
var G__67580_67889 = "null";
var G__67581_67890 = ((function (G__67579_67888,G__67580_67889){
return (function (_,___$1){
return null;
});})(G__67579_67888,G__67580_67889))
;
goog.object.set(G__67579_67888,G__67580_67889,G__67581_67890);

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.router_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.router_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.routes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.options["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.route_names[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.route_names["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4434__auto__.call(null,this$,path));
} else {
var m__4431__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4431__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__67599 = arguments.length;
switch (G__67599) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4434__auto__.call(null,this$,name));
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4431__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4434__auto__.call(null,this$,name,path_params));
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4431__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67613,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67624 = k67613;
var G__67624__$1 = (((G__67624 instanceof cljs.core.Keyword))?G__67624.fqn:null);
switch (G__67624__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67613,else__4388__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67637){
var vec__67638 = p__67637;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67638,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67638,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.Match{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67612){
var self__ = this;
var G__67612__$1 = this;
return (new cljs.core.RecordIter((0),G__67612__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__67651 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__67651(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67614,other67615){
var self__ = this;
var this67614__$1 = this;
return (((!((other67615 == null)))) && ((this67614__$1.constructor === other67615.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.template,other67615.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.data,other67615.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.result,other67615.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.path_params,other67615.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.path,other67615.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67614__$1.__extmap,other67615.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67612){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67655 = cljs.core.keyword_identical_QMARK_;
var expr__67656 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__67658 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__67659 = expr__67656;
return (pred__67655.cljs$core$IFn$_invoke$arity$2 ? pred__67655.cljs$core$IFn$_invoke$arity$2(G__67658,G__67659) : pred__67655.call(null,G__67658,G__67659));
})())){
return (new reitit.core.Match(G__67612,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67660 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__67661 = expr__67656;
return (pred__67655.cljs$core$IFn$_invoke$arity$2 ? pred__67655.cljs$core$IFn$_invoke$arity$2(G__67660,G__67661) : pred__67655.call(null,G__67660,G__67661));
})())){
return (new reitit.core.Match(self__.template,G__67612,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67663 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__67664 = expr__67656;
return (pred__67655.cljs$core$IFn$_invoke$arity$2 ? pred__67655.cljs$core$IFn$_invoke$arity$2(G__67663,G__67664) : pred__67655.call(null,G__67663,G__67664));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__67612,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67665 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__67666 = expr__67656;
return (pred__67655.cljs$core$IFn$_invoke$arity$2 ? pred__67655.cljs$core$IFn$_invoke$arity$2(G__67665,G__67666) : pred__67655.call(null,G__67665,G__67666));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__67612,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67667 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__67668 = expr__67656;
return (pred__67655.cljs$core$IFn$_invoke$arity$2 ? pred__67655.cljs$core$IFn$_invoke$arity$2(G__67667,G__67668) : pred__67655.call(null,G__67667,G__67668));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__67612,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__67612),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67612){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__67612,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__67620){
var extmap__4424__auto__ = (function (){var G__67672 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67620,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__67620)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67672);
} else {
return G__67672;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__67620),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__67620),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__67620),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__67620),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__67620),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67676,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67683 = k67676;
var G__67683__$1 = (((G__67683 instanceof cljs.core.Keyword))?G__67683.fqn:null);
switch (G__67683__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67676,else__4388__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67685){
var vec__67686 = p__67685;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67686,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67686,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67675){
var self__ = this;
var G__67675__$1 = this;
return (new cljs.core.RecordIter((0),G__67675__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__67712 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__67712(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67677,other67678){
var self__ = this;
var this67677__$1 = this;
return (((!((other67678 == null)))) && ((this67677__$1.constructor === other67678.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.template,other67678.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.data,other67678.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.result,other67678.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.path_params,other67678.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.required,other67678.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67677__$1.__extmap,other67678.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67675){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67719 = cljs.core.keyword_identical_QMARK_;
var expr__67720 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__67722 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__67723 = expr__67720;
return (pred__67719.cljs$core$IFn$_invoke$arity$2 ? pred__67719.cljs$core$IFn$_invoke$arity$2(G__67722,G__67723) : pred__67719.call(null,G__67722,G__67723));
})())){
return (new reitit.core.PartialMatch(G__67675,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67724 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__67725 = expr__67720;
return (pred__67719.cljs$core$IFn$_invoke$arity$2 ? pred__67719.cljs$core$IFn$_invoke$arity$2(G__67724,G__67725) : pred__67719.call(null,G__67724,G__67725));
})())){
return (new reitit.core.PartialMatch(self__.template,G__67675,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67726 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__67727 = expr__67720;
return (pred__67719.cljs$core$IFn$_invoke$arity$2 ? pred__67719.cljs$core$IFn$_invoke$arity$2(G__67726,G__67727) : pred__67719.call(null,G__67726,G__67727));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__67675,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67729 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__67730 = expr__67720;
return (pred__67719.cljs$core$IFn$_invoke$arity$2 ? pred__67719.cljs$core$IFn$_invoke$arity$2(G__67729,G__67730) : pred__67719.call(null,G__67729,G__67730));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__67675,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67735 = new cljs.core.Keyword(null,"required","required",1807647006);
var G__67736 = expr__67720;
return (pred__67719.cljs$core$IFn$_invoke$arity$2 ? pred__67719.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : pred__67719.call(null,G__67735,G__67736));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__67675,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__67675),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67675){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__67675,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__67679){
var extmap__4424__auto__ = (function (){var G__67745 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67679,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__67679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67745);
} else {
return G__67745;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__67679),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__67679),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__67679),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__67679),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__67679),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__67748 = arguments.length;
switch (G__67748) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5733__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__67751 = arguments.length;
switch (G__67751) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__67752 = match;
var G__67752__$1 = (((G__67752 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__67752));
if((G__67752__$1 == null)){
return null;
} else {
var G__67753 = G__67752__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67753),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params))].join('');
} else {
return G__67753;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__67757 = arguments.length;
switch (G__67757) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__67758 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__67761,p__67762){
var vec__67763 = p__67761;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67763,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67763,(1),null);
var vec__67766 = p__67762;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67766,(0),null);
var map__67769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67766,(1),null);
var map__67769__$1 = (((((!((map__67769 == null))))?(((((map__67769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67769):map__67769);
var data = map__67769__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67766,(2),null);
var map__67771 = reitit.impl.parse(p);
var map__67771__$1 = (((((!((map__67771 == null))))?(((((map__67771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67771):map__67771);
var route = map__67771__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67771__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__67771,map__67771__$1,route,path_params,vec__67763,pl,nl,vec__67766,p,map__67769,map__67769__$1,data,name,result,compiler,names){
return (function (p1__67755_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__67755_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__67755_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__67755_SHARP_),path_params);
}
});})(map__67771,map__67771__$1,route,path_params,vec__67763,pl,nl,vec__67766,p,map__67769,map__67769__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67758,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67758,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67774 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,vec__67758,opts,meta67775){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.vec__67758 = vec__67758;
this.opts = opts;
this.meta67775 = meta67775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_67776,meta67775__$1){
var self__ = this;
var _67776__$1 = this;
return (new reitit.core.t_reitit$core67774(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.vec__67758,self__.opts,meta67775__$1));
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_67776){
var self__ = this;
var _67776__$1 = this;
return self__.meta67775;
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__67777 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__67777) : match.call(null,G__67777));
} else {
return null;
}
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.getBasis = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"vec__67758","vec__67758",121863836,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta67775","meta67775",495295775,null)], null);
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core67774.cljs$lang$type = true;

reitit.core.t_reitit$core67774.cljs$lang$ctorStr = "reitit.core/t_reitit$core67774";

reitit.core.t_reitit$core67774.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67774");
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67774.
 */
reitit.core.__GT_t_reitit$core67774 = ((function (compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes){
return (function reitit$core$__GT_t_reitit$core67774(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,vec__67758__$1,opts__$1,meta67775){
return (new reitit.core.t_reitit$core67774(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,vec__67758__$1,opts__$1,meta67775));
});})(compiler,names,vec__67758,pl,nl,lookup,matcher,match_by_path,routes))
;

}

return (new reitit.core.t_reitit$core67774(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,vec__67758,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__67780 = arguments.length;
switch (G__67780) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5735__auto___67971 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5735__auto___67971){
var wilds_67972 = temp__5735__auto___67971;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_67972)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_67972,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__67781 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__67784,p__67785){
var vec__67786 = p__67784;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67786,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67786,(1),null);
var vec__67789 = p__67785;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(0),null);
var map__67792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(1),null);
var map__67792__$1 = (((((!((map__67792 == null))))?(((((map__67792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67792):map__67792);
var data = map__67792__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67789,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,((function (vec__67786,pl,nl,vec__67789,p,map__67792,map__67792__$1,data,name,result,names){
return (function (p1__67778_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__67778_SHARP_,p);
});})(vec__67786,pl,nl,vec__67789,p,map__67792,map__67792__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67781,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67781,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67794 = (function (names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__67781,meta67795){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.vec__67781 = vec__67781;
this.meta67795 = meta67795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_67796,meta67795__$1){
var self__ = this;
var _67796__$1 = this;
return (new reitit.core.t_reitit$core67794(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,self__.vec__67781,meta67795__$1));
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_67796){
var self__ = this;
var _67796__$1 = this;
return self__.meta67795;
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__67797 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__67797) : match.call(null,G__67797));
} else {
return null;
}
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.getBasis = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__67781","vec__67781",2056512798,null),new cljs.core.Symbol(null,"meta67795","meta67795",-1402976378,null)], null);
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core67794.cljs$lang$type = true;

reitit.core.t_reitit$core67794.cljs$lang$ctorStr = "reitit.core/t_reitit$core67794";

reitit.core.t_reitit$core67794.cljs$lang$ctorPrWriter = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67794");
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67794.
 */
reitit.core.__GT_t_reitit$core67794 = ((function (names,vec__67781,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core67794(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__67781__$1,meta67795){
return (new reitit.core.t_reitit$core67794(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__67781__$1,meta67795));
});})(names,vec__67781,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core67794(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__67781,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__67800 = arguments.length;
switch (G__67800) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__67801 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__67804,p__67805){
var vec__67806 = p__67804;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67806,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67806,(1),null);
var vec__67809 = p__67805;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67809,(0),null);
var map__67812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67809,(1),null);
var map__67812__$1 = (((((!((map__67812 == null))))?(((((map__67812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67812):map__67812);
var data = map__67812__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67809,(2),null);
var map__67814 = reitit.impl.parse(p);
var map__67814__$1 = (((((!((map__67814 == null))))?(((((map__67814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67814):map__67814);
var route = map__67814__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67814__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__67814,map__67814__$1,route,path_params,vec__67806,pl,nl,vec__67809,p,map__67812,map__67812__$1,data,name,result,compiler,names){
return (function (p1__67798_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__67798_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__67798_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__67798_SHARP_),path_params);
}
});})(map__67814,map__67814__$1,route,path_params,vec__67806,pl,nl,vec__67809,p,map__67812,map__67812__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67818 = (function (matcher,names,compiled_routes,routes,lookup,pl,vec__67801,nl,match_by_path,compiler,opts,meta67819){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.vec__67801 = vec__67801;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta67819 = meta67819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_67820,meta67819__$1){
var self__ = this;
var _67820__$1 = this;
return (new reitit.core.t_reitit$core67818(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.vec__67801,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta67819__$1));
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_67820){
var self__ = this;
var _67820__$1 = this;
return self__.meta67819;
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__67824 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__67824) : match.call(null,G__67824));
} else {
return null;
}
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.getBasis = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"vec__67801","vec__67801",-1943117418,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta67819","meta67819",-1419346221,null)], null);
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core67818.cljs$lang$type = true;

reitit.core.t_reitit$core67818.cljs$lang$ctorStr = "reitit.core/t_reitit$core67818";

reitit.core.t_reitit$core67818.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67818");
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67818.
 */
reitit.core.__GT_t_reitit$core67818 = ((function (compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes){
return (function reitit$core$__GT_t_reitit$core67818(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__67801__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta67819){
return (new reitit.core.t_reitit$core67818(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__67801__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta67819));
});})(compiler,names,vec__67801,pl,nl,matcher,match_by_path,lookup,routes))
;

}

return (new reitit.core.t_reitit$core67818(matcher,names,compiled_routes,routes,lookup,pl,vec__67801,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.trie_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__67828 = arguments.length;
switch (G__67828) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__67829 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67829,(0),null);
var names = vec__67829;
var vec__67832 = compiled_routes;
var vec__67835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67832,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67835,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67835,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67835,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67838 = (function (p,names,match,data,compiled_routes,routes,n,vec__67835,vec__67829,result,opts,vec__67832,meta67839){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__67835 = vec__67835;
this.vec__67829 = vec__67829;
this.result = result;
this.opts = opts;
this.vec__67832 = vec__67832;
this.meta67839 = meta67839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_67840,meta67839__$1){
var self__ = this;
var _67840__$1 = this;
return (new reitit.core.t_reitit$core67838(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__67835,self__.vec__67829,self__.result,self__.opts,self__.vec__67832,meta67839__$1));
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_67840){
var self__ = this;
var _67840__$1 = this;
return self__.meta67839;
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$options$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.getBasis = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__67835","vec__67835",2031742099,null),new cljs.core.Symbol(null,"vec__67829","vec__67829",1822724472,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__67832","vec__67832",1379839070,null),new cljs.core.Symbol(null,"meta67839","meta67839",-516446824,null)], null);
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core67838.cljs$lang$type = true;

reitit.core.t_reitit$core67838.cljs$lang$ctorStr = "reitit.core/t_reitit$core67838";

reitit.core.t_reitit$core67838.cljs$lang$ctorPrWriter = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67838");
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67838.
 */
reitit.core.__GT_t_reitit$core67838 = ((function (vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core67838(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__67835__$1,vec__67829__$1,result__$1,opts__$1,vec__67832__$1,meta67839){
return (new reitit.core.t_reitit$core67838(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__67835__$1,vec__67829__$1,result__$1,opts__$1,vec__67832__$1,meta67839));
});})(vec__67829,n,names,vec__67832,vec__67835,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core67838(p__$1,names,match,data,compiled_routes,routes,n,vec__67835,vec__67829,result,opts,vec__67832,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__67842 = arguments.length;
switch (G__67842) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__67843 = cljs.core.group_by(reitit.impl.wild_route_QMARK_,compiled_routes);
var map__67843__$1 = (((((!((map__67843 == null))))?(((((map__67843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67843):map__67843);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67843__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67843__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67845 = (function (map__67843,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta67846){
this.map__67843 = map__67843;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta67846 = meta67846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_67847,meta67846__$1){
var self__ = this;
var _67847__$1 = this;
return (new reitit.core.t_reitit$core67845(self__.map__67843,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta67846__$1));
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_67847){
var self__ = this;
var _67847__$1 = this;
return self__.meta67846;
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$routes$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$options$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.getBasis = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__67843","map__67843",-315894463,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta67846","meta67846",-568667165,null)], null);
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core67845.cljs$lang$type = true;

reitit.core.t_reitit$core67845.cljs$lang$ctorStr = "reitit.core/t_reitit$core67845";

reitit.core.t_reitit$core67845.cljs$lang$ctorPrWriter = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67845");
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67845.
 */
reitit.core.__GT_t_reitit$core67845 = ((function (map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core67845(map__67843__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta67846){
return (new reitit.core.t_reitit$core67845(map__67843__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta67846));
});})(map__67843,map__67843__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core67845(map__67843__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__67850 = arguments.length;
switch (G__67850) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths(reitit.impl.path_conflicting_routes(compiled_routes));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__67848_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__67848_SHARP_));
});})(conflicting_paths))
;
var map__67851 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__67851__$1 = (((((!((map__67851 == null))))?(((((map__67851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67851):map__67851);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67851__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67851__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core67853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core67853 = (function (non_conflicting,names,conflicting_paths,compiled_routes,map__67851,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta67854){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.map__67851 = map__67851;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta67854 = meta67854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core67853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_67855,meta67854__$1){
var self__ = this;
var _67855__$1 = this;
return (new reitit.core.t_reitit$core67853(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.map__67851,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta67854__$1));
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_67855){
var self__ = this;
var _67855__$1 = this;
return self__.meta67854;
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"map__67851","map__67851",-1612708218,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta67854","meta67854",606842629,null)], null);
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core67853.cljs$lang$type = true;

reitit.core.t_reitit$core67853.cljs$lang$ctorStr = "reitit.core/t_reitit$core67853";

reitit.core.t_reitit$core67853.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core67853");
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core67853.
 */
reitit.core.__GT_t_reitit$core67853 = ((function (conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core67853(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,map__67851__$2,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta67854){
return (new reitit.core.t_reitit$core67853(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,map__67851__$2,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta67854));
});})(conflicting_paths,conflicting_QMARK_,map__67851,map__67851__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core67853(non_conflicting,names,conflicting_paths,compiled_routes,map__67851__$1,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__67858,_){
var vec__67859 = p__67858;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67859,(0),null);
var map__67862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67859,(1),null);
var map__67862__$1 = (((((!((map__67862 == null))))?(((((map__67862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67862):map__67862);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__67864,_){
var vec__67865 = p__67864;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67865,(0),null);
var map__67868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67865,(1),null);
var map__67868__$1 = (((((!((map__67868 == null))))?(((((map__67868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67868):map__67868);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__67871 = arguments.length;
switch (G__67871) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__67872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__67872__$1 = (((((!((map__67872 == null))))?(((((map__67872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67872):map__67872);
var opts__$1 = map__67872__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67872__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5735__auto___68140 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___68140)){
var conflicts_68141 = temp__5735__auto___68140;
if(cljs.core.truth_(path_conflicting)){
(conflicts_68141.cljs$core$IFn$_invoke$arity$1 ? conflicts_68141.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_68141.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5735__auto___68142 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___68142)){
var validate_68143 = temp__5735__auto___68142;
(validate_68143.cljs$core$IFn$_invoke$arity$2 ? validate_68143.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_68143.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e67874){if((e67874 instanceof Error)){
var e = e67874;
throw (function (){var fexpr__67878 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__67878.cljs$core$IFn$_invoke$arity$1 ? fexpr__67878.cljs$core$IFn$_invoke$arity$1(e) : fexpr__67878.call(null,e));
})();
} else {
throw e67874;

}
}});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reitit.core.js.map
