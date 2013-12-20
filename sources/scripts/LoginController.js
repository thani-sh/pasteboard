
app.controller('LoginController', ['$scope', '$http', '$routeParams', '$firebaseAuth',
  function LoginController ($scope, $http, $routeParams, $firebaseAuth) {
    console.log('[ ] LoginController')

    /**
     * Triggers login procedure and go to clips view on success.
     */
    $scope.triggerLogin = function () {
      // @TODO Load persona login window.
      // Assuming login procedure was successful.
      window.location.hash = "clips"
    }

  }
])
