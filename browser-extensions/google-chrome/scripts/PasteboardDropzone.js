
/**
 * Constructs and manages the dropzone and handle drop events
 * @param {Function} handler Fired with content drop event
 * @constructor
 */
function PasteboardDropzone (channel) {
  var $this = this;


  /**
   * Initializer
   */
  function init () {
    $this.channel = channel;
    $this.gestures = new GestureHelper($this.show, 300, 5);
    $this.draghelper = new DragHelper();
    $this.dropzone = document.createElement('div');
    $this.dropzone.id = 'cc-dropzone';
    $this.dropzone.innerHTML = '<span>DROP HERE</span>';
    $this.dropzone.addEventListener('dragenter', $this.onDragEnter, false);
    $this.dropzone.addEventListener('dragleave', $this.onDragLeave, false);
    $this.dropzone.addEventListener('dragover', $this.onDragOver, false);
    $this.dropzone.addEventListener('drop', $this.onDrop, false);
    window.addEventListener('dragend', $this.hide, false);
  }


  /**
   * Shows the dropzone
   */
  $this.show = function () {
    $this.dropzone.classList.add('visible');
  };


  /**
   * Hides the dropzone
   */
  $this.hide = function () {
    $this.dropzone.classList.remove('visible');
  };


  /**
   * Attachs the dropzone into given element or document.body
   * @param {Node} parent Element in document to attach the dropzone
   */
  $this.attachTo = function (parent) {
    parent = parent || document.body;
    parent.appendChild($this.dropzone);
  };


  /**
   * Fires when the dragged element enters the dropzone
   * @param {Event} event
   */
  $this.onDragEnter = function(event) {
    event.preventDefault();
    $this.dropzone.classList.add('hover');
  };


  /**
   * Fires when the dragged element leaves the dropzone
   * @param {Event} event
   */
  $this.onDragLeave = function(event) {
    event.preventDefault();
    $this.dropzone.classList.remove('hover');
  };


  /**
   * Prevents default handler in order to make the drop handler work
   * @param {Event} event
   */
  $this.onDragOver = function(event) {
    event.preventDefault();
  };


  /**
   * Handles content drop and fires the handler
   * @param {Event} event
   */
  $this.onDrop = function(event) {
    event.preventDefault();
    $this.dropzone.classList.remove('hover');
    var content = window.getSelection().getRangeAt(0).cloneContents();
    var clip = new PasteboardClip(content).getClip();
    $this.channel.addClip(clip);
  };


  init();

}
