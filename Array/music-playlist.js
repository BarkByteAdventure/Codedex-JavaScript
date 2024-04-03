// Adding Elements

// - array index for an existing element to replace the value for that element:

const bandMembers = ["J.C.", "Joey", "Chris", "Lance", "Justin"];

bandMembers[1] = "Nick";

console.log(bandMembers);
// Output: ["J.C.", "Nick", "Chris", "Lance", "Justin"]

/* - you can add more elements to your arrays with built-in methods 

Methods are pieces of code that some variables can use to perform specific actions,
like produce a new value. We refer to them with dot notation, similar to the .length property.

   - you can add new elements to the beginning and end of an array with the .unshift()
     and .push() methods, respectively:

    myArray.unshift(newValue);

    myArray.push(newValue);

    - newValue is known as a parameter that we pass into the method.
      Some methods use parameters while others do not.
    
    - can also add multiple elements with the .push() and .unshift()
      methods by separating each new value with a comma (i.e., .push(newValue1, newValue2);).

For every new element added to an array with the .unshift() method, the indices of 
the other elements are shifted up by 1.
*/

// Removing Elements

/* - add elements to an array, we can also remove them as well with the .shift() and .pop() methods

   - .shift() method removes and returns the first element in an array, shifting the indices
     of the remaining elements back by 1
     
Conversely, the .pop() method removes and returns the last element of an array:
*/

const greeks = ["Zeus", "Hera", "Poseidon", "Apollo", "Hermes", "Dionysus", "Hades"];

const shiftedElement = greeks.shift();
const poppedElement = greeks.pop();

console.log(shiftedElement);
console.log(poppedElement);
console.log(greeks);

/*
Output:
Zeus
Hades
["Hera", "Poseidon", "Apollo", "Hermes", "Dionysus"]
*/


/*It's time to put these methods to the test by customizing a music playlist! 🎵

Copy and paste the following array:

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

Next, let's do the following:

    Remove the first and last elements.
    Add one new element to end of the array.
    Add two new elements to the beginning of the array.

Afterward, log your updated musicPlaylist array to the Console! */

// Write code below 💖

const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];
  
musicPlaylist.shift(); // remove first Item in List
musicPlaylist.pop();   // remove last Item in List
musicPlaylist.push("Lie to me"); // add new Item to end of List
musicPlaylist.unshift("Listen to your heart" , "Try"); // add new Items to beginning of List

console.log(musicPlaylist);
