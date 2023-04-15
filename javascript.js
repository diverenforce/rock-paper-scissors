const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoices() {

    let random =  Math.floor(Math.random()*choices.length);
    let result = choices[random];
    return result;
}

console.log(getComputerChoices());

function playRound(playerSelection, computerSelection) {
    
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === 'Rock' && computerSelection ==='Paper') {
        return "Paper beats rock! You lose!"
    } else if (playerSelection === 'Rock' && computerSelection ==='Scissors') {
        return "Rock beats scissors! You win!"
    } else if (playerSelection === 'Paper' && computerSelection ==='Rock') {
        return "Paper beats rock! You win!"
    } else if (playerSelection === 'Paper' && computerSelection ==='Scissors') {
        return "Scissors beats paper! You lose!"
    } else if (playerSelection === 'Scissors' && computerSelection ==='Rock') {
        return "Rock beats scissors! You lose!"
    } else if (playerSelection === 'Scissors' && computerSelection ==='Paper') {
        return "Scissors beats paper! You win!"
   }

}

const playerSelection = "rock";
const computerSelection = getComputerChoices();
console.log(playRound(playerSelection, computerSelection));
