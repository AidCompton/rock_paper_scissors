const choices = ["rock", "paper", "scissors"];
const winners =[];

function game() {
    for (let i=1; i <= 5; i++){
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    console.log("Player selected ", playerSelection);
    const computerSelection = computerChoice();
    console.log("Computer selected ", computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
}
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors only please"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLocaleLowerCase();
        check = validateInput(input);
    }
    //console.log(input)
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true
    } else {
        return false
    }
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissor" && choiceC == "paper") 
    ) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player wins").length;
    let computerWins = winners.filter((item) => item == "Computer wins").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results: ");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties)
}
game();