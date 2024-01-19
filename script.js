function getComputerChoice() {
    let randomChoice =  Math.floor(Math.random() * 100) + 1;

    if (randomChoice < 33.33333333333333) {
        return 'Rock';
    } else if(randomChoice < 66.66666666666667) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice());
