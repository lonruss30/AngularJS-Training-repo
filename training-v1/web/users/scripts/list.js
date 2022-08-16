var app = angular.module('usersApp');

app.controller('listCtrl', function ($scope, $location) {
    $scope.page = 1;
    $scope.selectvalue = '15';

    services.getUsers().then(function (result) {
        $scope.users = result;
        console.log(result);
    });

    $scope.create = function () {
        $location.path('create');
    }
});