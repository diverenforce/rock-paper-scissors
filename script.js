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

console.log(getComputerChoice());


function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case computerSelection === playerSelection:
            console.log('It is a tie, my friends! Restarting round.');
            playRound(playerSelection,getComputerChoice());
            break;

        case computerSelection === 'rock' && playerSelection === 'paper':
            console.log('Player victory, paper beats rock!');
            break;

        case computerSelection === 'rock' && playerSelection === 'scissors':
            console.log('Computer victory, rock beats scissors boo!');
            break;

        case computerSelection === 'paper' && playerSelection === 'rock':
            console.log('Computer victory, their paper beats your rock!');
            break;

        case computerSelection === 'paper' && playerSelection === 'scissors':
            console.log('Player victory! Player\'s selection beat the heck outta the computer\'s');
            break;

        case computerSelection === 'scissors' && playerSelection === 'rock':
            console.log('Player victory, rock beats scissors!');
            break;
    
        case computerSelection === 'scissors' && playerSelection === 'paper':
            console.log('Computer victory, rock beats scissors boo!');
            break;

    }
}

console.log(playRound('ROck',getComputerChoice()));
console.log(playRound('PaPEr',getComputerChoice()));
console.log(playRound('scISSoRS',getComputerChoice()));
