//!  YT part 68  
//?  Rock - Paper - Scissors 

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
//-----
let playerWinCount = 0;
let computerWinCount = 0;
const playerWins = document.getElementById("playerWins");
const computerWins = document.getElementById("computerWins");



function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("redText", "greenText");


    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerWinCount++;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerWinCount++;
            break;
    }

    playerWins.textContent = `player wins : ${playerWinCount}`;
    playerWins.classList.add("greenText");
    computerWins.textContent = `computer wins : ${computerWinCount}`;
    computerWins.classList.add("redText");
}