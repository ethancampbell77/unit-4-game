// Collector Game Javascript //

$(document).ready(function() {

// Random Value Generated Computer Number
var compRand = Math.floor(Math.random()*101+19);
    console.log(compRand);
    $("#compNum").text(compRand);

// Random Value Generated Items //
    var itemNum1 = Math.floor(Math.random()*11+1);
    var itemNum2 = Math.floor(Math.random()*11+1);
    var itemNum3 = Math.floor(Math.random()*11+1);
    var itemNum4 = Math.floor(Math.random()*11+1);

    var winner = 0;
    var loser = 0;
    var userScore = 0;

// First Item Score Increments //
    $("#pinkDonut").on("click",function() {
    userScore += itemNum1;
    console.log(userScore);
    $("#playerTotal").text(userScore);
    gameScores();
    });

// Second Item Score Increments //
    $("#chocDonut").on("click", function() {
    userScore += itemNum2;
    $("#playerTotal").text(userScore);
    console.log(userScore);
    gameScores();
    });
    

 // Third Item Score Increments //   
    $("#greenDonut").on("click", function() {
    userScore += itemNum3;
    $("#playerTotal").text(userScore);
    console.log(userScore);
    gameScores();
    });
           
// Fourth Item Score Increments //
    $("#blueDonut").on("click", function() {
    userScore += itemNum4;
    $("#playerTotal").text(userScore);
    console.log(userScore);
    gameScores();
    });

    function gameScores() {
    if(userScore === compRand) {
        winner++;
        document.getElementById("winMusic").play();
        gameReset();
    }
            
    else if(userScore > compRand) {
        loser++;
        document.getElementById("loseMusic").play();
        gameReset();
      }
    };
    

// Game Reset - Generates New Computer Number, New Values for All 4 Item Numbers, Adds to Wins/Losses and resets Player Score to 0 //

    function gameReset() {
    userScore = 0
    compRand = Math.floor(Math.random()*101+19);
    console.log(compRand);
    $("#compNum").text(compRand);
    itemNum1 = Math.floor(Math.random()*11+1);
    itemNum2 = Math.floor(Math.random()*11+1);
    itemNum3 = Math.floor(Math.random()*11+1);
    itemNum4 = Math.floor(Math.random()*11+1);
    $("#wins").text("WINS: " + winner);
    $("#losses").text("LOSSES: " + loser);
    }

// Theme Music If for Chrome & Else for the rest of the browsers //
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
    $('#iframeAudio').remove()
    }
    else{
    $('#playAudio').remove() 
    }

});  

  










    
    


