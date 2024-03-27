// ELSE IF

/*You can add an else if section between the if and else in your control flow! This gives your program more conditions to evaluate, besides just two.

if (conditionA) {
  // Do this
} else if (conditionB) {
  // Do this, instead
} else {
  // Do this if none of the above are true
} */

// Example, we could apply this to a school grading system:
let grade = 93;

if (grade > 90) {
  console.log("A");
} else if (grade > 80) {
  console.log("B");
} else if (grade > 70) {
  console.log("C");
} else if (grade > 60) {
  console.log("D");
} else {
  console.log("F");
}

/*Create a ph-levels.js program that checks whether a pH level is basic, acidic, or neutral.

First, create a variable called ph and give it a value between 0 and 14.

Write an if/else if/else statement that:

    If ph is greater than 7, output “Basic”.
    Else if ph is less than 7, output “Acidic”.
    Else, output “Neutral”.
 */

let ph = 10;

if (ph > 7) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}
