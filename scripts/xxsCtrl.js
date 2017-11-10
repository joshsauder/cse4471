var app = angular.module("myApp");

app.controller('xxsCtrl', ['$scope', '$sce', function($scope, $sce){
    $scope.code = '<span onmouseover="this.textContent=&quot;Got Ya! ' +
        '&quot;">Hover over this text.</span>';
    $scope.trust = function() {
        return $sce.trustAsHtml($scope.code);
    }
}]);