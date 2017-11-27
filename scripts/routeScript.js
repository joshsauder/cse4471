/*
Routing script used to provide navigation through the webpage.

Contributors: Josh Sauder, Sam Lewis, Richard Feldtz
 */

var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);
/*
Depending on what button is clicked, route to the following html page using angular's routing directive
 */
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "exploit_pages/home.html"
        })
        .when('/insecurePasswords', {
            templateUrl: "exploit_pages/insecurePasswords.html"
        })
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
        .when('/https', {
            templateUrl : "exploit_pages/httpVsHttps.html"
        })
        .when('/usernameEnumeration', {
            templateUrl : "exploit_pages/usernameEnumeration.html"
        });
});