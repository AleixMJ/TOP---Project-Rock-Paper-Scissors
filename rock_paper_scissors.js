// This defines prompt so it  can be used in Node.js in the console without a browser //

const prompt = require('prompt-sync')();

let humanScore = 0;
let computerScore = 0;




// This functions randomly returns: Paper, Scissors or Rock // 

function getComputerChoice() {
    let random = Math.random() * 100;
    if (random < 33) {
        return "Paper";
    }
    else if (random > 66) {
        return "Scissors";
    }
    else return "Rock";

}

function getHumanChoice() {
    let humanAnswer = prompt("Chose between Paper, Rock and Scissors: ");
    return humanAnswer;
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log (`Human shows ${humanChoice} and Computer shows ${computerChoice}`);
    if (humanChoice == computerChoice ) {
        return console.log("It's a tie, play again!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return console.log("Human wins!");
    }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return console.log("Computer wins!");
    }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return console.log("Human wins!");
    }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return console.log("Computer wins!");
    }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return console.log("Human wins!");
    }
        else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return console.log("Computer wins!");
    }

}

function playGame() {
    let round = 0;
    while (round <= 5) {
        console.log(`Round ${round}!`)
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`)
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection)
        round++;
    }
    if (humanScore > computerScore) {
        console.log(`The winner is the Human ${humanScore} / ${computerScore} against the Computer`)
    }
    else {
        console.log(`The winner is the Computer  / ${computerScore} / ${humanScore} against the Human`)
    }
    }
playGame();