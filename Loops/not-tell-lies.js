//Iterators in Loops

/* Iterators are used to iterate over an array, string, or object.

let i = initialValue;

while (condition) {
  // Update the i iterator variable
}

- "iterate" means to run the code in a loop once
- When the i iterator variable has reached a value that sets
  the loop's condition to false, we can successfully exit the loop! */

// For Loop

/*
for (let i = initialValue; condition; updateIterator) {
  // Code here
}

- First, we define an i iterator variable with an initialValue.
- Before the first or next iteration, we test the i variable in the condition statement. 
  If we get true, we run the code. Otherwise, we exit the loop.
- After each iteration, we updateIterator and change the value of i.
 */

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

/*
- let i = 1: initializes an iterator variable.
- i <= 10: the conditional statement that is tested before each iteration.
- i++: this increments the iterator variable by 1 after each iteration.
 */

/*Suppose you got detention and the professor asks you to write a phrase 100 times.

Let's create a program that uses for loops to make short work of this!

Use the for loop to log the following message to the Console 100 times:

    I Must Not Tell Lies

(This is where we begin to see the true power of computing. What takes humans hours can take computer microseconds. 🤯)*/

for (let i = 0; i <= 100; i++) {
    console.log("I Must Not Tell Lies");
  }