angular.module("activities")
    .controller("profileFormController", function ($scope) {
        console.log("I am in personalController :)")
        $scope.skill = "";
        $scope.skillsArray = [];
        $scope.addskill = function () {
            console.log(" :) ")
            console.log($scope.skill)
            $scope.skillsArray.push($scope.skill)
            $scope.skill = "";
        }

        $scope.skillsArray = ["Scuba diving", "Basketball", "Cooking"];

        $scope.deleteSkill = function (index) {
            console.log(":)" + index + ":)");
        }
    });