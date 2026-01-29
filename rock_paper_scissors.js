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


console.log(getComputerChoice());