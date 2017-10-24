var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/sqlInjection', {
            templateUrl: "exploit_pages/sqlInjection.html"
        })
        .when('/xss', {
            templateUrl : "exploit_pages/xss.html"
        })
        .when('/responseSplitting', {
            templateUrl : "exploit_pages/responseSplitting.html"
        })
        .when('/parameterPollution', {
            templateUrl : "exploit_pages/parameterPollution.html"
        })
        .when('/weakPasswords', {
            templateUrl : "exploit_pages/weakPasswords.html"
        })
        .when('/cors', {
            templateUrl : "exploit_pages/cors.html"
        })
        .when('/bufferOverflow', {
            templateUrl : "exploit_pages/bufferOverflow.html"
        })
        .when('/shellshock', {
            templateUrl : "exploit_pages/shellshock.html"
        })
        .when('/usernameEnumeration', {
            templateUrl : "exploit_pages/usernameEnumeration.html"
        })
        .when('/redirects', {
            templateUrl : "exploit_pages/redirects.html"
        });
});