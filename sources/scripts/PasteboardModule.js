
var app = angular.module('pasteboard', ['ngRoute', 'firebase'])

app.config(function ConfigRoutes ($routeProvider) {
  $routeProvider
    .when('/', {redirectTo: '/login'})
    .when('/login', {templateUrl: 'views/LoginView.html', controller: 'LoginController'})
    .when('/clips', {templateUrl: 'views/ClipsView.html', controller: 'ClipsController', authRequired: true})
    .otherwise({redirectTo: '/'})
})
