(ns snake.core
  (:use [snake.model :only [->Canvas ->GridModel ->GridBox ->SnakeModel
                            construct render! randomize-location
                            with-new-food with-new-snake tick grow-snake
                            maybe-erase-tail]]))

(def *c* (construct (->Canvas)))
(def *grid* (construct (->GridModel *c* 40 40)))
(def *loop* nil)

(def directions {38 :up 40 :down 37 :left 39 :right})

(defn on-keypress [keypress]
  (set! *grid* (merge *grid* {:direction (get directions (.-keyCode keypress))})))

(defn game-over [] ())

(defn game-loop []
  (set! *grid* (tick *grid*))
  (condp = (:events *grid*)
    :grow (set! *grid* (with-new-food *grid*))
    :died (do (js/clearInterval *loop*)
              (game-over))
    (set! *grid* (maybe-erase-tail *grid*)))
  (set! *grid* (dissoc *grid* :events))
  (render! *grid* {}))

(set! *grid* (with-new-snake *grid*))
(set! *grid* (with-new-food *grid*))
(render! *grid* {})

(.addEventListener js/document "keydown" on-keypress)
(def *loop* (js/setInterval game-loop 50))
