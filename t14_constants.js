/****************************
 Name of task: Intro to constants
 Name: Tikshan
 Date: Term two week six 2025
 Purpose:  Learning while loops in javascript
*****************************/


//Variables
const MINAGE = 0;
const MAXAGE = 100;
let userAge;
let userAgeIsInvalid = true;
// userAge : loop while user's reply is invalid
while(userAgeIsInvalid) {
    userAge = prompt("Nice name, " + userName + " Please enter your age ?");
    if(userAge == null || userAge == "" || userAge == " " || isNaN (userAge)|| userAge < MINAGE || userAge > MAXAGE) {
        alert("Invalid input : you must enter a valid age between " + MINAGE + " and " + MAXAGE);
    }
    else { // Age is valid, so exit the userAhe loop by setting while condition loop condition
        userAgeIsInvalid = false;
    }
}


console.log ("You are: " + userAge);
/****************************
Main Code
****************************/




/**************************** 
Functions
****************************/