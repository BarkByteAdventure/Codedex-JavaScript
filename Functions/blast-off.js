// Function Syntax

/* 
- use the function keyword to define a function with a name and then a set of parentheses:

function myFunction() {
  // Code here
}

myFunction();

- names of JavaScript functions are usually in camelCase, just like variables!

- can write the body of our function inside the curly braces { }
- could include anything we've learned thus far such as variable definitions, loops, and conditional statements

*/

// return

/* 
-  important part of JavaScript functions is the return keyword
- functions process our code and produce a result that we log to the console

Here is an example of a helloWorld() function that returns a string:

function helloWorld() {
  return "Hello, World! 🌎";
}

helloWorld();

Calling this function returns the string, but we need to use console.log() to make it appear on the console:

console.log(helloWorld());
// Output: Hello, World! 🌎

-----------------------------------------------------------------------------------------------------------------------*/

/*Let's practice defining functions by making a countdown timer!

Define a countdown() function with the function keyword. Then, let's add the following to the function body:

    A loop that iterates down from that 10 to 1.
    Inside the loop, print the current number.
    Outside the loop, return the string "Blast Off! 🚀"
    Lastly, call the countdown() function and remember to log it to the console!
 */

function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    return "Blast Off! 🚀";
}

console.log(countdown());