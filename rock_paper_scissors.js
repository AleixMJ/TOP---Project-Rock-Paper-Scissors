// This defines prompt so it  can be used in Node.js in the console without a browser //

// TO WORK ON console uncomment this const prompt = require('prompt-sync')(); //

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let round = 0;

let startGame = document.querySelectorAll(".humanBtn");
const divResults = document.querySelector("#results");
const para = document.createElement("p");
para.textContent = "";
const roundWinner = document.createElement("p");
roundWinner.textContent = "";
const roundTotal = document.createElement("h4");
roundTotal.textContent = "";
const matchResults = document.createElement("h2");
matchResults.textContent = "";
const score = document.createElement("h3");
score.textContent = "";

 


startGame.forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.dataset.choice;        
        playRound(humanChoice,getComputerChoice());
    })

});


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
    if (round > 5) {
        alert("Game Finished");
        
    }
    if (round == 5) {
        if (humanScore > computerScore) {
            matchResults.textContent = 
            `The winner is the Human ${humanScore} / ${computerScore} against the Computer`;
            divResults.appendChild(matchResults);
        }
        else {
            matchResults.textContent =
            `The winner is the Computer  / ${computerScore} / ${humanScore} against the Human`;
            divResults.appendChild(matchResults);
        }
        
    }  



    roundTotal.textContent = `Round ${round}!`;
    score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
    divResults.appendChild(roundTotal);
    divResults.appendChild(score);
    para.textContent = `Human shows ${humanChoice} and Computer shows ${computerChoice}`;

    divResults.appendChild(para);

    if (humanChoice == computerChoice ) {
        roundWinner.textContent = "It's a tie, play again!";
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }
        else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }
            else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore++;
        roundWinner.textContent = "Human wins!";
    }
        else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++;
        roundWinner.textContent = "Computer wins!";
    }

    divResults.appendChild(roundWinner);
    round++;
    console.log(round);
}

