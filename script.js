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

function getPlayerChoice() {
    let choice = prompt('Enter rock paper or scissors').toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        console.log(`You have chosen ${choice}`);
        return choice;
    } else {
        console.log('That aint no rock or paper or scissors.')
        getPlayerChoice();
    }
    
}



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    switch (true) {
        case computerSelection === playerSelection:
            console.log('omg its a draw! Please choose again!')
            return playRound(getPlayerChoice());
            

        case computerSelection === 'rock' && playerSelection === 'paper':
        case computerSelection === 'paper' && playerSelection === 'scissors':
        case computerSelection === 'scissors' && playerSelection === 'rock':
            ++playerPoints;
            return console.log(`Player chose ${playerSelection} and computer chose ${computerSelection} \nPlayer wins this round!`);

        case computerSelection === 'rock' && playerSelection === 'scissors':
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
            ++botPoints;
            return console.log(`Player chose ${playerSelection} and computer chose ${computerSelection} \nComputer wins this round!`);

    }
}

function game() {
    for (i = 1; i<=5;++i) {
        
        playRound(getPlayerChoice());
    }

    if (playerPoints > botPoints) {
        console.log("Victory! You get a hero sword!");
    } else if (playerPoints === botPoints) {
        console.log('It is a tie, my friends!');
    } else {console.log('You have lost.')}

}

game();

