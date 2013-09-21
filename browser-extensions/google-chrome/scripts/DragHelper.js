
/**
 * Helper functions related to drag and drop
 * @constructor
 */
function DragHelper () {
  var images = document.getElementsByTagName('img');
  Array.prototype.forEach.call(images, function (el) {
    el.addEventListener('dragenter', DragHelper.onImageDrag, false);
  });
}


/**
 * Handles image dragenter event and if necessary sets the image as the selection
 * @param {Event} event The dragenter event
 */
DragHelper.onImageDrag = function (event) {
  event.preventDefault();
  var selection = window.getSelection();
  if (selection.type == 'Caret' || selection.type == 'None' || !selection.containsNode(this)) {
    var range = document.createRange();
    range.selectNode(this);
    selection.removeAllRanges();
    selection.addRange(range);
  };
};
