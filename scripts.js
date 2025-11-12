function getComputerNumber(max = 3){
    return Math.floor(Math.random() * max);
}

const computerValue = getComputerNumber();

const humanValue = prompt("Please enter '0' for ROCK, '1' for PAPER and '2' for SCISSORS");

