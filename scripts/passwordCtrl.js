/*
Algorithm used to determine estimates of brute force attempts of guessing a entered password.

Contributors: Sam Lewis, Josh Sauder, Richard Feldtz
 */
var app = angular.module("myApp");
app.controller('passCtrl', function($scope){
    $scope.passlimit = 0;
    //Array of allowed passwords for username enumeration
    var passStore = ["A1B2@", "GoBucks", "SaveTheCrew"]
    $scope.testPass = function(password){
        $scope.strength = 0;
        //array of tests to run on inputted passwords
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
    };

    $scope.submit = function(password){
        //one submit, reset password field
        $scope.password = null;
        $scope.passlimit=0;

        /*
          Below is used for usernameEnumeration
        */
        var possibleCharacters = 0;
        var combinations;
        //number of seconds to calculate a password hash on a standard desktop computer
        var standardRate = 1.7*Math.pow(10,-6);
        //number of seconds to calculate a password hash using a standard GPU
        var gpuRate = 1.7*Math.pow(10,-8);
        //number of seconds to calculate a password hash using a supercomputer or large bot-net
        var supercomputerRate = 1.7*Math.pow(10,-11);
        var rates = [standardRate, gpuRate, supercomputerRate];
        var seconds;
        var time;
        var unit;
        var returnString;

        var lowercase = false;
        var uppercase = false;
        var specialChar = false;
        var number = false;
        var passwordArray = password.split('');
        //iterate through characters in password to determine what types of characters it contains
        for (var i = 0; i < passwordArray.length; i++) {
            if ((passwordArray[i] >= 'a' && passwordArray[i] <= 'z') && !lowercase) {
                possibleCharacters += 26;
                lowercase = true;
            } else if ((passwordArray[i] >= 'A' && passwordArray[i] <= 'Z') && !uppercase) {
                possibleCharacters += 26;
                uppercase = true;
            } else if ((passwordArray[i] >= '0' && passwordArray[i] <= '9') && !number) {
                possibleCharacters += 10;
                number = true;
            } else if (((passwordArray[i] >= ' ' && passwordArray[i] <= '/')
                    || (passwordArray[i] >= ':' && passwordArray[i] <= '@')
                    || (passwordArray[i] >= '[' && passwordArray[i] <= '`')
                    || (passwordArray[i] >= '{' && passwordArray[i] <= '~'))
                && !specialChar) {
                possibleCharacters += 33;
                specialChar = true;
            }
        }
        //calculate total number of possibilities given used character types and length
        combinations = Math.pow(possibleCharacters,password.length);

        for (i = 0; i < 3; i++) {
            //calculate average amount of time to brute force at different hashing rates
            seconds = combinations*rates[i] / 2;
            //translate number of seconds to more understandable unit of time
            if (seconds < 60) {
                time = seconds;
                unit = "seconds";
            } else if (seconds < 3600) {
                time = seconds / 60;
                unit = "minutes";
            } else if (seconds < 86400) {
                time = seconds / 3600;
                unit = "hours";
            } else if (seconds < 2592000) {
                time = seconds / 86400;
                unit = "days";
            } else if (seconds < 31104000) {
                time = seconds / 2592000;
                unit = "months";
            } else if (seconds < 3110400000) {
                time = seconds / 31104000;
                unit = "years";
            } else if (seconds < 3110400000000) {
                time = seconds / 3110400000;
                unit = "centuries";
            } else {
                time = -1;
                unit = "a very long time";
            }
            //format time estimates
            if (i == 0) {
                if (time < 0) {
                    returnString = "Your password, on average, would take " + unit
                        + " to crack with a brute force attack on a standard computer.\n";
                } else {
                    returnString = "Your password would take approximately " + time.toFixed(2) + " " + unit
                        + " to crack with a brute force attack on a standard computer.\n";
                }
            } else if (i == 1) {
                if (time < 0) {
                    returnString += "It would take, on average, " + unit
                        + " to crack with a brute force attack on a computer using a powerful GPU.\n";
                } else {
                    returnString += "It would take approximately " + time.toFixed(2) + " " + unit
                        + " to crack with a brute force attack on a computer using a powerful GPU.\n";
                }
            } else if (i == 2) {
                if (time < 0) {
                    returnString += "It would take, on average, " + unit
                        + " to crack with a brute force attack using a supercomputer or large botnet.";
                } else {
                    returnString += "It would take approximately " + time.toFixed(2) + " " + unit
                        + " to crack with a brute force attack using a supercomputer or large botnet.";
                }
            }
        }
        return returnString;
    };

    $scope.incrementPassCount = function(){
        //increment password limit counter
        $scope.passlimit++;
    };
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
