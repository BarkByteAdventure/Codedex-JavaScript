/*Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

    Rock beats Scissors.
    Scissors beat Paper.
    Paper beats Rock.

Let's use conditionals, the random number generator, and create a program that simulates the game between
the player and the computer!

Begin with a variable, player, and give a 0 to represent a Rock, a 1 to represent Scissors, or a 2 to represent a Paper.

Then use Math.random() to generate a number between 0 and 3 for another computer variable.

Then, use conditionals to compare the values of player and computer to see who wins!

Player picked:      Rock
Computer picked:    Scissors

The player won!*/

let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

console.log("Player choose: " + player);
console.log("Computer choose: " + computer);

if (player == 0 && computer == 2) {
    console.log("Paper beats Rock! Computer won!");
} else if (player == 2 && computer == 0) {
    console.log("Paper beats Rock! Player won!");
} else if (player == 1 && computer == 1) {
    console.log("It's a tie!");
} else if (player == 1 && computer == 2) {
    console.log("Scissor beats Paper! Player won!");
} else if (player == 2 && computer == 1) {
    console.log("Scissor beats Paper! Computer won!");
} else if (player == 0 && computer == 1) {
    console.log("Rock beats Scissor! Player won!");
} else if (player == 1 && computer == 0) {
    console.log("Rock beats Scissor! Computer won!");
} else if (player == 0 && computer == 0) {
    console.log("It's a tie!");
} else if (player == 2 && computer == 2) {
    console.log("It's a tie!");
} else {
    console.log("Something went wrong!");
}

