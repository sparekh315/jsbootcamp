let num = 103.941;

console.log(num.toFixed(2));
//allows only two decimal places. Would return 103.94

console.log(Math.round(num));
//rounds to nearest whole number 104
console.log(Math.floor(num));
//force rounds to whole number on bottom 103 instead of 104
console.log(Math.ceil(num));
//force rounds to whole number on top 104 even if decimal places would make more sense to 103.


let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//this ridic complicated formula would generate random number between 10 and 20. 



//Guessing game

let guessingGame = function (guess) {
    let min = 1;
    let max = 5;
    let randomGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
    return guess === randomGenerated;
}

console.log(guessingGame(1));