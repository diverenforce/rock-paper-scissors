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
            return 'Player victory, paper beats rock!';
            break;

        case computerSelection === 'rock' && playerSelection === 'scissors':
            ++botPoints;
            return 'Computer victory, rock beats scissors boo!';
            break;

        case computerSelection === 'paper' && playerSelection === 'rock':
            ++botPoints;
            return 'Computer victory, their paper beats your rock!';
            break;

        case computerSelection === 'paper' && playerSelection === 'scissors':
            ++playerPoints;
            return 'Player victory! Player\'s selection beat the heck outta the computer\'s';
            break;

        case computerSelection === 'scissors' && playerSelection === 'rock':
            ++playerPoints;
            return 'Player victory, rock beats scissors!';
            break;
    
        case computerSelection === 'scissors' && playerSelection === 'paper':
            ++botPoints;
            return 'Computer victory, rock beats scissors boo!';
            break;

    }
}

function game() {
    for (i = 1; i<=5;++i) {
        let playerSelection = prompt('Choose either rock, paper or scissors');
        console.log(playRound(playerSelection));
    }
    
}



console.log(playRound('rock'))
