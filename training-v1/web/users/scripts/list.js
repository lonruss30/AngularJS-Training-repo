var app = angular.module('usersApp');

app.controller('listCtrl', function ($scope, $location, $rootScope) {
    $scope.page = 1;
    $scope.selectvalue = '15';

    services.getUsers().then(function (result) {
        $scope.users = result;
        console.log(result);
    });

    $scope.create = function () {
        $location.path('create');
    }

    $scope.edit = function (id) {
        $rootScope.userId = id;
        $location.path('update');
    }; 
});