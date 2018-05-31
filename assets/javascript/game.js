
$(document).ready(function() {


// set up variables
var computerNumber = Math.floor(Math.random() * 101 + 19);
var userGuess = 0;
var wins = 0;
var losses = 0;

// generate random number for computer number
$("#computerNumber").text(computerNumber);


// generating a random for each of the 4 buttons
var button1 = Math.floor(Math.random() * 11 + 1);
var button2 = Math.floor(Math.random() * 11 + 1);
var button3 = Math.floor(Math.random() * 11 + 1);
var button4 = Math.floor(Math.random() * 11 + 1);




// make function that restart game and stats

function gameReset () {
    userGuess = 0;
    computerNumber = Math.floor(Math.random() * 101 + 19);
    $("#computerNumber").text(computerNumber);
    button1 = Math.floor(Math.random() * 11 + 1);
    button2 = Math.floor(Math.random() * 11 + 1);
    button3 = Math.floor(Math.random() * 11 + 1);
    button4 = Math.floor(Math.random() * 11 + 1);
    $("#userGuess").text(userGuess);
};

//function for if the user gets the same number
function sameNumber() {
if (userGuess === computerNumber) {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    gameReset();
}
}


//function for if the user goes over the computer number
function differentNumber() {
if (userGuess > computerNumber) {
    alert("You Lose!");
    losses++;
    $("#losses").text(losses);
    gameReset();
}
}

//make functions that if button is clicked the number is added to userGuess
$("#button1").on ('click', function(){
    userGuess = userGuess + button1;
   console.log("new userGuess= " + userGuess);
    $("#userGuess").text(userGuess);

    if (userGuess === computerNumber) {
        sameNumber();
    } 
    
    if (userGuess > computerNumber) {
        differentNumber();
    }     
})

$("#button2").on ('click', function(){
    userGuess = userGuess + button2;
   console.log("new userGuess= " + userGuess);
    $("#userGuess").text(userGuess);

    if (userGuess === computerNumber) {
        sameNumber();
    } 
    
    if (userGuess > computerNumber) {
        differentNumber();
    }     
})

$("#button3").on ('click', function(){
    userGuess = userGuess + button3;
   console.log("new userGuess= " + userGuess);
    $("#userGuess").text(userGuess);

    if (userGuess === computerNumber) {
        sameNumber();
    } 
    
    if (userGuess > computerNumber) {
        differentNumber();
    }     
})

$("#button4").on ('click', function(){
    userGuess = userGuess + button4;
   console.log("new userGuess= " + userGuess);
    $("#userGuess").text(userGuess);

    if (userGuess === computerNumber) {
        sameNumber();
    } 
    
    if (userGuess > computerNumber) {
        differentNumber();
    }     
})

//make function for if the numbers match




//make funtion for if the user guess goes over computer guess


console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);








});
