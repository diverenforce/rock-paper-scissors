let playerPoints = 0;
let botPoints = 0;
let displayBox = document.querySelector('#display')

let rbtn = document.querySelector('#rbtn');
let pbtn = document.querySelector('#pbtn');
let sbtn = document.querySelector('#sbtn');

rbtn.addEventListener('click', playRound('rock'));
pbtn.addEventListener('click', playRound('paper'));
sbtn.addEventListener('click', playRound('scissors'));



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
        displayBox.textContent = `You have chosen ${choice}`;
        return choice;
    } else {
        displayBox.textContent = 'That aint no rock or paper or scissors.';
        getPlayerChoice();
    }
    
}



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    switch (true) {
        case computerSelection === playerSelection:
            displayBox.textContent = 'omg its a draw! Please choose again!';
            return;
            

        case computerSelection === 'rock' && playerSelection === 'paper':
        case computerSelection === 'paper' && playerSelection === 'scissors':
        case computerSelection === 'scissors' && playerSelection === 'rock':
            ++playerPoints;
             displayBox.textContent = '\n' + `Player chose ${playerSelection} and computer chose ${computerSelection} \nPlayer wins this round!`;
            break;
        case computerSelection === 'rock' && playerSelection === 'scissors':
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
            ++botPoints;
             displayBox.textContent = '\n' + `Player chose ${playerSelection} and computer chose ${computerSelection} \nComputer wins this round!`;

    }
}


