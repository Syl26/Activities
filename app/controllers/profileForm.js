angular.module("activities")
    .controller("profileFormController", function ($scope) {
        console.log("I am in personalController :)");

        $scope.user = {};

        $scope.showPasswordError = false;
        $scope.showFullnameError = false;
        $scope.showUsernameError = false;
        $scope.showEmailError = false;
        $scope.showSkillsError = false;
        $scope.showPasswordLengthError = false;

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
            if (!checkForm()) {
                return;
            }

            $scope.user.skills = $scope.skillsArray;
            console.log($scope.user);
            console.log("Save this user in the databse");

            clearForm();

        };

        var clearForm = function () {
            $scope.user = {};
            $scope.skillsArray = [];

            $scope.showPasswordError = false;
            $scope.showFullnameError = false;
            $scope.showUsernameError = false;
            $scope.showEmailError = false;
            $scope.showSkillsError = false;
            $scope.showPasswordLengthError = false;
        };

        var checkForm = function () {
            var result = true;

            if (!$scope.user.name) {
                $scope.showUsernameError = true;
                result = false;
            }

            if (!$scope.user.fullname) {
                $scope.showFullnameError = true;
                result = false;
            }

            if (!$scope.user.password) {
                $scope.showPasswordError = true;
                result = false;
            }

            if($scope.user.password != undefined &&
                $scope.user.password != null &&
                $scope.user.password.length < 5)
            {
                $scope.showPasswordLengthError = true;
                result = false;
            }

            if (!$scope.user.email) {
                $scope.showEmailError = true;
                result = false;
            }

            if($scope.skillsArray.length == 0) {
                $scope.showSkillsError = true;
                result = false;
            }

            return result;
        };
    });