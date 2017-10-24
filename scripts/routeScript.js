var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/sqlInjection', {
            templateUrl: "sqlInjection.html"
        })
        .when('/xss', {
                templateUrl : "xss.html"
        })
        .when('/');
});