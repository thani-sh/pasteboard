
angular.module('pasteboard', ['firebase'])
  .controller(
    'PasteboardCtrl'
  , ['$scope', 'angularFireCollection', 'angularFire', 'angularFireAuth', PasteboardCtrl ]
  );
