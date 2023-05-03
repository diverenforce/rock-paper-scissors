function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerSelection = capitalize(prompt("Choose ur weapon."));
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            ++computerScore;
          return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            ++playerScore;
          return `You win! ${playerSelection} beats ${computerSelection}!`;
        }
      } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            ++computerScore;
          return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            ++playerScore;
          return `You win! ${playerSelection} beats ${computerSelection}!`;
        }
      } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            ++computerScore;
          return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            ++playerScore;
          return `You win! ${playerSelection} beats ${computerSelection}!`;
        }
      }
}

function game() {
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());

    if (playerScore > computerScore) {
        return "you win!";
    } else if (playerScore < computerScore) {
        return "you lose!";
    } else { return "draw";};
}
console.log(game());


