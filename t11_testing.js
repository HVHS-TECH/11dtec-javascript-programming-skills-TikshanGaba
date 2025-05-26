/****************************
 Name of task: Testing
 Name: Tikshan
 Date: Term two week three 2025
 Purpose:  Learning javascript
*****************************/

//Variables
let userName;
let userAge;
let userMoney;
/****************************
Main Code
****************************/
// start()
// Runs the program
// Called by the start button
userName ();
userAge ();
userMoney ();
/**************************** 
Functions
****************************/
function start()
 {
    userName = prompt("Oh hi, Maybe I forgot you.. What was your name again ?");
    userAge = prompt("Nice name " + userName + ", how old are you ?");
    userMoney = prompt("Oh you're " + userAge + ", how much pocket money do you get ?");
    alert("So, you're "+ userName + ", and you're "+ userAge + " years old and you get " + userMoney + " dollars as pocket money. Nice")
 }
