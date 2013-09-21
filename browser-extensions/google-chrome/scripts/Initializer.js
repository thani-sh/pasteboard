

/**
 * @fileoverview
 * @author mnmtanish@gmail.com
 */

(function () {

  var pasteboard = new Pasteboard();
  pasteboard.attachTo(document.body);
  var channel = new Communications(pasteboard);
  var dropzone = new PasteboardDropzone(channel);
  dropzone.attachTo(document.body);

})();
