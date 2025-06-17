/****************************
 Name of task: Intro to Cancel and exit
 Name: Tikshan
 Date: Term two week eight 2025
 Purpose:  Learning functions in javascript
*****************************/

//Variables
let userName;
let userAge;
let userMoney;
const MINAGE = 0;
const MAXAGE = 100;
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
 // check if user has clicked cancel
 if (userName == null){
   // end the program
   return;
 }
   userAge = prompt("Nice name " + userName +" How old are you ?")
 if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
 }
    userMoney = prompt("Oh, "+ userAge + " years old, nice. How much money do you have ?")
     if (userMoney == null || userMoney == "" || userMoney == " " || isNaN(userMoney) ){
        userMoney = prompt("Invalid! You must enter how much money do you have" + userName)
    }
let Chocolates = ["Mars Bar = $1 ", "Moro Bar = $2", "King Size Crunchy = $3", "Dairy Milk Block = $4", "Lindt Block = $5"];
let message = "There are 4 types of chocolates you can buy if you want to. You roptions are :"
for ( i = 0; i < Chocolates.length; i++){
    message = message + "\nChocolate" + i + " is " +Chocolates[i]
}
alert (message)
}