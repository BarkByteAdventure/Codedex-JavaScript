// Array Methods

// .indexOf()

const myArray = [1, 2, 3];

console.log(myArray[1]); // Output: 2

// - wanted to find out the index of a particular element's value?

const stories = [
    "Sorcerer's Stone",
    "Chamber of Secrets",
    "Prisoner of Azkaban",
    "Goblet of Fire",
    "Order of the Phoenix",
    "Half-blood Prince",
    "Deathly Hallows"
  ];
  
  console.log(stories.indexOf("Half-blood Prince")); // Output: 5
  
/* If the array doesn't have the value we're looking for, -1 is returned instead.

- multiple elements with the same value -> returns the index of the first occurrence of that value. */

// .includes()
/*
- check if an array contains a particular element value with the .includes() method:

  array.includes(value);

- .includes() method checks if an element with the value parameter exists
-  returns a boolean true if it does or false otherwise

Here's an example:
*/
const myArrays = [1, 2, 3];

console.log(myArrays.includes(3));
console.log(myArrays.includes(42));

/*
Output:
true
false 
*/

//----------------------------------------------------------------------------------------------------------

/*For this exercise, we will practice using the .indexOf() and .includes() methods with a variation of the notable "Where's Waldo?" children's books.

Copy and paste the following array in an index.js file:

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

Next, write a conditional statement with the following logic:

    If our characters array includes an element with the value "Waldo", do this:
        Save the index of the "Waldo" element in a new variable called waldoIndex.
        Then use console.log() to display "Found Waldo at index {indexNumber}!" (e.g., "Found Waldo at index 3").
    Else, log "Not found" to the Console.
 */

    const characters = [
      "The Wally Watchers",
      "Wilma",
      "Fritz",
      "Wizard Whitebeard",
      "Odlaw",
      "Waldo",
      "Woof"
    ];

    if (characters.includes("Waldo")) {
      const waldoIndex = characters.indexOf("Waldo");
      console.log(`Found Waldo at index ${waldoIndex}!`);
    } else {
      console.log("Not found");
    }
   