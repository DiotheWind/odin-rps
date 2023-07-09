function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function getPlayerChoice() {
    const playerChoice = prompt("Enter your choice");
    return playerChoice.toLowerCase().trim();
}

function playRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "scissors") {
        message = `It's a tie! You both chose ${playerSelection}.`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message = "You lose! Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message = "You win! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = "You lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = "You lose! Rock beats Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message = "You win! Scissors beats Paper.";
    }
    
    return message;
}

console.log(getPlayerChoice());


