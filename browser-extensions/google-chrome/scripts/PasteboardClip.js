
/**
 * Handle messaging between pasteboard and the document via jschannel
 * @param {Object} fragment A DocumentFragment used to create the clip
 * @return {PasteboardClip}
 * @constructor
 */
function PasteboardClip (fragment) {
  var $this = this;


  /**
   * Initializer
   */
  function init () {
    $this.fragment = fragment;
    $this.elements_raw = PasteboardClip.extract($this.fragment);
    $this.elements = PasteboardClip.clean($this.elements_raw);
  }


  /**
   * Creates the clip object which is sent to the pasteboard later
   * @return {Object}
   */
  $this.getClip = function () {
    console.log($this);
    return {
        content_raw : $this.elements_raw.innerHTML
      , content : $this.elements.innerHTML
    };
  };


  init();

}


/**
 * Wraps nodes inside document fragment and returns the parent node
 * @param {Object} fragment A DocumentFragment
 * @return {Object}
 */
PasteboardClip.extract = function (fragment) {
  var container = document.createElement('div');
  container.appendChild(fragment.cloneNode());
  return container;
};


/**
 * Cleans up html to show in pasteboard UI
 * @param {Object} elements A DocumentFragment
 * @return {Object}
 */
PasteboardClip.clean = function (elements) {
  Array.prototype.forEach.call(elements.getElementsByTagName('*'), function (el) {
    var badTags = ['SCRIPT','LINK','STYLE'];
    var badAttrs = ['ID','CLASS','DRAGGABLE','WIDTH','HEIGHT','STYLE'];

    if (badTags.indexOf(el.nodeName) >= 0){
      el.parentElement.removeChild(el);
      return null;
    };

    var attributes = [];
    for ( var i = 0; i < el.attributes.length; ++i )
      attributes.push(el.attributes.item(i));

    Array.prototype.forEach.call(attributes, function (attr) {
      if(badAttrs.indexOf(attr.name.toUpperCase()) >= 0){
        el.removeAttribute(attr.name);
      }
    });

    if (el.nodeName == 'IMG') {
      // Replace <img> relative paths with absolute paths
      el.src = el.src;
    };

  });
  return elements;
};
