
/**
 * Handle messaging between pasteboard and the document via jschannel
 * @param {Function} handler
 * @constructor
 */
function Communications (handler) {
  var $this = this;


  /**
   * Initializer
   */
  function init () {
    $this.handler = handler;
    $this.channel = Communications.createChannel();
    $this.channel.bind('addClip', handler);
  }


  init()

}


/**
 * Creates a jschannel with parent frame
 * @return {Object}
 */
Communications.createChannel = function () {
  return Channel.build({
      window : window.parent
    , origin : '*'
    , scope : 'pasteboard'
  });
};
