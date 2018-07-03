var myApp = myApp || {};

myApp.Utils = (function(input){
    'use strict';

    input.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Shabbos'],

    input.getDayName = function(number){
        return input.days[number - 1];
    },

    input.getDayNumber = function(name){
        for (let i = 0; i < input.days.length; i++) {
            if (input.days[i] === name) {
                return i + 1;
            }
        }
    }

    return input;

}(myApp.Utils || {}));