// not sure if this is what was desired. function does not return
// object, only 2 functions.
const week = (function (){
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Shabbos'];
    
    return {
        getDayName: function(number){
            return days[number - 1];
        },
        getDayNumber: function(name){
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i + 1;
                }
            }
        }
    };

}());

console.log(week.getDayName(3));
console.log(week.getDayNumber("Tuesday"));

const calc = (function(){
    let rate = 0;
    let years = 0;

    return{
        setRate: function(number){
        rate = number;
        },

        setYears: function(number){
        years = number;
        },

        calculateInterest: function(number){
            return number * rate * years;
        }
    }

}());

calc.setRate(.15);
calc.setYears(2);
console.log(calc.calculateInterest(20000));