let playerPoints = 0;
let botPoints = 0;


function getComputerChoice() {
    let randomChoice =  Math.floor(Math.random() * 100) + 1;

    if (randomChoice < 33.33333333333333) {
        return 'rock';
    } else if(randomChoice < 66.66666666666667) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    switch (true) {
        case computerSelection === playerSelection:
            return playRound(playerSelection);
            break;

        case computerSelection === 'rock' && playerSelection === 'paper':
            ++playerPoints;
            return 'Player chose paper and computer chose rock \n Player wins this round!';
            break;

        case computerSelection === 'rock' && playerSelection === 'scissors':
            ++botPoints;
            return 'Player chose scissors and computer chose rock \nComputer wins this round!';
            break;

        case computerSelection === 'paper' && playerSelection === 'rock':
            ++botPoints;
            return 'Player chose rock and computer chose paper \nComputer wins this round!';
            break;

        case computerSelection === 'paper' && playerSelection === 'scissors':
            ++playerPoints;
            return 'Player chose scissors and computer chose paper \nPlayer wins this round!';
            break;

        case computerSelection === 'scissors' && playerSelection === 'rock':
            ++playerPoints;
            return 'Player chose rock and computer chose scissors \nPlayer wins this round!';
            break;
    
        case computerSelection === 'scissors' && playerSelection === 'paper':
            ++botPoints;
            return 'Player chose paper and computer chose scissors \nComputer wins this round!';
            break;

    }
}

function game() {
    for (i = 1; i<=5;++i) {
        let playerSelection = prompt('Choose either rock, paper or scissors');
        console.log(playRound(playerSelection));
    }

    if (playerPoints > botPoints) {
        console.log("Victory! You get a hero sword!");
    } else if (playerPoints === botPoints) {
        console.log('It is a tie, my friends!');
    } else {console.log('You have lost.')}

}

game();

