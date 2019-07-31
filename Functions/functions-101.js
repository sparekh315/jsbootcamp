
//Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log (value, otherValue);

let conversion = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

let oneTemp = conversion(32);
let otherTemp = conversion(68);


console.log(oneTemp, otherTemp);