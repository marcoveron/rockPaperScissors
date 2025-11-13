let humanScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerNumber(max = 3){ 
    let number = Math.floor(Math.random() * max);
    if (number == 0){
        return "rock";
    } else if (number == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanValue(){
    return prompt("Please enter your choice: 'ROCK', 'PAPER' or 'SCISSORS'").toLowerCase();
}

function playGame(computer, human){

    function playRound(computer, human){

        const computerValue = getComputerNumber();
        const humanValue = getHumanValue();

        if(computerValue === humanValue){
            console.log(`You tie! ${computerValue} ties with ${humanValue}.`);
            ties += 1;
        } else if(computerValue == "rock" && humanValue == "paper") {
            console.log(`You win! ${computerValue} losses to ${humanValue}.`);
            humanScore += 1;
        } else if(computerValue == "rock" && humanValue == "scissors") {
            console.log(`You lose! ${computerValue} wins ${humanValue}.`);
            computerScore += 1;
        } else if(computerValue == "paper" && humanValue == "rock") {
            console.log(`You lose! ${computerValue} wins ${humanValue}.`);
            computerScore += 1;
        } else if(computerValue == "paper" && humanValue == "scissors") {
            console.log(`You win! ${computerValue} losses to ${humanValue}.`);
            humanScore += 1;
        } else if(computerValue == "scissors" && humanValue == "rock") {
            console.log(`You win! ${computerValue} losses to ${humanValue}.`);
            humanScore += 1;
        } else if(computerValue == "scissors" && humanValue == "paper") {
            console.log(`You lose! ${computerValue} wins ${humanValue}.`);
            computerScore += 1;
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();

if (computerScore === humanScore){
    console.log(`\nIt's a TIE, both players have ${computerScore} point(s)!`)
} else if (computerScore > humanScore){
    console.log(`\nYou lose! :( the computer score is ${computerScore} and yours is ${humanScore}.`)
} else {
    console.log(`\nYou win! :) the computer score is ${computerScore} and yours is ${humanScore}.`)
}
