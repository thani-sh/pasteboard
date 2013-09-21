
/**
 * Handle messaging between pasteboard and the document via jschannel
 * @param {Pasteboard} pasteboard
 * @return {Communications}
 * @constructor
 */
function Communications (pasteboard) {
  var $this = this;


  function init () {
    $this.pasteboard = pasteboard;
    $this.channel = Communications.createChannel($this.pasteboard.getFrame(), $this.onChannelReady);
    $this.channel.bind('ResizePasteboard', $this.channelResizePasteboard);
  }


  /**
   * Add a clip to pasteboard. Fired when user drops content into the dropzone
   * @param {Object} clip A clip object which contains clip and attribution information
   * @param {Function} callback Callback function fired when addClip executes successfully
   */
  $this.addClip = function (clip, callback) {
    console.log('addClip',clip);
    $this.channel.call({
      method : 'AddClip'
    , params : clip
    , success : callback
    });
  };


  /**
   * Fires when the communications channel is ready
   */
  $this.onChannelReady = function () {
    /* TODO Handle communications channel ready event */
  };


  /**
   * Handler for jschannel to resize wrapper to fill window or to resize back to normal
   * @param {Object} trans jschannel trans object
   * @param {string} size Pasteboard size ['normal', 'maximized']
   */
  $this.channelResizePasteboard = function (trans, size) {
    $this.pasteboard.resize(size);
  };


  init();

}


/**
 * Creates a jschannel with giver iframe
 * @param {Node} iframe
 * @param {Function} callback
 * @return {Object}
 */
Communications.createChannel = function (iframe, callback) {
  return Channel.build({
      window : iframe.contentWindow
    , origin : '*'
    , scope : 'pasteboard'
    , onReady : callback
  });
};
