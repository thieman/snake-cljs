goog.provide('snake.model');
goog.require('cljs.core');
snake.model.Constructable = {};
snake.model.construct = (function construct(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$Constructable$construct$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$Constructable$construct$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.construct[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.construct["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Constructable.construct",this$);
}
}
})().call(null,this$);
}
});
snake.model.Renderable = {};
snake.model.render_BANG_ = (function render_BANG_(this$,args_map){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$Renderable$render_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$Renderable$render_BANG_$arity$2(this$,args_map);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.render_BANG_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.render_BANG_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render!",this$);
}
}
})().call(null,this$,args_map);
}
});
snake.model.erase_BANG_ = (function erase_BANG_(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$Renderable$erase_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$Renderable$erase_BANG_$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.erase_BANG_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.erase_BANG_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.erase!",this$);
}
}
})().call(null,this$);
}
});
snake.model.GameBox = {};
snake.model.maybe_collideable = (function maybe_collideable(this$,max_row,max_col){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameBox$maybe_collideable$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameBox$maybe_collideable$arity$3(this$,max_row,max_col);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.maybe_collideable[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.maybe_collideable["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameBox.maybe-collideable",this$);
}
}
})().call(null,this$,max_row,max_col);
}
});
snake.model.reset_game_state = (function reset_game_state(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameBox$reset_game_state$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameBox$reset_game_state$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.reset_game_state[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.reset_game_state["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameBox.reset-game-state",this$);
}
}
})().call(null,this$);
}
});
snake.model.as_food = (function as_food(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameBox$as_food$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameBox$as_food$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.as_food[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.as_food["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameBox.as-food",this$);
}
}
})().call(null,this$);
}
});
snake.model.as_snake = (function as_snake(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameBox$as_snake$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameBox$as_snake$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.as_snake[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.as_snake["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameBox.as-snake",this$);
}
}
})().call(null,this$);
}
});
snake.model.GameGrid = {};
snake.model.with_new_food = (function with_new_food(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$with_new_food$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$with_new_food$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.with_new_food[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.with_new_food["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.with-new-food",this$);
}
}
})().call(null,this$);
}
});
snake.model.with_new_snake = (function with_new_snake(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$with_new_snake$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$with_new_snake$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.with_new_snake[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.with_new_snake["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.with-new-snake",this$);
}
}
})().call(null,this$);
}
});
snake.model.tick = (function tick(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$tick$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$tick$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.tick[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.tick["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.tick",this$);
}
}
})().call(null,this$);
}
});
snake.model.get_next_position = (function get_next_position(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$get_next_position$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$get_next_position$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.get_next_position[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.get_next_position["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.get-next-position",this$);
}
}
})().call(null,this$);
}
});
snake.model.move_snake = (function move_snake(this$,directive){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$move_snake$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$move_snake$arity$2(this$,directive);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.move_snake[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.move_snake["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.move-snake",this$);
}
}
})().call(null,this$,directive);
}
});
snake.model.maybe_erase_tail = (function maybe_erase_tail(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.snake$model$GameGrid$maybe_erase_tail$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.snake$model$GameGrid$maybe_erase_tail$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (snake.model.maybe_erase_tail[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (snake.model.maybe_erase_tail["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GameGrid.maybe-erase-tail",this$);
}
}
})().call(null,this$);
}
});
goog.provide('snake.model.Canvas');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
snake.model.Canvas = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
snake.model.Canvas.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
snake.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
snake.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k4566,else__3390__auto__){var self__ = this;
if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k4566,else__3390__auto__);
} else
{return null;
}
});
snake.model.Canvas.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__4565){var self__ = this;
var pred__4568 = cljs.core.keyword_identical_QMARK_;var expr__4569 = k__3395__auto__;return (new snake.model.Canvas(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__4565),null));
});
snake.model.Canvas.prototype.snake$model$Constructable$ = true;
snake.model.Canvas.prototype.snake$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var canvas_object = document.getElementById("snakeGameCanvas");return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas_object,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677),"white",new cljs.core.Keyword(null,"context","context",1965435169),canvas_object.getContext("2d")], true));
});
snake.model.Canvas.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#snake.model.Canvas{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
snake.model.Canvas.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
snake.model.Canvas.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
snake.model.Canvas.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});
snake.model.Canvas.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
snake.model.Canvas.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__4565){var self__ = this;
return (new snake.model.Canvas(G__4565,self__.__extmap,self__.__hash));
});
snake.model.Canvas.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
snake.model.Canvas.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new snake.model.Canvas(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
snake.model.Canvas.cljs$lang$type = true;
snake.model.Canvas.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"snake.model/Canvas");
});
snake.model.Canvas.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"snake.model/Canvas");
});
snake.model.__GT_Canvas = (function __GT_Canvas(){return (new snake.model.Canvas());
});
snake.model.map__GT_Canvas = (function map__GT_Canvas(G__4567){return (new snake.model.Canvas(null,cljs.core.dissoc.call(null,G__4567)));
});
goog.provide('snake.model.GridBox');

