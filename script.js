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
            return 'Player victory, paper beats rock!';
            break;

        case computerSelection === 'rock' && playerSelection === 'scissors':
            return 'Computer victory, rock beats scissors boo!';
            break;

        case computerSelection === 'paper' && playerSelection === 'rock':
            return 'Computer victory, their paper beats your rock!';
            break;

        case computerSelection === 'paper' && playerSelection === 'scissors':
            return 'Player victory! Player\'s selection beat the heck outta the computer\'s';
            break;

        case computerSelection === 'scissors' && playerSelection === 'rock':
            return 'Player victory, rock beats scissors!';
            break;
    
        case computerSelection === 'scissors' && playerSelection === 'paper':
            return 'Computer victory, rock beats scissors boo!';
            break;

    }
}

console.log(playRound('rock'))
