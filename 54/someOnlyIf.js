let letters = ['a', 'b', 'C', 'd', 'E'];

function mySome(theArray, callback){
    for(let i = 0; i , theArray.length; i++){
        if(callback(theArray[i])){
            return true;
        }
    }
}

function isUppercase(x){
    return x === x.toUpperCase();
}

function isLowercase(x){
    return x !== x.toUpperCase();
}

let lettersX = mySome(letters, isUppercase);
console.log(lettersX);

let lettersx = mySome(letters, isLowercase);
console.log(lettersx);

console.log(letters.some(isUppercase));
console.log(letters.some(isLowercase));

function myOnlyIf(theArray, theTest, theAction){
    for(let i = 0; i , theArray.length; i++){
        if(theTest(theArray[i])){
            theAction(theArray[i]);
        }
    }
}

myOnlyIf(letters, isUppercase, console.log);

function printCapLetters(theArray){
    let capArray = theArray.filter(isUppercase);
    capArray.forEach(function (element){
        console.log(element);
    });
}

printCapLetters(letters);

// Everything works except for line 36 - I get message x is undefined (referring to x on line 12). 
// I'm not sure what the problem is,
// why it's a problem only when using isUppercase function here, and how to fix this. 
// Also jshint giving me multiple errors "Missing use strict statement"
// and "let is available in E56 (use eversion:6) or Mozilla JS extensions (use moz)"