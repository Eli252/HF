let original = [2, 4, 6];

let doubler = function(input){
    let doubled = [];
    for(let i = 0; i < input.length; i++){
        doubled [i] = input[i] * 2;
        }
        return doubled;
    }

doubler(original);
console.log(original);
console.log(doubler(original));