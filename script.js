function getComputerChoice() {
    let randomChoice =  Math.floor(Math.random() * 100) + 1;

    if (randomChoice < 33) {
        return 'Rock';
    } else if(randomChoice < 66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice());
