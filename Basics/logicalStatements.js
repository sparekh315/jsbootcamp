
//Logical And Operator - True if both sides are true. False otherwise.
//Logicial Or Operator - True if at least one side is true. False otherwise. 


let temp = 65;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice')
} else if (temp <= 0 || temp >= 110) {
    console.log('Do not go outside you fool')
} else {
    console.log('Eh, do whatever')
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Two Vegan Menus")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Give one Vegan Menu and One Regular Menu")
} else {
    console.log("Give Regular Menus")
}