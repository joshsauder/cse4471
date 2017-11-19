var app = angular.module("myApp");

app.controller('xxsCtrl', ['$scope', '$sce', function($scope, $sce){
	//below is code to be sanatized
    $scope.code = '<span onmouseover="this.textContent=&quot;Got Ya! ' +
        '&quot;">Hover over this text.</span>';
       //trust function never run for safe website
    $scope.trust = function() {
        return $sce.trustAsHtml($scope.code);
    }
}]);