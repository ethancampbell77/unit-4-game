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

    $("#wins").text("WINS: " + winner);
    $("#losses").text("LOSSES: " + loser);

// First Item Score Increments //
    $("#stone1").on("click",function() {
    userScore = userScore + itemNum1;
    console.log(userScore);
    $("#playerTotal").text(userScore);

    if(userScore === compRand) {
        youWin();
    }

    else if(userScore > compRand) {
        youLose();
    }
    });

// Second Item Score Increments //
    $("#stone2").on("click", function() {
    userScore = userScore + itemNum2;
    $("#playerTotal").text(userScore);
    console.log(userScore);
    
    if(userScore === compRand) {
        youWin();
    }
    
    else if(userScore > compRand) {
        youLose();
    }
    });

 // Third Item Score Increments //   
    $("#stone3").on("click", function() {
    userScore = userScore + itemNum3;
    $("#playerTotal").text(userScore);
    console.log(userScore);
           
    if(userScore === compRand) {
        youWin();
    }
            
    else if(userScore > compRand) {
        youLose();
    }
    });

// Fourth Item Score Increments //
    $("#stone4").on("click", function() {
    userScore = userScore + itemNum4;
    $("#playerTotal").text(userScore);
    console.log(userScore);
               
    if(userScore === compRand) {
        youWin();
    }
                
    else if(userScore > compRand) {
        youLose();
    }
    });

 // WIN function //
    function youWin() {
        winner ++;
        $("#wins").text(winner);
        gameReset();
    }

// LOSE funtion //
    function youLose() {
        loser ++;
        $("#losses").text(loser);
        gameReset();
    }

// Game Reset - Generates Computer Number, All 4 Item Numbers and resets Player Score to 0 //

    function gameReset() {
    var compRand = Math.floor(Math.random()*101+19);
    console.log(compRand);
    $(compNum).text(compRand);
    var itemNum1 = Math.floor(Math.random()*11+1);
    var itemNum2 = Math.floor(Math.random()*11+1);
    var itemNum3 = Math.floor(Math.random()*11+1);
    var itemNum4 = Math.floor(Math.random()*11+1);
    userScore = 0
    $("#playerTotal").text(userScore);
}

});   

  










    
    


