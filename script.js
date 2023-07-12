const displayPlayerScore = document.querySelector("#player-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRoundWinner = document.querySelector("#display-round-winner");
const displayOverallWinner = document.querySelector("#display-overall-winner");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => game("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => game("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => game("scissors", getComputerChoice()));

displayPlayerScore.textContent = "Player Score: 0";
displayComputerScore.textContent = "Computer Score: 0";



function game(playerSelection, computerSelection) { 
    let message;
    if (playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "scissors") {
        message = `It's a tie! You both chose ${playerSelection}.`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message = "You lose! Paper beats Rock.";
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = "You win! Rock beats Scissors.";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message = "You win! Paper beats Rock.";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = "You lose! Scissors beats Paper.";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = "You lose! Rock beats Scissors.";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message = "You win! Scissors beats Paper.";
        playerScore++;
    } 
    
    displayPlayerScore.textContent = `Player Score: ${playerScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
    displayRoundWinner.textContent = message;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            displayOverallWinner.textContent = "YOU WIN";
        } else {
            displayOverallWinner.textContent = "YOU LOSE";
        }
    }
}


function getComputerChoice() { // Computer randomly chooses rock, paper or scissors
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

