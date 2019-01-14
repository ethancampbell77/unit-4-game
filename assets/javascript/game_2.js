// Collector Game Javascript //

$(document).ready(function() {

// Variables //
var winner = 0;
var loser = 0;
var userScore = 0;

// Random Value Generated Computer Number
var compRand = Math.floor(Math.random()*101+19);
    console.log(compRand);
    $("#compNum").text(compRand);

// Random Value Generated Items //
var itemNum1 = Math.floor(Math.random()*11+1);
var itemNum2 = Math.floor(Math.random()*11+1);
var itemNum3 = Math.floor(Math.random()*11+1);
var itemNum4 = Math.floor(Math.random()*11+1);


function resetGame() {
var compRand = Math.floor(Math.random()*101+19);
console.log(compRand);
$("#compNum").text(compRand);
var itemNum1 = Math.floor(Math.random()*11+1);
var itemNum2 = Math.floor(Math.random()*11+1);
var itemNum3 = Math.floor(Math.random()*11+1);
var itemNum4 = Math.floor(Math.random()*11+1);
userScore = 0;
}

function gameCount() {
if (userScore === compRand) {
    winner++;
    resetGame();
}
                
else if (userScore > compRand) {
    loser++;
    resetGame();
}}

// First Item Score Increments //
$("#pinkDonut").on("click",function() {
userScore += itemNum1;
console.log(userScore);
gameCount();

});


// Second Item Score Increments //
$("#chocDonut").on("click", function() {
userScore += itemNum2;
console.log(userScore);
gameCount();
});

// Third Item Score Increments //   
$("#greenDonut").on("click", function() {
userScore += itemNum3;
console.log(userScore);
gameCount();
});


// Fourth Item Score Increments //
$("#blueDonut").on("click", function() {
userScore += itemNum4;
console.log(userScore);
gameCount();
});


$("#wins").text("WINS: " + winner);
$("#losses").text("LOSSES: " + loser);
$("#playerTotal").text("ORDERS: " + userScore);





    
// Game Reset - Generates Computer Number, All 4 Item Numbers and resets Player Score to 0 //

  

});   
    


  










    
    


