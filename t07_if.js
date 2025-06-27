  /****************************
 Name of task: Intro to conditional statements
 Name: Tikshan
 Date: Term two week two 2025
 Purpose:  Learning connditional statements
*****************************/


//Variables
let MINAGE = 12
let MAXAGE = 19
var userName = alert(" Welcome To my program, Verify your age");
let userAge = prompt("Pick a number from 0 to 100 to identify your age");
if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
     // check if user has clicked cancel
 if (userAge == null){
   // end the program
   return;
 }
}
/****************************
Main Code
****************************/


/**************************** 
Functions
****************************/