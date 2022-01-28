function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}