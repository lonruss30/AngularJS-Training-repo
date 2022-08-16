var app = angular.module('userApp');

app.controller('signinCtrl', function ($scope, services) {

    $scope.signin = function () {
        var data = {
            "username": $scope.username,
            "password": $scope.password
        };

        services.signin(data).then(function (result) {

            console.log(result);
            if (result.status == 200) {

            }
            else if (result.status == 400) {

            }
        });
    }

});