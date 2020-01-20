goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');

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
reitit.impl.Route = (function (path,path_parts,path_params,__meta,__extmap,__hash){
this.path = path;
this.path_parts = path_parts;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67441,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67445 = k67441;
var G__67445__$1 = (((G__67445 instanceof cljs.core.Keyword))?G__67445.fqn:null);
switch (G__67445__$1) {
case "path":
return self__.path;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67441,else__4388__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67446){
var vec__67447 = p__67446;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67447,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67447,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.impl.Route{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67440){
var self__ = this;
var G__67440__$1 = this;
return (new cljs.core.RecordIter((0),G__67440__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__67451 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__67451(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67442,other67443){
var self__ = this;
var this67442__$1 = this;
return (((!((other67443 == null)))) && ((this67442__$1.constructor === other67443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67442__$1.path,other67443.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67442__$1.path_parts,other67443.path_parts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67442__$1.path_params,other67443.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67442__$1.__extmap,other67443.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67440){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67452 = cljs.core.keyword_identical_QMARK_;
var expr__67453 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__67455 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__67456 = expr__67453;
return (pred__67452.cljs$core$IFn$_invoke$arity$2 ? pred__67452.cljs$core$IFn$_invoke$arity$2(G__67455,G__67456) : pred__67452.call(null,G__67455,G__67456));
})())){
return (new reitit.impl.Route(G__67440,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67457 = new cljs.core.Keyword(null,"path-parts","path-parts",945822894);
var G__67458 = expr__67453;
return (pred__67452.cljs$core$IFn$_invoke$arity$2 ? pred__67452.cljs$core$IFn$_invoke$arity$2(G__67457,G__67458) : pred__67452.call(null,G__67457,G__67458));
})())){
return (new reitit.impl.Route(self__.path,G__67440,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__67459 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__67460 = expr__67453;
return (pred__67452.cljs$core$IFn$_invoke$arity$2 ? pred__67452.cljs$core$IFn$_invoke$arity$2(G__67459,G__67460) : pred__67452.call(null,G__67459,G__67460));
})())){
return (new reitit.impl.Route(self__.path,self__.path_parts,G__67440,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__67440),null));
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67440){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,G__67440,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,path_parts,path_params){
return (new reitit.impl.Route(path,path_parts,path_params,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__67444){
var extmap__4424__auto__ = (function (){var G__67462 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67444,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], 0));
if(cljs.core.record_QMARK_(G__67444)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67462);
} else {
return G__67462;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__67444),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__67444),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__67444),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.impl.parse = (function reitit$impl$parse(path){
var path__$1 = reitit.trie.normalize(path);
var path_parts = reitit.trie.split_path(path__$1);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return reitit.impl.map__GT_Route(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null));
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__67463){
var vec__67464 = p__67463;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67464,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path))));
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__67469){
var map__67470 = p__67469;
var map__67470__$1 = (((((!((map__67470 == null))))?(((((map__67470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67470):map__67470);
var opts = map__67470__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67470__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67470__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67470__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67470__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = ((function (map__67470,map__67470__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__67470,map__67470__$1,opts,path,data,routes,expand){
return (function (p1__67467_SHARP_,p2__67468_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__67467_SHARP_,walk_one(p,m,p2__67468_SHARP_));
});})(map__67470,map__67470__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__67470,map__67470__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__67470,map__67470__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__67481 = routes__$1;
var seq__67482 = cljs.core.seq(vec__67481);
var first__67483 = cljs.core.first(seq__67482);
var seq__67482__$1 = cljs.core.next(seq__67482);
var path__$1 = first__67483;
var vec__67484 = seq__67482__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67484,(0),null);
var args = vec__67484;
var vec__67487 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67487,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67487,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__67470,map__67470__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__67491){
var vec__67492 = p__67491;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67492,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67492,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__67495){
var vec__67496 = p__67495;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67496,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e67499){if((e67499 instanceof Error)){
var e = e67499;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e67499;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__67501){
var map__67502 = p__67501;
var map__67502__$1 = (((((!((map__67502 == null))))?(((((map__67502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67502):map__67502);
var opts = map__67502__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67502__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__67504 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__67504,map__67502,map__67502__$1,opts,coerce){
return (function (p1__67500_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__67500_SHARP_,opts) : coerce.call(null,p1__67500_SHARP_,opts));
});})(G__67504,map__67502,map__67502__$1,opts,coerce))
),G__67504);
} else {
return G__67504;
}
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(route1,route2){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route1),cljs.core.first(route2));
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reitit.impl.conflicting_routes_QMARK_,route)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function reitit$impl$conflicting_paths_$_iter__67505(s__67506){
return (new cljs.core.LazySeq(null,(function (){
var s__67506__$1 = s__67506;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67506__$1);
if(temp__5735__auto__){
var s__67506__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67506__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__67506__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__67508 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__67507 = (0);
while(true){
if((i__67507 < size__4522__auto__)){
var vec__67509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__67507);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67509,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67509,(1),null);
cljs.core.chunk_append(b__67508,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__67593 = (i__67507 + (1));
i__67507 = G__67593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67508),reitit$impl$conflicting_paths_$_iter__67505(cljs.core.chunk_rest(s__67506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67508),null);
}
} else {
var vec__67512 = cljs.core.first(s__67506__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67512,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67512,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__67505(cljs.core.rest(s__67506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__67515 = routes;
var G__67515__$1 = (((G__67515 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__67515));
var G__67515__$2 = (((G__67515__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__67515__$1));
var G__67515__$3 = (((G__67515__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__67515__$2));
var G__67515__$4 = (((G__67515__$3 == null))?null:cljs.core.seq(G__67515__$3));
var G__67515__$5 = (((G__67515__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__67515,G__67515__$1,G__67515__$2,G__67515__$3,G__67515__$4){
return (function (p__67516){
var vec__67517 = p__67516;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__67515,G__67515__$1,G__67515__$2,G__67515__$3,G__67515__$4))
,G__67515__$4));
if((G__67515__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67515__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__67520_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__67520_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__67521,p__67522){
var vec__67523 = p__67521;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67523,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67523,(1),null);
var route = vec__67523;
var map__67526 = p__67522;
var map__67526__$1 = (((((!((map__67526 == null))))?(((((map__67526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67526):map__67526);
var opts = map__67526__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67526__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__67528_SHARP_){
return reitit.impl.compile_route(p1__67528_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__67529_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__67529_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4131__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (reitit.impl.into_string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__67532_67621 = reitit.impl.into_string;
var G__67533_67622 = "string";
var G__67534_67623 = ((function (G__67532_67621,G__67533_67622){
return (function (this$){
return this$;
});})(G__67532_67621,G__67533_67622))
;
goog.object.set(G__67532_67621,G__67533_67622,G__67534_67623);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__67539_67625 = reitit.impl.into_string;
var G__67540_67626 = "boolean";
var G__67541_67627 = ((function (G__67539_67625,G__67540_67626){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__67539_67625,G__67540_67626))
;
goog.object.set(G__67539_67625,G__67540_67626,G__67541_67627);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__67545_67628 = reitit.impl.into_string;
var G__67546_67629 = "number";
var G__67547_67630 = ((function (G__67545_67628,G__67546_67629){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__67545_67628,G__67546_67629))
;
goog.object.set(G__67545_67628,G__67546_67629,G__67547_67630);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__67554_67631 = reitit.impl.into_string;
var G__67555_67632 = "object";
var G__67556_67633 = ((function (G__67554_67631,G__67555_67632){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__67554_67631,G__67555_67632))
;
goog.object.set(G__67554_67631,G__67555_67632,G__67556_67633);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__67560_67634 = reitit.impl.into_string;
var G__67561_67635 = "null";
var G__67562_67636 = ((function (G__67560_67634,G__67561_67635){
return (function (_){
return null;
});})(G__67560_67634,G__67561_67635))
;
goog.object.set(G__67560_67634,G__67561_67635,G__67562_67636);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__67566_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__67566_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67567){
var vec__67568 = p__67567;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67568,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
