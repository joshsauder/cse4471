var app = angular.module("myApp");
app.controller('sqlCtlr', ['$scope', function($scope) {
    //Regular Expression used to filter input from user
    $scope.regex = '^[a-zA-Z0-9_-]{1,14}$';
}]);
