
/**
 * Angular JS Controller for the pastboard
 * @param {Object} $scope                AngularJS Scope Object
 * @param {Object} angularFireCollection AngularJS Firebase Collection
 * @param {Object} angularFire           AngularJS Firebase
 * @param {Object} angularFireAuth       AngularJS Firebase Authenticate
 */
function PasteboardCtrl ( $scope, angularFireCollection, angularFire, angularFireAuth ) {

  $scope.user = null;
  $scope.clips = null;
  $scope.document = null;
  $scope.preferences = null;


  /**
   * Call AngularFire Login
   */
  $scope.login = function () {
    angularFireAuth.login('persona');
  };


  /**
   * Call AngularFire Logout
   */
  $scope.logout = function () {
    angularFireAuth.logout();
  };


  /**
   * Change the UI
   * @param  {string} id The id of the section
   */
  $scope.goto = function (id) {
    Array.prototype.forEach.call(document.getElementsByClassName('section'), function (element) {
      element.classList.remove('visible');
    });
    document.getElementById(id).classList.add('visible');
  };


  /**
   * Open a document in pasteboard by changing firebase reference urls
   * @param  {string} doc_id Firebase Document ID (auto generated)
   */
  function opendocument (doc_id) {
    $scope.preferences.opendoc = doc_id;
    doc_url = user_url+'/documents/'+$scope.preferences.opendoc;
    angularFire( new Firebase(doc_url), $scope, 'document' );
    angularFire( new Firebase( doc_url + '/clips' ), $scope, 'clips' );
  }


  /**
   * Create preferences with defaults (usually done with first time users)
   */
  function initPreferences () {
    $scope.preferences = {
      name    : $scope.user.id.split('@')[0]
    , opendoc : 'temporary'
    };
  }


  /**
   * Add a clip to firebase
   * @param {Object} clip The clip object to place inside firebase
   */
  function addClip (trans, clip) {
    var ref = new Firebase( doc_url + '/clips/' ).push();
    ref.set(clip);
  }


  /**
   * Fired when user logs in
   * @param  {Object} e    Error
   * @param  {Object} user Contains user information
   */
  $scope.$on('angularFireAuth:login', function( e, user ) {
    user_url = base_url + '/' + user.id;
    angularFire( new Firebase( user_url+'/preferences' ), $scope, 'preferences' );
    $scope.preferences || initPreferences();
    $scope.preferences.opendoc = $scope.preferences.opendoc || 'temporary';
    opendocument($scope.preferences.opendoc);
    $scope.goto('section-clips');
  });


  /**
   * Fired when user logs out of firebase
   * @param  {Object} e Error
   */
  $scope.$on('angularFireAuth:logout', function(e) {
    $scope.goto('section-guest');
  });


  /**
   * Fired when login is cancelled (error or by user)
   * @param  {Object} e     Error
   * @param  {Object} error Error
   */
  $scope.$on('angularFireAuth:error', function( e, error ) {
    // TODO Handle Login Error
  });


  var channel = new Communications(addClip);
  angularFireAuth.initialize( new Firebase(base_url), { scope: $scope, name: 'user' } );
  document.getElementById('section-guest').classList.add('visible');

}
