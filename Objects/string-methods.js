let name = '  Patty Smith '

//Length Property
console.log(name.length);

//Convert to Upper case
console.log(name.toUpperCase());

//Conver to lower case
console.log(name.toLowerCase());

//Includes Method
let password = 'abc123'
console.log(password.includes('fish'));

//Trim 
console.log(name.trim());

let passValid = function(password) {
        return password.length > 8 && !password.includes('password');
        //this works the same way as saying it in an if statement and returning true if criteria is met. 
    }
   

console.log(passValid('adso')); //false
console.log(passValid('abeidkdkdkddkdkd')) //true
console.log(passValid('abeidkdkdkddkdkdpassword')) //false