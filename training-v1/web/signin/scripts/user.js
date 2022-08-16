var app = angular.module('userApp', ['ngRoute']);


app.controller('userCtrl', function ($scope) {
    
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "signin/templates/signin.html",
            controller: "signinCtrl"
        })
        .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});

app.service('services', function ($http, $window) {
    services = {};
    //Set the link once in upon open of the project
    localStorage.setItem('link', 'https://mybasura-api.2sds.com/');

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