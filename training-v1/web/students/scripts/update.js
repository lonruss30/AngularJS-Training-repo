var app = angular.module('studentsApp');

//CONTROLLER
app.controller('updateCtrl', function ($scope, $filter, $rootScope, $location) {
    console.log($rootScope.student);
    console.log($rootScope.studentIndex);

    $scope.update = function () {
        $rootScope.studentUpdate = 1;
        $location.path("list");
    }
});