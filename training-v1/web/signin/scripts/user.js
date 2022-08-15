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