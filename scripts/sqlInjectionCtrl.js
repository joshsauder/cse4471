/*
Regular expression created to filter input in the SQL Injection Example.

Contributors: Richard Feldtz
 */
var app = angular.module("myApp");
app.controller('sqlCtlr', ['$scope', function($scope) {
    //Regular Expression used to filter input from user
    $scope.regex = '^[a-zA-Z0-9_-]{1,14}$';
}]);
