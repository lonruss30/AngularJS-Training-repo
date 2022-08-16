var app = angular.module('usersApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap']);

app.controller('usersCtrl', function ($scope, services) {
    services.profile().then(function (result) {
        $scope.profile = result;
        console.log($scope.profile);
    });
});

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

app.service('services', function ($http, $window) {
    services = {};

    var token = localStorage.getItem('token');
    var surl = localStorage.getItem('link');

    services.profile = function () {
        var result = $http({
            method: 'GET',
            url: surl + 'api/my/basura/users/profile',
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            return response.data;
        }, function (err) {
            return err;
        });
        return result;
    };
    
    services.getUsers = function () {
        var result = $http({
            method: 'GET',
            url: surl + 'api/my/basura/users',
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            return response.data;
        }, function (err) {
            return err;
        });
        return result;
    };

    services.getUser = function (id) {
        var result = $http({
            method: 'GET',
            url: surl + 'api/my/basura/users/' + id,
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            return response.data;
        }, function (err) {
            return err;
        });
        return result;
    };

    services.createUser = function (data) {

        var result = $http({
            method: 'POST',
            url: surl + 'api/my/basura/users',
            headers: {'Authorization': 'Bearer '+token},
            data: data
        }).then(function (response) {
            return response;
        }, function (err) {
            return err;
        });
        return result;
    };

    services.updateUser = function (id, data) {
        var result = $http({
            method: 'PUT',
            url: surl + 'api/my/basura/users/' + id,
            headers: { 'Authorization': 'Bearer ' + token },
            data: data
        }).then(function (response) {
            return response;
        }, function (err) {
            return err;
        });
        return result;
    };

    services.getUsertypes = function () {
        var result = $http({
            method: 'GET',
            url: surl + 'api/my/basura/user/types?status=active',
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            return response.data;
        }, function (err) {
            if (err.status == 401) {
                $window.location.href = "login/index.html"
            }
            return err;
        });
        return result;
    };
    return services;
});

app.directive('validationError', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch(attrs['validationError'], function (errMsg) {
                if (elem[0] && elem[0].setCustomValidity) {
                    elem[0].setCustomValidity(errMsg);
                }
                if (ctrl) {
                    ctrl.$setValidity('validationError', errMsg ? false : true);
                }
            });
        }
    }
});



