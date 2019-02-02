
var computerOptions = ["a", "b", "c", "d", "e", "f", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "y", "z"];


var userWins = 0;
var loses = 0;
var guessesRemaining = 10;
var userChoice = [];

var allUserChoices = [];
    

document.onkeyup = function(event) {
    // captured pressed key
    var userChoice = event.key;
    // check to see if key pressed is in the array
    if(computerOptions.indexOf(userChoice) !== -1){
    // shows pressed buttons
    allUserChoices.push(event.key);

    // generated computer random
    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    // 
    if (userChoice === computerChoice && guessesRemaining < 10) {
        userWins++;
    } else if (guessesRemaining > 0) {
        loses++;
        guessesRemaining--;
    }

    if (guessesRemaining === 0) {
        // userWins = 0;
        // loses = 0;
        guessesRemaining = 10;
        userChoice = [];
        allUserChoices = [];
    }


    document.getElementById("userWinsScore").innerHTML = userWins;
    document.getElementById("userLoosesScore").innerHTML = loses;
    document.getElementById("amountGuessesLeft").innerHTML = guessesRemaining;
    document.getElementById("pressedLetter").innerHTML = allUserChoices;
    }

};




