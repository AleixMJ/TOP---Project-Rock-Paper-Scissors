// This defines prompt so it  can be used in Node.js in the console without a browser //

const prompt = require('prompt-sync')();

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

console.log(getComputerChoice());
console.log(getHumanChoice());