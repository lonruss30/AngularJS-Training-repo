var app = angular.module('usersApp', ['ngRoute']);

app.controller('usersCtrl', function ($scope) {

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

    services.signin = function (data) {

        var result = $http({
            method: 'POST',
            url: surl + 'api/my/basura/auth/users/signin', data: data
        }).then(function (response) {
            return response;
        }, function (err) {
            return err;
        });
        return result;
    };
    return services;
});



