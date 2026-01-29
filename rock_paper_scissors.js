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

    if (humanChoice == computerChoice ) {
        return "It's a tie, play again!"
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "Human wins!"
    }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "Computer wins!"
    }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "Human wins!"
    }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "Computer wins!"
    }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "Human wins!"
    }
        else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "Computer wins!"
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection,computerSelection));
