angular.module("activities")
    .controller("profileFormController", function ($scope) {
        console.log("I am in personalController :)");

        $scope.user = {};

        $scope.skill = "";
        $scope.skillsArray = [];
        $scope.addskill = function () {
            console.log(" :) ")
            console.log($scope.skill)
            $scope.skillsArray.push($scope.skill)
            $scope.skill = "";
        };

        $scope.skillsArray = [];

        $scope.deleteSkill = function (index) {
            $scope.skillsArray.splice(index, 1);
        };

        $scope.createUser = function () {
            if(!checkForm()) {
                return;
            }

            $scope.user.skills = $scope.skillsArray;
            console.log($scope.user);
            console.log("Save this user in the databse");

            clearForm();
        };

        var clearForm = function() {
            $scope.user = {};
            $scope.skillsArray = [];
        };

        var checkForm = function() {
            if (!$scope.user.name) {
                console.log("You have to fill the name");
                return false;
            }

            if(!$scope.email) {
                console.log("You have to fill the email");
                return false;
            }

            console.log("everything was ok in validation");
            return true;
        };
    });