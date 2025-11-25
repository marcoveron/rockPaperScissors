let humanScore = 0;
let computerScore = 0;
let ties = 0;

let display = document.querySelector(".gameDisplay");
let secondDisplay = document.querySelector(".roundDisplay");

let rockHuman = document.querySelector('.rockHuman');
let paperHuman = document.querySelector('.paperHuman');
let scissorsHuman = document.querySelector('.scissorsHuman');

rockHuman.addEventListener("click", () => playRound(undefined,"rock"));
paperHuman.addEventListener("click", () => playRound(undefined,"paper"));
scissorsHuman.addEventListener("click", () => playRound(undefined,"scissors"));

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

function playRound(computer, human){

    const computerValue = getComputerNumber();
    const humanValue = human;

    if(computerValue === humanValue){
        display.textContent = `You tie! ${computerValue} ties with ${humanValue}.`;
        ties += 1;
    } else if(computerValue == "rock" && humanValue == "paper") {
        display.textContent = `You win! ${computerValue} losses to ${humanValue}.`;
        humanScore += 1;
    } else if(computerValue == "rock" && humanValue == "scissors") {
        display.textContent = `You lose! ${computerValue} wins ${humanValue}.`;
        computerScore += 1;
    } else if(computerValue == "paper" && humanValue == "rock") {
        display.textContent = `You lose! ${computerValue} wins ${humanValue}.`;
        computerScore += 1;
    } else if(computerValue == "paper" && humanValue == "scissors") {
        display.textContent = `You win! ${computerValue} losses to ${humanValue}.`;
        humanScore += 1;
    } else if(computerValue == "scissors" && humanValue == "rock") {
        display.textContent = `You win! ${computerValue} losses to ${humanValue}.`;
        humanScore += 1;
    } else if(computerValue == "scissors" && humanValue == "paper") {
        display.textContent = `You lose! ${computerValue} wins ${humanValue}.`;
        computerScore += 1;
    }

    secondDisplay.textContent = `computer: ${computerScore} you: ${humanScore}`

}



