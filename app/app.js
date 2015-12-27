angular.module("activities", ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'homeController',
            })
            .when('/profiles/:userId', {
                templateUrl: 'app/views/profiles.html',
                controller: 'profilesController'
            })
            .when('/search', {
                templateUrl: 'app/views/search.html',
                controller: 'searchController',
            })
            .otherwise({
                redirectTo: '/'
            });
    });