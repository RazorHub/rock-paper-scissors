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