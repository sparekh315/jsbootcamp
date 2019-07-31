//If account is locked, it should return one message regardless of user. If admin, and unlocked, return a message. If general user, and unlocked, return another messge. 

let isAccountLocked = false;
let userRole = "admin";

//checks to see if true or false
if (isAccountLocked) {
    console.log("Account is locked");
}else if (userRole === 'admin') { //checks if admin is role
    console.log("Welcome Admin!")
} else {      //prints this if any other user besides admin logs in. 
    console.log("Welcome!")
}

let temp = 45;

if (temp <= 40) {
    console.log("It is Freezing!")
} else if (temp >= 90) {
    console.log("It is Hot Outside")
} else {
    console.log("Go for it. It is pretty nice.")
}