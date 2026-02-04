// This defines prompt so it  can be used in Node.js in the console without a browser //

// TO WORK ON console uncomment this const prompt = require('prompt-sync')(); //

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

let startGame = document.querySelectorAll(".humanBtn");
const divResults = document.querySelector("#results");
const para = document.createElement("p");
para.textContent = "";
const roundWinner = document.createElement("p");
roundWinner.textContent = "";

startGame.forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.dataset.choice;
        console.log("You chose:", humanChoice);
        playGame();
    })

});

console.log(startGame);

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


function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    para.textContent = `Human shows ${humanChoice} and Computer shows ${computerChoice}`;

    divResults.appendChild(para);

    if (humanChoice == computerChoice ) {
        roundWinner.textContent = "It's a tie, play again!";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }

    divResults.appendChild(roundWinner);
}

function playGame() {
    let round = 0;
    while (round <= 5) {
        console.log(`Round ${round}!`)
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`)
        
           const computerSelection = getComputerChoice();
        
        playRound(humanChoice, computerSelection)
        round++;
    }
    if (humanScore > computerScore) {
        console.log(`The winner is the Human ${humanScore} / ${computerScore} against the Computer`)
    }
    else {
        console.log(`The winner is the Computer  / ${computerScore} / ${humanScore} against the Human`)
    }
    }
