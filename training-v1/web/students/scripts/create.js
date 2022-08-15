var app = angular.module('studentsApp');

//CONTROLLER
app.controller('createCtrl', function ($scope, $filter, $rootScope, $location) {
    $scope.student = {};

    $scope.create = function () {
        $rootScope.studentNew = $scope.student;
        $location.path("list"); 
    }
});