﻿var app = angular.module('usersApp');

app.controller('updateCtrl', function ($scope, $rootScope, $location) {
    services.getUsertypes().then(function (result) {
        $scope.usertypes = result;
        console.log(result);
    });

    services.getUser($rootScope.userId).then(function (result) {
        $scope.user = result;
        console.log(result);
    });

    $scope.update = function () {
        var data = {
            "username": $scope.user.Username,
            "firstname": $scope.user.Firstname,
            "email": $scope.user.Email,
            "lastname": $scope.user.Lastname,
            "contactnumber": $scope.user.ContactNumber,
            "usertypeid": $scope.user.UsertypeId

        };

        services.updateUser($rootScope.userId, data).then(function (result) {
            if (result.status == 400) {
                swal(result.data.Message, "", "error");
            } else if (result.status == 500) {
                swal("Internal Server Error", "", "error");
            } else if (result.status == 200) {
                swal("Success", "", "success");
                $location.path("/list")
            }
        });
    }
   

});