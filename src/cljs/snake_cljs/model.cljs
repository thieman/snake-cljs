(ns snake.model)

(defprotocol Constructable
  (construct [this]))

(defprotocol Renderable
  (render! [this args-map])
  (erase! [this]))

(defprotocol GameBox
  (maybe-collideable [this max-row max-col])
  (reset-game-state [this])
  (as-food [this])
  (as-snake [this]))

(defprotocol GameGrid
  (with-new-food [this])
  (with-new-snake [this])
  (tick [this])
  (get-next-position [this])
  (move-snake [this directive])
  (maybe-erase-tail [this]))

(defrecord Canvas []

  Constructable
  (construct [this]
    (let [canvas-object (.getElementById js/document "snakeGameCanvas")]
      (merge this {:canvas canvas-object
                   :bg-color "white"
                   :context (.getContext canvas-object "2d")}))))

(defrecord GridBox [canvas row col height width]

  Constructable
  (construct [this]
    (merge this {:collideable false :color (:bg-color canvas)}))

  Renderable
  (render! [this {:keys [color]}]
    (let [color (or color (:color this))]
      (set! (.-fillStyle (:context canvas)) color)
      (.fillRect (:context canvas) (* col width) (* row height) width height color)))

  (erase! [this]
    (render! this {:color (:bg-color canvas)}))

  GameBox
  (maybe-collideable [this max-row max-col]
    (if (or (= row 0) (= row max-row) (= col 0) (= col max-col))
      (merge this {:collideable true :color "black"})
      (merge this {:collideable false :color (:bg-color canvas)})))

  (reset-game-state [this]
    (merge this {:collideable false
                 :food false
                 :snake false
                 :color (:bg-color canvas)}))

  (as-food [this]
    (merge (reset-game-state this) {:collideable true
                                    :food true
                                    :color "blue"}))

  (as-snake [this]
    (merge (reset-game-state this) {:collideable true
                                    :snake true
                                    :color "red"})))

(defrecord GridModel [canvas rows cols]

  Constructable
  (construct [this]
    (let [row-height (/ (.-height (:canvas canvas)) rows)
          col-width (/ (.-width (:canvas canvas)) cols)
          box-constructor (fn [row-num col-num]
                             (-> (->GridBox canvas row-num col-num
                                            row-height col-width)
                                 construct
                                 (maybe-collideable (- rows 1) (- cols 1))))
          init-boxes (fn [row-num]
                       (mapv (partial box-constructor row-num) (range cols)))
          grid (mapv init-boxes (range rows))]
      (merge this {:grid grid
                   :row-height row-height
                   :col-width col-width
                   :direction :right})))

  Renderable
  (render! [this _]
    (doseq [box (flatten (:grid this))]
      (render! box {})))

  (erase! [this]
    (doseq [box (flatten (:grid this))]
      (erase! box)))

  GameGrid
  (with-new-food [this]
    (let [test-row (rand-int (- (:rows this) 1))
          test-col (rand-int (- (:cols this) 1))
          box (get-in (:grid this) [test-row test-col])]
      (if (:collideable box)
        (with-new-food this)
        (merge this {:grid (assoc-in (:grid this)
                                     [test-row test-col]
                                     (as-food box))}))))

  (with-new-snake [this]
    (let [starting-positions [[1 3] [1 4] [1 5] [1 6] [1 7]]
          merge-snake (fn [acc [row col]]
                        (let [box (get-in (:grid acc) [row col])]
                          (merge acc {:grid (assoc-in (:grid acc) [row col] (as-snake box))})))]
      (merge (reduce merge-snake this starting-positions) {:snake starting-positions})))

  (tick [this]
    (let [snake-head (last (:snake this))
          head-box (get-in (:grid this) snake-head)
          next-box (get-in (:grid this) (get-next-position this))]
      (if (:collideable next-box)
        (if (:food next-box)
          (-> (move-snake this :grow)
              (merge {:events :grow})
              (dissoc :tail))
          (merge (move-snake this :erase) {:events :died}))
        (move-snake this :erase))))

  (get-next-position [this]
    (let [direction-vectors {:up [-1 0] :down [1 0] :left [0 -1] :right [0 1]}
          snake-head (last (:snake this))]
      (map + ((:direction this) direction-vectors) snake-head)))

  (move-snake [this directive]
    (let [snake-tail (first (:snake this))
          next-position (get-next-position this)
          next-box (get-in (:grid this) next-position)
          snake (if (= directive :grow)
                  (:snake this)
                  (vec (rest (:snake this))))
          moved-grid (merge this {:snake (conj snake next-position)})]
      (merge moved-grid {:grid (assoc-in (:grid this) next-position (as-snake next-box))
                         :tail snake-tail})))

  (maybe-erase-tail [this]
    (let [tail-box (get-in (:grid this) (:tail this))
          tail-reset (assoc-in (:grid this) (:tail this) (reset-game-state tail-box))
          tail-removed (dissoc this :tail)]
      (if tail-box
        (do (erase! tail-box)
            (merge tail-removed {:grid tail-reset}))
        this))))
