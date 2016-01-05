angular.module("activities")
    .controller("personalController", function ($scope) {
        console.log("I am in personalController :)")
        $scope.skill = "";
        $scope.skillsArray = [];
        $scope.addskill = function () {
            console.log(" :) ")
            console.log($scope.skill)
            $scope.skillsArray.push($scope.skill)
            $scope.skill = "";
        }


    });