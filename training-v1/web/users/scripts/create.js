var app = angular.module('usersApp');

app.controller('createCtrl', function ($scope) {
    services.getUsertypes().then(function (result) {
        $scope.usertypes = result;
        console.log(result);
    });


});