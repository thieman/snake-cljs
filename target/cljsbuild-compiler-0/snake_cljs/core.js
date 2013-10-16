goog.provide('snake.core');
goog.require('cljs.core');
goog.require('snake.model');
goog.require('snake.model');
snake.core._STAR_c_STAR_ = snake.model.construct.call(null,snake.model.__GT_Canvas.call(null));
snake.core._STAR_grid_STAR_ = snake.model.construct.call(null,snake.model.__GT_GridModel.call(null,snake.core._STAR_c_STAR_,40,40));
snake.core._STAR_loop_STAR_ = null;
snake.core.directions = cljs.core.PersistentArrayMap.fromArray([38,new cljs.core.Keyword(null,"up","up",1013907981),40,new cljs.core.Keyword(null,"down","down",1016993812),37,new cljs.core.Keyword(null,"left","left",1017222009),39,new cljs.core.Keyword(null,"right","right",1122416014)], true);
snake.core.on_keypress = (function on_keypress(keypress){return snake.core._STAR_grid_STAR_ = cljs.core.merge.call(null,snake.core._STAR_grid_STAR_,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"direction","direction",4346280689),cljs.core.get.call(null,snake.core.directions,keypress.keyCode)], true));
});
snake.core.game_over = (function game_over(){return cljs.core.List.EMPTY;
});
snake.core.game_loop = (function game_loop(){snake.core._STAR_grid_STAR_ = snake.model.tick.call(null,snake.core._STAR_grid_STAR_);
var pred__4630_4633 = cljs.core._EQ_;var expr__4631_4634 = new cljs.core.Keyword(null,"events","events",4017542283).call(null,snake.core._STAR_grid_STAR_);if(pred__4630_4633.call(null,new cljs.core.Keyword(null,"grow","grow",1017085829),expr__4631_4634))
{snake.core._STAR_grid_STAR_ = snake.model.with_new_food.call(null,snake.core._STAR_grid_STAR_);
} else
{if(pred__4630_4633.call(null,new cljs.core.Keyword(null,"died","died",1016987478),expr__4631_4634))
{clearInterval(snake.core._STAR_loop_STAR_);
snake.core.game_over.call(null);
} else
{snake.core._STAR_grid_STAR_ = snake.model.maybe_erase_tail.call(null,snake.core._STAR_grid_STAR_);
}
}
snake.core._STAR_grid_STAR_ = cljs.core.dissoc.call(null,snake.core._STAR_grid_STAR_,new cljs.core.Keyword(null,"events","events",4017542283));
return snake.model.render_BANG_.call(null,snake.core._STAR_grid_STAR_,cljs.core.PersistentArrayMap.EMPTY);
});
snake.core._STAR_grid_STAR_ = snake.model.with_new_snake.call(null,snake.core._STAR_grid_STAR_);
snake.core._STAR_grid_STAR_ = snake.model.with_new_food.call(null,snake.core._STAR_grid_STAR_);
snake.model.render_BANG_.call(null,snake.core._STAR_grid_STAR_,cljs.core.PersistentArrayMap.EMPTY);
document.addEventListener("keydown",snake.core.on_keypress);
snake.core._STAR_loop_STAR_ = setInterval(snake.core.game_loop,50);
