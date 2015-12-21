angular.module("activities", ["ngRoute"])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'homeController',
  })
  .when('/profiles', {
    templateUrl: 'app/views/profiles.html',
    controller: 'profilesController'
  });
});