/**
* @constructor
* @param {*} canvas
* @param {*} row
* @param {*} col
* @param {*} height
* @param {*} width
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
snake.model.GridBox = (function (canvas,row,col,height,width,__meta,__extmap){
this.canvas = canvas;
this.row = row;
this.col = col;
this.height = height;
this.width = width;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
snake.model.GridBox.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
snake.model.GridBox.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
snake.model.GridBox.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k4572,else__3390__auto__){var self__ = this;
if(cljs.core.keyword_identical_QMARK_.call(null,k4572,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4572,new cljs.core.Keyword(null,"row","row",1014017356)))
{return self__.row;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4572,new cljs.core.Keyword(null,"col","col",1014002930)))
{return self__.col;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4572,new cljs.core.Keyword(null,"height","height",4087841945)))
{return self__.height;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4572,new cljs.core.Keyword(null,"width","width",1127031096)))
{return self__.width;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k4572,else__3390__auto__);
} else
{return null;
}
}
}
}
}
}
});
snake.model.GridBox.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__4571){var self__ = this;
var pred__4574 = cljs.core.keyword_identical_QMARK_;var expr__4575 = k__3395__auto__;if(pred__4574.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__4575))
{return (new snake.model.GridBox(G__4571,self__.row,self__.col,self__.height,self__.width,self__.__meta,self__.__extmap,null));
} else
{if(pred__4574.call(null,new cljs.core.Keyword(null,"row","row",1014017356),expr__4575))
{return (new snake.model.GridBox(self__.canvas,G__4571,self__.col,self__.height,self__.width,self__.__meta,self__.__extmap,null));
} else
{if(pred__4574.call(null,new cljs.core.Keyword(null,"col","col",1014002930),expr__4575))
{return (new snake.model.GridBox(self__.canvas,self__.row,G__4571,self__.height,self__.width,self__.__meta,self__.__extmap,null));
} else
{if(pred__4574.call(null,new cljs.core.Keyword(null,"height","height",4087841945),expr__4575))
{return (new snake.model.GridBox(self__.canvas,self__.row,self__.col,G__4571,self__.width,self__.__meta,self__.__extmap,null));
} else
{if(pred__4574.call(null,new cljs.core.Keyword(null,"width","width",1127031096),expr__4575))
{return (new snake.model.GridBox(self__.canvas,self__.row,self__.col,self__.height,G__4571,self__.__meta,self__.__extmap,null));
} else
{return (new snake.model.GridBox(self__.canvas,self__.row,self__.col,self__.height,self__.width,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__4571),null));
}
}
}
}
}
});
snake.model.GridBox.prototype.snake$model$Constructable$ = true;
snake.model.GridBox.prototype.snake$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),false,new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true));
});
snake.model.GridBox.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#snake.model.GridBox{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"row","row",1014017356),self__.row),cljs.core.vector.call(null,new cljs.core.Keyword(null,"col","col",1014002930),self__.col),cljs.core.vector.call(null,new cljs.core.Keyword(null,"height","height",4087841945),self__.height),cljs.core.vector.call(null,new cljs.core.Keyword(null,"width","width",1127031096),self__.width)], true),self__.__extmap));
});
snake.model.GridBox.prototype.snake$model$Renderable$ = true;
snake.model.GridBox.prototype.snake$model$Renderable$render_BANG_$arity$2 = (function (this$,p__4577){var self__ = this;
var map__4578 = p__4577;var map__4578__$1 = ((cljs.core.seq_QMARK_.call(null,map__4578))?cljs.core.apply.call(null,cljs.core.hash_map,map__4578):map__4578);var color = cljs.core.get.call(null,map__4578__$1,new cljs.core.Keyword(null,"color","color",1108746965));var color__$1 = (function (){var or__3943__auto__ = color;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return new cljs.core.Keyword(null,"color","color",1108746965).call(null,this$);
}
})();new cljs.core.Keyword(null,"context","context",1965435169).call(null,self__.canvas).fillStyle = color__$1;
return new cljs.core.Keyword(null,"context","context",1965435169).call(null,self__.canvas).fillRect((self__.col * self__.width),(self__.row * self__.height),self__.width,self__.height,color__$1);
});
snake.model.GridBox.prototype.snake$model$Renderable$erase_BANG_$arity$1 = (function (this$){var self__ = this;
return this$.snake$model$Renderable$render_BANG_$arity$2(this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true));
});
snake.model.GridBox.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
snake.model.GridBox.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"row","row",1014017356),self__.row),cljs.core.vector.call(null,new cljs.core.Keyword(null,"col","col",1014002930),self__.col),cljs.core.vector.call(null,new cljs.core.Keyword(null,"height","height",4087841945),self__.height),cljs.core.vector.call(null,new cljs.core.Keyword(null,"width","width",1127031096),self__.width)], true),self__.__extmap));
});
snake.model.GridBox.prototype.snake$model$GameBox$ = true;
snake.model.GridBox.prototype.snake$model$GameBox$maybe_collideable$arity$3 = (function (this$,max_row,max_col){var self__ = this;
if((function (){var or__3943__auto__ = cljs.core._EQ_.call(null,self__.row,0);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,self__.row,max_row);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core._EQ_.call(null,self__.col,0);if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return cljs.core._EQ_.call(null,self__.col,max_col);
}
}
}
})())
{return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),true,new cljs.core.Keyword(null,"color","color",1108746965),"black"], true));
} else
{return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),false,new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true));
}
});
snake.model.GridBox.prototype.snake$model$GameBox$reset_game_state$arity$1 = (function (this$){var self__ = this;
return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),false,new cljs.core.Keyword(null,"food","food",1017053136),false,new cljs.core.Keyword(null,"snake","snake",1123482802),false,new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true));
});
snake.model.GridBox.prototype.snake$model$GameBox$as_food$arity$1 = (function (this$){var self__ = this;
return cljs.core.merge.call(null,this$.snake$model$GameBox$reset_game_state$arity$1(this$),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),true,new cljs.core.Keyword(null,"food","food",1017053136),true,new cljs.core.Keyword(null,"color","color",1108746965),"blue"], true));
});
snake.model.GridBox.prototype.snake$model$GameBox$as_snake$arity$1 = (function (this$){var self__ = this;
return cljs.core.merge.call(null,this$.snake$model$GameBox$reset_game_state$arity$1(this$),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"collideable","collideable",2137369098),true,new cljs.core.Keyword(null,"snake","snake",1123482802),true,new cljs.core.Keyword(null,"color","color",1108746965),"red"], true));
});
snake.model.GridBox.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});
snake.model.GridBox.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
snake.model.GridBox.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__4571){var self__ = this;
return (new snake.model.GridBox(self__.canvas,self__.row,self__.col,self__.height,self__.width,G__4571,self__.__extmap,self__.__hash));
});
snake.model.GridBox.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
snake.model.GridBox.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"row","row",1014017356),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"col","col",1014002930),null,new cljs.core.Keyword(null,"height","height",4087841945),null], true),k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new snake.model.GridBox(self__.canvas,self__.row,self__.col,self__.height,self__.width,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
snake.model.GridBox.cljs$lang$type = true;
snake.model.GridBox.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"snake.model/GridBox");
});
snake.model.GridBox.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"snake.model/GridBox");
});
snake.model.__GT_GridBox = (function __GT_GridBox(canvas,row,col,height,width){return (new snake.model.GridBox(canvas,row,col,height,width));
});
snake.model.map__GT_GridBox = (function map__GT_GridBox(G__4573){return (new snake.model.GridBox(new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,G__4573),new cljs.core.Keyword(null,"row","row",1014017356).call(null,G__4573),new cljs.core.Keyword(null,"col","col",1014002930).call(null,G__4573),new cljs.core.Keyword(null,"height","height",4087841945).call(null,G__4573),new cljs.core.Keyword(null,"width","width",1127031096).call(null,G__4573),null,cljs.core.dissoc.call(null,G__4573,new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"row","row",1014017356),new cljs.core.Keyword(null,"col","col",1014002930),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"width","width",1127031096))));
});
goog.provide('snake.model.GridModel');

/**
* @constructor
* @param {*} canvas
* @param {*} rows
* @param {*} cols
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
snake.model.GridModel = (function (canvas,rows,cols,__meta,__extmap){
this.canvas = canvas;
this.rows = rows;
this.cols = cols;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
snake.model.GridModel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
snake.model.GridModel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
snake.model.GridModel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k4580,else__3390__auto__){var self__ = this;
if(cljs.core.keyword_identical_QMARK_.call(null,k4580,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4580,new cljs.core.Keyword(null,"rows","rows",1017410891)))
{return self__.rows;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4580,new cljs.core.Keyword(null,"cols","cols",1016963685)))
{return self__.cols;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k4580,else__3390__auto__);
} else
{return null;
}
}
}
}
});
snake.model.GridModel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__4579){var self__ = this;
var pred__4582 = cljs.core.keyword_identical_QMARK_;var expr__4583 = k__3395__auto__;if(pred__4582.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__4583))
{return (new snake.model.GridModel(G__4579,self__.rows,self__.cols,self__.__meta,self__.__extmap,null));
} else
{if(pred__4582.call(null,new cljs.core.Keyword(null,"rows","rows",1017410891),expr__4583))
{return (new snake.model.GridModel(self__.canvas,G__4579,self__.cols,self__.__meta,self__.__extmap,null));
} else
{if(pred__4582.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685),expr__4583))
{return (new snake.model.GridModel(self__.canvas,self__.rows,G__4579,self__.__meta,self__.__extmap,null));
} else
{return (new snake.model.GridModel(self__.canvas,self__.rows,self__.cols,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__4579),null));
}
}
}
});
snake.model.GridModel.prototype.snake$model$Constructable$ = true;
snake.model.GridModel.prototype.snake$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var row_height = (new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,self__.canvas).height / self__.rows);var col_width = (new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,self__.canvas).width / self__.cols);var box_constructor = ((function (row_height,col_width){
return (function (row_num,col_num){return snake.model.maybe_collideable.call(null,snake.model.construct.call(null,snake.model.__GT_GridBox.call(null,self__.canvas,row_num,col_num,row_height,col_width)),(self__.rows - 1),(self__.cols - 1));
});})(row_height,col_width))
;var init_boxes = ((function (row_height,col_width,box_constructor){
return (function (row_num){return cljs.core.mapv.call(null,cljs.core.partial.call(null,box_constructor,row_num),cljs.core.range.call(null,self__.cols));
});})(row_height,col_width,box_constructor))
;var grid = cljs.core.mapv.call(null,init_boxes,cljs.core.range.call(null,self__.rows));return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"grid","grid",1017085624),grid,new cljs.core.Keyword(null,"row-height","row-height",2620148716),row_height,new cljs.core.Keyword(null,"col-width","col-width",1110546091),col_width,new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"right","right",1122416014)], true));
});
snake.model.GridModel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#snake.model.GridModel{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"rows","rows",1017410891),self__.rows),cljs.core.vector.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685),self__.cols)], true),self__.__extmap));
});
snake.model.GridModel.prototype.snake$model$Renderable$ = true;
snake.model.GridModel.prototype.snake$model$Renderable$render_BANG_$arity$2 = (function (this$,_){var self__ = this;
var seq__4585 = cljs.core.seq.call(null,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$)));var chunk__4586 = null;var count__4587 = 0;var i__4588 = 0;while(true){
if((i__4588 < count__4587))
{var box = cljs.core._nth.call(null,chunk__4586,i__4588);snake.model.render_BANG_.call(null,box,cljs.core.PersistentArrayMap.EMPTY);
{
var G__4595 = seq__4585;
var G__4596 = chunk__4586;
var G__4597 = count__4587;
var G__4598 = (i__4588 + 1);
seq__4585 = G__4595;
chunk__4586 = G__4596;
count__4587 = G__4597;
i__4588 = G__4598;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4585);if(temp__4092__auto__)
{var seq__4585__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4585__$1))
{var c__3559__auto__ = cljs.core.chunk_first.call(null,seq__4585__$1);{
var G__4599 = cljs.core.chunk_rest.call(null,seq__4585__$1);
var G__4600 = c__3559__auto__;
var G__4601 = cljs.core.count.call(null,c__3559__auto__);
var G__4602 = 0;
seq__4585 = G__4599;
chunk__4586 = G__4600;
count__4587 = G__4601;
i__4588 = G__4602;
continue;
}
} else
{var box = cljs.core.first.call(null,seq__4585__$1);snake.model.render_BANG_.call(null,box,cljs.core.PersistentArrayMap.EMPTY);
{
var G__4603 = cljs.core.next.call(null,seq__4585__$1);
var G__4604 = null;
var G__4605 = 0;
var G__4606 = 0;
seq__4585 = G__4603;
chunk__4586 = G__4604;
count__4587 = G__4605;
i__4588 = G__4606;
continue;
}
}
} else
{return null;
}
}
break;
}
});
snake.model.GridModel.prototype.snake$model$Renderable$erase_BANG_$arity$1 = (function (this$){var self__ = this;
var seq__4589 = cljs.core.seq.call(null,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$)));var chunk__4590 = null;var count__4591 = 0;var i__4592 = 0;while(true){
if((i__4592 < count__4591))
{var box = cljs.core._nth.call(null,chunk__4590,i__4592);snake.model.erase_BANG_.call(null,box);
{
var G__4607 = seq__4589;
var G__4608 = chunk__4590;
var G__4609 = count__4591;
var G__4610 = (i__4592 + 1);
seq__4589 = G__4607;
chunk__4590 = G__4608;
count__4591 = G__4609;
i__4592 = G__4610;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4589);if(temp__4092__auto__)
{var seq__4589__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4589__$1))
{var c__3559__auto__ = cljs.core.chunk_first.call(null,seq__4589__$1);{
var G__4611 = cljs.core.chunk_rest.call(null,seq__4589__$1);
var G__4612 = c__3559__auto__;
var G__4613 = cljs.core.count.call(null,c__3559__auto__);
var G__4614 = 0;
seq__4589 = G__4611;
chunk__4590 = G__4612;
count__4591 = G__4613;
i__4592 = G__4614;
continue;
}
} else
{var box = cljs.core.first.call(null,seq__4589__$1);snake.model.erase_BANG_.call(null,box);
{
var G__4615 = cljs.core.next.call(null,seq__4589__$1);
var G__4616 = null;
var G__4617 = 0;
var G__4618 = 0;
seq__4589 = G__4615;
chunk__4590 = G__4616;
count__4591 = G__4617;
i__4592 = G__4618;
continue;
}
}
} else
{return null;
}
}
break;
}
});
snake.model.GridModel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
snake.model.GridModel.prototype.snake$model$GameGrid$ = true;
snake.model.GridModel.prototype.snake$model$GameGrid$with_new_food$arity$1 = (function (this$){var self__ = this;
var test_row = cljs.core.rand_int.call(null,(new cljs.core.Keyword(null,"rows","rows",1017410891).call(null,this$) - 1));var test_col = cljs.core.rand_int.call(null,(new cljs.core.Keyword(null,"cols","cols",1016963685).call(null,this$) - 1));var box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),cljs.core.PersistentVector.fromArray([test_row,test_col], true));if(cljs.core.truth_(new cljs.core.Keyword(null,"collideable","collideable",2137369098).call(null,box)))
{return this$.snake$model$GameGrid$with_new_food$arity$1(this$);
} else
{return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"grid","grid",1017085624),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),cljs.core.PersistentVector.fromArray([test_row,test_col], true),snake.model.as_food.call(null,box))], true));
}
});
snake.model.GridModel.prototype.snake$model$GameGrid$with_new_snake$arity$1 = (function (this$){var self__ = this;
var starting_positions = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,3], true),cljs.core.PersistentVector.fromArray([1,4], true),cljs.core.PersistentVector.fromArray([1,5], true),cljs.core.PersistentVector.fromArray([1,6], true),cljs.core.PersistentVector.fromArray([1,7], true)], true);var merge_snake = ((function (starting_positions){
return (function (acc,p__4593){var vec__4594 = p__4593;var row = cljs.core.nth.call(null,vec__4594,0,null);var col = cljs.core.nth.call(null,vec__4594,1,null);var box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,acc),cljs.core.PersistentVector.fromArray([row,col], true));return cljs.core.merge.call(null,acc,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"grid","grid",1017085624),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,acc),cljs.core.PersistentVector.fromArray([row,col], true),snake.model.as_snake.call(null,box))], true));
});})(starting_positions))
;return cljs.core.merge.call(null,cljs.core.reduce.call(null,merge_snake,this$,starting_positions),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"snake","snake",1123482802),starting_positions], true));
});
snake.model.GridModel.prototype.snake$model$GameGrid$tick$arity$1 = (function (this$){var self__ = this;
var snake_head = cljs.core.last.call(null,new cljs.core.Keyword(null,"snake","snake",1123482802).call(null,this$));var head_box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),snake_head);var next_box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),this$.snake$model$GameGrid$get_next_position$arity$1(this$));if(cljs.core.truth_(new cljs.core.Keyword(null,"collideable","collideable",2137369098).call(null,next_box)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"food","food",1017053136).call(null,next_box)))
{return cljs.core.dissoc.call(null,cljs.core.merge.call(null,this$.snake$model$GameGrid$move_snake$arity$2(this$,new cljs.core.Keyword(null,"grow","grow",1017085829)),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"events","events",4017542283),new cljs.core.Keyword(null,"grow","grow",1017085829)], true)),new cljs.core.Keyword(null,"tail","tail",1017456578));
} else
{return cljs.core.merge.call(null,this$.snake$model$GameGrid$move_snake$arity$2(this$,new cljs.core.Keyword(null,"erase","erase",1110672920)),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"events","events",4017542283),new cljs.core.Keyword(null,"died","died",1016987478)], true));
}
} else
{return this$.snake$model$GameGrid$move_snake$arity$2(this$,new cljs.core.Keyword(null,"erase","erase",1110672920));
}
});
snake.model.GridModel.prototype.snake$model$GameGrid$get_next_position$arity$1 = (function (this$){var self__ = this;
var direction_vectors = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"up","up",1013907981),cljs.core.PersistentVector.fromArray([-1,0], true),new cljs.core.Keyword(null,"down","down",1016993812),cljs.core.PersistentVector.fromArray([1,0], true),new cljs.core.Keyword(null,"left","left",1017222009),cljs.core.PersistentVector.fromArray([0,-1], true),new cljs.core.Keyword(null,"right","right",1122416014),cljs.core.PersistentVector.fromArray([0,1], true)], true);var snake_head = cljs.core.last.call(null,new cljs.core.Keyword(null,"snake","snake",1123482802).call(null,this$));return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"direction","direction",4346280689).call(null,this$).call(null,direction_vectors),snake_head);
});
snake.model.GridModel.prototype.snake$model$GameGrid$move_snake$arity$2 = (function (this$,directive){var self__ = this;
var snake_tail = cljs.core.first.call(null,new cljs.core.Keyword(null,"snake","snake",1123482802).call(null,this$));var next_position = this$.snake$model$GameGrid$get_next_position$arity$1(this$);var next_box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),next_position);var snake__$1 = ((cljs.core._EQ_.call(null,directive,new cljs.core.Keyword(null,"grow","grow",1017085829)))?new cljs.core.Keyword(null,"snake","snake",1123482802).call(null,this$):cljs.core.vec.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"snake","snake",1123482802).call(null,this$))));var moved_grid = cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"snake","snake",1123482802),cljs.core.conj.call(null,snake__$1,next_position)], true));return cljs.core.merge.call(null,moved_grid,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"grid","grid",1017085624),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),next_position,snake.model.as_snake.call(null,next_box)),new cljs.core.Keyword(null,"tail","tail",1017456578),snake_tail], true));
});
snake.model.GridModel.prototype.snake$model$GameGrid$maybe_erase_tail$arity$1 = (function (this$){var self__ = this;
var tail_box = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),new cljs.core.Keyword(null,"tail","tail",1017456578).call(null,this$));var tail_reset = cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).call(null,this$),new cljs.core.Keyword(null,"tail","tail",1017456578).call(null,this$),snake.model.reset_game_state.call(null,tail_box));var tail_removed = cljs.core.dissoc.call(null,this$,new cljs.core.Keyword(null,"tail","tail",1017456578));if(cljs.core.truth_(tail_box))
{snake.model.erase_BANG_.call(null,tail_box);
return cljs.core.merge.call(null,tail_removed,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"grid","grid",1017085624),tail_reset], true));
} else
{return this$;
}
});
snake.model.GridModel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"rows","rows",1017410891),self__.rows),cljs.core.vector.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685),self__.cols)], true),self__.__extmap));
});
snake.model.GridModel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
snake.model.GridModel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
snake.model.GridModel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__4579){var self__ = this;
return (new snake.model.GridModel(self__.canvas,self__.rows,self__.cols,G__4579,self__.__extmap,self__.__hash));
});
snake.model.GridModel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
snake.model.GridModel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"cols","cols",1016963685),null], true),k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new snake.model.GridModel(self__.canvas,self__.rows,self__.cols,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
snake.model.GridModel.cljs$lang$type = true;
snake.model.GridModel.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"snake.model/GridModel");
});
snake.model.GridModel.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"snake.model/GridModel");
});
snake.model.__GT_GridModel = (function __GT_GridModel(canvas,rows,cols){return (new snake.model.GridModel(canvas,rows,cols));
});
snake.model.map__GT_GridModel = (function map__GT_GridModel(G__4581){return (new snake.model.GridModel(new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,G__4581),new cljs.core.Keyword(null,"rows","rows",1017410891).call(null,G__4581),new cljs.core.Keyword(null,"cols","cols",1016963685).call(null,G__4581),null,cljs.core.dissoc.call(null,G__4581,new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"rows","rows",1017410891),new cljs.core.Keyword(null,"cols","cols",1016963685))));
});
