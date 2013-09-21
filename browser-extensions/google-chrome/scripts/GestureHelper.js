
/**
 * Identify and handle drag gestures
 * @param {Function} handler Fired with drag gesture
 * @param {number=} timeout The interval used to check for a gesture in milliseconds eg. 300
 * @param {number=} threshold The pixel distance to detect a drag movement in pixels eg. 5
 * @constructor
 */
function GestureHelper (handler, timeout, threshold) {
  var $this = this;


  /**
   * Initializer
   */
  function init () {
    $this.handler = handler || null;
    $this.timeout = timeout || 300;
    $this.threshold = threshold || 5;
    $this.posOld = {x : 0, y : 0};
    $this.posNew = {x : 0, y : 0};
    setInterval($this.onTick, $this.timeout);
    window.addEventListener('dragover', $this.update, false);
  }


  /**
   * Runs by the timer and tries to detect a drag gesture towards page bottom
   * @param {GestureHelper} $$this Used to make the object variable available inside interval function
   */
  $this.onTick = function() {
    var diff = $this.posNew.y - $this.posOld.y;
    diff > $this.threshold && $this.handler();
    $this.posOld = $this.posNew;
  };


  /**
   * Updates dragged mouse position on dragover event
   * @param {Event} event Mouse drag event used to get grad position
   */
  $this.update = function(event) {
    $this.posNew = {x : event.clientX, y : event.clientY};
  };


  init();

}
