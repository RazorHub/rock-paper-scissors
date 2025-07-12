let humanScore = 0;
let computerScore = 0;

console.log("Hello World");
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // Gives 0, 1, or 2

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice()); 

function getHumanChoice() {
  const userInput = prompt("Type rock, paper, or scissors:");
  return userInput.toLowerCase();
}

console.log(getHumanChoice()); // Test run

function playRound(humanChoice, computerChoice) {
  // make the human choice case-insensitive
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);