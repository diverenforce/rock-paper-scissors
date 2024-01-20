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
            console.log('omg its a draw!')
            return playRound(playerSelection);
            

        case computerSelection === 'rock' && playerSelection === 'paper':
        case computerSelection === 'paper' && playerSelection === 'scissors':
        case computerSelection === 'scissors' && playerSelection === 'rock':
            ++playerPoints;
            return `Player chose ${playerSelection} and computer chose ${computerSelection} \nPlayer wins this round!`;

        case computerSelection === 'rock' && playerSelection === 'scissors':
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
            ++botPoints;
            return `Player chose ${playerSelection} and computer chose ${computerSelection} \nComputer wins this round!`;

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

