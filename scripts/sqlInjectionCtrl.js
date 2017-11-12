var app = angular.module("myApp");
app.controller('sqlCtlr', ['$scope', function($scope) {
    $scope.regex = '^[a-zA-Z0-9_-]+$';
}]);
