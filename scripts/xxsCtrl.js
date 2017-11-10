var app = angular.module("myApp");

app.controller('xxsCtrl', ['$scope', '$sce', function($scope, $sce){
    $scope.code = '<p style="color:blue">an html\n' +
        '<em onmouseover="this.context=\'Goodbye\'">click me!</em>\n' +
        'snippet</p>';
    $scope.trust = function() {
        return $sce.trustAsHtml($scope.code);
    }
}]);