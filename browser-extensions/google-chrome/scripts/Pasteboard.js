
/**
 *
 * @constructor
 */
function Pasteboard () {
  var $this = this;

  function init () {
    $this.iframe = document.createElement('iframe');
    $this.iframe.src = 'http://localhost:10080';
    $this.wrapper = document.createElement('div');
    $this.wrapper.id = 'cc-pasteboard';
    $this.wrapper.appendChild($this.iframe);
    window.addEventListener('dragend', $this.hide, false);
  }


  /**
   * Shows the wrapper
   */
  $this.show = function () {
    $this.wrapper.classList.add('visible');
  };


  /**
   * Hides the wrapper
   */
  $this.hide = function () {
    $this.wrapper.classList.remove('visible');
  };


  /**
   * Get the pasteboard iframe
   * @return {Node}
   */
  $this.getFrame = function() {
    return $this.iframe;
  };



  /**
   * Attachs the wrapper into given element or document.body
   * @param {Node} parent Element in document to attach the wrapper
   */
  $this.attachTo = function (parent) {
    parent = parent || document.body;
    parent.appendChild($this.wrapper);
  };


  /**
   * Resize the pasteboard wrapper. Used with jschannel.
   * @param {string} size Pasteboard size ['normal', 'maximized']
   */
  $this.resize = function(size) {
    // FIXME Rewrite to support multiple sizes
    if (size == 'maximized') {
      $this.wrapper.classList.add('maximized');
    } else {
      $this.wrapper.classList.remove('maximized');
    };
  };


  init();

}
