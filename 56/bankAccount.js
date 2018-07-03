let account01 = {
    balance: 1000
};

let account02 = {
    balance: 1800
};

function addInterest(percent){
    'use strict';
    this.balance += this.balance * percent;
}

addInterest.call(account01, .10);
addInterest.call(account02, .15);