const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const displayPlayerScore = document.querySelector("#player-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRoundWinner = document.querySelector("#display-round-winner");
const displayOverallWinner = document.querySelector("#display-overall-winner");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));



// function game() { // Plays five rounds of the game by looping the playRound function and displays the result in the end
//     let playerScore = 0;
//     let computerScore = 0;

//     // for (let i = 1; i <= 5; i++) {
//     //     let result = playRound(getPlayerChoice(), getComputerChoice());
//     //     if (result) {
//     //         playerScore++;
//     //     } else if (result === false) {
//     //         computerScore++;
//     //     }
//     // }

//     console.log(`Player: ${playerScore}`);
//     console.log(`Computer: ${computerScore}`);
//     if (playerScore === computerScore) {
//         console.log("The game ends in a tie.");
//     } else if (playerScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// }


function playRound(playerSelection, computerSelection) { // Plays a single round of the game where it displays who won the round
    let message;
    let isPlayerWin;

    if (playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "scissors") {
        message = `It's a tie! You both chose ${playerSelection}.`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message = "You lose! Paper beats Rock.";
        isPlayerWin = false;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = "You win! Rock beats Scissors.";
        isPlayerWin = true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message = "You win! Paper beats Rock.";
        isPlayerWin = true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = "You lose! Scissors beats Paper.";
        isPlayerWin = false;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = "You lose! Rock beats Scissors.";
        isPlayerWin = false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message = "You win! Scissors beats Paper.";
        isPlayerWin = true;
    } else {
        message = "Invalid input";
    }
    
    console.log(message);
    return isPlayerWin;
}

// function getPlayerChoice() {  // Player chooses rock, paper or scissors
//     const playerChoice = prompt("Enter your choice");
//     return playerChoice.toLowerCase().trim();
// }

function getComputerChoice() { // Computer randomly chooses rock, paper or scissors
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// game();
