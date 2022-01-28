function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer choice: ${computerSelection}`);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    message = '';
    if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            message = 'You lose! Paper beats rock!';
        } else if(computerSelection === 'scissors') {
            message = 'You win! Rock beats scissors!';
        } else {
            message = 'It\'s a tie';
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            message = 'You win! Paper beats rock!';
        } else if(computerSelection === ' scissors') {
            message = 'You lose! Scissors beat paper';
        } else {
            message = 'It\'s a tie';
        }
    } else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            message = 'You lose! Rock beats scissors!';
        } else if(computerSelection === ' paper') {
            message = 'You win! Scissors beat paper';
        } else {
            message = 'It\'s a tie';
        }
    } else {
        message = 'Please enter either rock, paper, or scissors';
    }

    return message;
}

let playerSelection = prompt('Play rock, paper, or scissors?').toLowerCase();
console.log(`Player choice: ${playerSelection}`);
let computerChoice = computerPlay();

console.log(playRound(playerSelection, computerSelection));