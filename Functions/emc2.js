// Parameters

/*When defining a function, you can add one or more parameters inside the parentheses to signify what input(s)
  the function needs when called. 
  *
  
    function example(parameter) {
        // Function code here
    }

- Inside the function body, we can use this parameter to return something else

Here's another example of parameters, using an updated greetings() function:
*/

function greetings(name) {
  console.log("Hi! My name is " + name + ".");
}

greetings("Marshall");

/*
- an add more than one parameter to a function, separated by commas, and they can be any data type 

Try the following:*/

function greetings(name, age) {
    console.log("Hi! My name is " + name + ".");
    console.log("I am " + age + "years old.")
  }
  
  greetings("Marshall", 30);

// Arguments

/*
- define a function with parameters, we can call it later in our program

- calling a function, we call these values arguments that are passed to the function to return something

greetings("Cody");

- If we do not pass an argument, an undefined value is used instead. (e.g., Hi! My name is undefined)

- Parameters are used when defining a function
- Arguments are used when calling a function

----------------------------------------------------------------------------------------------------------------------*/

/*
In 1905, renowned scientist Albert Einstein changed the world of physics with his theory of relativity. 
It transformed how we understand the relationship between space, time, and energy.

The most notable equation to come out of this theory was the following:
E=mc2

The E stands for "Energy", which is the product of the following:

    m for mass, usually measured in kilograms (kg).
    c2 is the speed of light multiplied by itself.

Let's write a function called relativityTheory().

It should accept a single mass parameter that is an integer or decimal number.

Afterward, call the relativityTheory() function with a mass argument. */

function relativeTheory(mass) {
    const speedOfLight = 299792458; // m/s of speed of Light

    const energy = mass * (speedOfLight **2);

    return energy;
}

console.log(relativeTheory(1000));