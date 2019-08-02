//undefined for variable 

let name 

if (name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

//undefined for function argument6s 
//undefined as funciton return default value 
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//Null as assigned value 
let age = 27;

age = null;

console.log(age)