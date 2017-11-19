var app = angular.module("myApp");
app.controller('passCtrl', function($scope){
    $scope.passlimit = 0;
    //Array of allowed passwords for username enumeration
    var passStore = ["A1B2@", "GoBucks", "SaveTheCrew"]
    $scope.testPass = function(password){
        $scope.strength = 0;
        //array of tests to run on inputed passwords
        //including numeric, one upper and lowercase letter, one special character
        //and a length of at least 8
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
        //one submit, reset password field
        $scope.password = null;
        $scope.passlimit=0;
    }
    /*
    Below is used for usernameEnumeration
    */
    $scope.incrementPassCount = function(){
        //increment password limit counter
        $scope.passlimit++;
    }
    $scope.checkPass = function(password){
        //check if password is in password array, else increment password counter
        if(passStore.includes(password)){
            $scope.password=null;
            $scope.success = true;
        }else{
            $scope.incrementPassCount();
            $scope.disablePass = $scope.passlimit > 4;
        }
    }
});
