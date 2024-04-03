// Functions

/*
- Functions are blocks of code that we write once and can use later -> program
- useful for separating tasks into smaller chunks
    -> can be executed multiple times via the function name 
    
Here's an example of a defined function that is used later on:
*/

    function helloWorld() {
        console.log("Hello, World!");
      }
      
      helloWorld();

/* functions in JavaScript use parentheses ( ), both when we create and use them

------------------------------------------------------------------------------------------------------------------------*/

/* In the next exercise, we will dive further into how we create and then use functions.
But for now, let's demonstrate a function by copying and pasting the following in our editor:

function greetings() {
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  if (randomNumber == 1){
    console.log("Howdy!");
  } else if (randomNumber == 2) {
    console.log("Hi there!");
  } else if (randomNumber == 3) {
    console.log("Hey what's happening?");
  } else if (randomNumber == 4) {
    console.log("Hola!");
  } else {
    console.log("Heya!");
  }
}

greetings();
greetings();
greetings();

Go ahead and run this code. Based on the value of randomNumber, you should see a different kind of greeting!*/

function greetings() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    if (randomNumber == 1){
      console.log("Howdy!");
    } else if (randomNumber == 2) {
      console.log("Hi there!");
    } else if (randomNumber == 3) {
      console.log("Hey what's happening?");
    } else if (randomNumber == 4) {
      console.log("Hola!");
    } else {
      console.log("Heya!");
    }
  }
  
  greetings();
  greetings();
  greetings();