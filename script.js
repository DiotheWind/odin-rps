const displayPlayerScore = document.querySelector("#player-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRoundWinner = document.querySelector("#display-round-winner");
const displayOverallWinner = document.querySelector("#display-overall-winner");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", () => game("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => game("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => game("scissors", getComputerChoice()));

let playerScore = 0;
let computerScore = 0;

function game(playerSelection, computerSelection) { 
    if (playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "scissors") {
        showRoundWinner(`It's a tie! Both chose ${playerSelection}.`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        showRoundWinner("Computer chooses paper. You lose❌");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        showRoundWinner("Computer chooses scissors. You win✅");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        showRoundWinner("Computer chooses rock. You win✅");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        showRoundWinner("Computer chooses scissors. You lose❌");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        showRoundWinner("Computer chooses rock. You lose❌");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        showRoundWinner("Computer chooses paper. You win✅");
        playerScore++;
    } 
    
    showScore();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            showWinScreen();
        } else {
            showLoseScreen();
        }
        
        disableButtons();
    }
}

function getComputerChoice() { 
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function showRoundWinner(message) {
    displayRoundWinner.textContent = message;
}

function showScore() {
    displayPlayerScore.textContent = `You: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
}

function showWinScreen() {
    displayOverallWinner.textContent = "YOU WON THE GAME!";
    displayOverallWinner.style.color = "green";
}

function showLoseScreen() {
    displayOverallWinner.textContent = "YOU LOST THE GAME!";
    displayOverallWinner.style.color = "red";
}

function disableButtons() {
    rockBtn.setAttribute("disabled", "disabled");
    paperBtn.setAttribute("disabled", "disabled");
    scissorsBtn.setAttribute("disabled", "disabled");
}

