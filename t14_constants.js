/****************************
 Name of task: Intro to Constants
 Name: Tikshan
 Date: Term two week seven 2025
 Purpose:  Learning functions in javascript
*****************************/

//Variables
let userName;
let userAge;
let userMoney;
const MINAGE = 0;
const MAXAGE = 100;
let classArray = ["Mars Bar = $1 ", "Moro Bar = $2", "King Size Crunchy = $3", "Dairy Milk Block = $4", "Lindt Block = $5"]
/****************************
Main Code
****************************/
// start()
// Runs the program
// Called by the start button
/**************************** 
Functions
****************************/
function start()
 { 
   userName = prompt("What is your name ?")
 if ( !isNaN(userName) || userName == null || userName == "" || userName == " " ){
    userName = prompt("Invalid! You must enter a name")
 }
   userAge = prompt("Nice name " + userName +" How old are you ?")
 if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
 }
    userMoney = prompt("Oh, "+ userAge + " years old, nice. How much money do you have ?")
     if (userMoney == null || userMoney == "" || userMoney == " " || isNaN(userMoney) ){
        userMoney = prompt("Invalid! You must enter how much money do you have" + userName)
    }
let choice = prompt("Choose number from 1 to 5 do decide what chocolate you wanna eat.")
alert("You chose "+ classArray[choice] + " to eat.");

}