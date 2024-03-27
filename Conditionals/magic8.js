// Math.random() returns a random number between 0 and 1.

/*To get a random integer between 0 to 9:

Math.floor(Math.random() * 10);

This is multiplying the decimal number by 10 and then rounding it down to the nearest integer with Math.floor()*/


/*The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

It's an oversized 8 ball with some of the following answers:

    Yes - definitely.
    It is decidedly so.
    Without a doubt.
    Reply hazy, try again.
    Ask again later.
    Better not tell you now.
    My sources say no.
    Outlook not so good.
    Very doubtful.

Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes. */

const question = "Will the magic 8 ball tell you a yes or no question?";

const randomNumber = Math.floor(Math.random() * 10);

ball = "";

if (randomNumber == 0) {
    ball = "Yes - definitely.";
} else if (randomNumber == 1) {
    ball = "It is decidedly so.";
} else if (randomNumber == 2) {
    ball = "Without a doubt.";
} else if (randomNumber == 3) {
    ball = "Reply hazy, try again.";
} else if (randomNumber == 4) {
    ball = "Ask again later.";
} else if (randomNumber == 5) {
    ball = "Better not tell you now.";
} else if (randomNumber == 6) {
    ball = "My sources say no.";
} else if (randomNumber == 7) {
    ball = "Outlook not so good.";
} else if (randomNumber == 8) {
    ball = "Very doubtful.";
} else if (randomNumber == 9) {
    ball = "I don't know.";
}else {
    ball = "Do you have no hobbies?"
}

console.log("Question: " + question);
console.log("Magic 8 Ball says: " + ball);

