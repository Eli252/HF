var myApp = myApp || {};

myApp.Utils = (function(input){

    input.stringCaseInsensitiveEquals = function(string1, string2){
        return string1.toUpperCase() === string2.toUpperCase();
    };

    return input;

}(myApp.Utils || {}));