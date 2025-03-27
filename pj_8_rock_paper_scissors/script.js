// Accessing elements
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors"); // Fixed ID issue

let resultEl = document.getElementById("result");
let playerScoreEl = document.getElementById("your_Result");
let computerScoreEl = document.getElementById("computer_Result");

// Scores
let player = 0;
let computer = 0;

// Selecting all buttons
let buttons = document.querySelectorAll("#controls button");

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id; // Get the player's choice
    let computerSelection = getComputerChoice(); // Get the computer's choice
    let result = playRound(playerSelection, computerSelection);

    // Update the result on the page
    resultEl.innerHTML = result;

    // Update scores in UI
    playerScoreEl.textContent = player;
    computerScoreEl.textContent = computer;
  });
});

// Function to generate a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    player++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computer++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
