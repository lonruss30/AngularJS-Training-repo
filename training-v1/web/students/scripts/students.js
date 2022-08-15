var app = angular.module('studentsApp', ['ngRoute']);
 
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/list", {
            templateUrl: "templates/list.html",
            controller: "listCtrl"
        })
        .when("/create", {
            templateUrl: "templates/create.html",
            controller: "createCtrl"
        })
        .when("/update", {
            templateUrl: "templates/update.html",
            controller: "updateCtrl"
        })
        .otherwise({ redirectTo: '/list' });
    $locationProvider.html5Mode(true);
});




//CONTROLLER
app.controller('studentsCtrl', function ($scope, $window,$filter) {
    $scope.date = $filter('date')(new Date(), "MM-dd-yyyy");
    $scope.number = $filter('number')(1, "2");
    $scope.currency = $filter('currency')(1, "Php");
    $scope.uppercase = $filter('uppercase')("asdasda");
    $scope.lowercase = $filter('lowercase')("ASDASDA");

    $scope.arrays = ["Test1", "Test2", "Test3", "Test4"];

    $scope.students = [
        { name: 'Juan Dela Cruz', age: 21, address: 'Pasig' },
        { name: 'Lon Dela Cruz', age: 17, address: 'Manila'}
    ];
});

//CUSTOM FILTER
app.filter('isUnderage', function(){
    return function (val) {

        if (val <= 17)
            return true;
        
        return false;
    };
});

//CUSTOM DIRECTIVE
app.directive('alphaNumeric', function(){
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^A-Za-z0-9]/g, '');

                    if (transformedInput != text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.directive('alphaOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^A-Za-z]/g, '');

                    if (transformedInput != text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput != text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});