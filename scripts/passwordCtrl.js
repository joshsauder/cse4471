var app = angular.module("myApp");
app.controller('passCtrl', function($scope){
    $scope.passlimit = 0;
    var passStore = ["A1B2@", "GoBucks", "SaveTheCrew"]
    $scope.testPass = function(password){
        $scope.strength = 0;
        var tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/];
        if(password.length > 8){
            $scope.strength++;
        }
        for(var i in tests){
            var testExp = new RegExp(tests[i]);
            if(testExp.test(password)){
                $scope.strength++;
            }
        }
    }
    $scope.submit = function(password){
        $scope.password = null;
        $scope.passlimit=0;
    }
    $scope.incrementPassCount = function(){
        $scope.passlimit++;
    }
    $scope.checkPass = function(password){
        if(passStore.includes(password)){
            $scope.password=null;
            $scope.success = true;
        }else{
            $scope.incrementPassCount();
            $scope.disablePass = $scope.passlimit > 4;
        }
    }
});
