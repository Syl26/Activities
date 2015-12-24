angular.module("activities")
.controller("profilesController", function($scope, $location, $timeout, $rootScope, $routeParams){
    console.log("This is the profile controller");

    $scope.param = $routeParams.userId;

    //alert($routeParams.userId);

    $scope.profile = {
        name: "Jon",
        city: "Koh Tao",
        activities: ["Scuba diving", "Play guitar", "Sing in the shower"]
    };

    $scope.goToIndex = function() {
        $timeout(function() {
            $location.path('/profiles/' + $scope.userId);
        }, 3000);
    };

    $rootScope.name = "Jon";
    $scope.name = "Sylwia";
});