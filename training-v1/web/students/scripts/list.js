var app = angular.module('studentsApp');
app.controller('listCtrl', function ($scope, $filter, $location, $rootScope) {

    
    $scope.students = [
        { name: 'Juan Dela Cruz', age: 21, address: 'Pasig' },
        { name: 'Lon Dela Cruz', age: 17, address: 'Manila' }
    ];

    if ($rootScope.studentNew != undefined) {
        $scope.students.push($rootScope.studentNew);
        
    }

    if ($rootScope.studentUpdate == 1) {
        $scope.students[$rootScope.studentIndex] = $rootScope.student;
        $rootScope.studentUpdate = 0;
    }

    $scope.create = function () {
        $location.path("create");
    }

    $scope.edit = function (student, index) {
        $rootScope.student = student;
        $rootScope.studentIndex = index;
        alert(index);
        $location.path("update");
    }

    $scope.delete = function (index){
        $scope.students.splice(index,1);
    }
});