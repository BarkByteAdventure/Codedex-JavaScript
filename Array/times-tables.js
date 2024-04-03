// The .length Property

/* - need to know how many elements are in the array we are using
   - arrays are special variables that have data properties
   - properties is called .length and produces an integer 
     that tells us how long an array is (or how many elements it has)

    arrayName.length;

   !!! the .length property is used with a period, or dot notation !!!
*/

// length of an array can also be stored in a separate variable
const testScores = [78, 96, 100, 88, 85, 81, 79];
const numberOfScores = testScores.length;

console.log(numberOfScores); // Output: 7

// Looping over Arrays

// -  common use for the .length property of an array is working with loops (namely, the for loop)

const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
  console.log(musicNotes[i]);
}

/* - we can access the next element in the array with the i loop variable
   - named the iterator variable i but we can technically give this any name
     as long as it is consistent throughout the loop
     
We can use arrays with the while loop, too:*/

const musicNote = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
let counter = 0;

while (counter < musicNote.length) {
  console.log(musicNotes[counter]);
  counter++;
}

/*Many teachers believe that you should memorize a 9 x 9 table (i.e., 9 x 0 through 9 x 9).

Inside an index.js file, create the following variables:

    A multiple variable that should be set to an integer above 0.
    A numbers array of integers 0 through 9.

Then, use a for loop to iterate through the numbers array and multiply a given number by multiple each time.
Then, print the results to the Console. If you chose 9 for your multiple, the output should look like this:

9 x 0 = 0
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81 */

let multiple = 9;

for (let i = 0; i < multiple; i++) {
  console.log(i + " x " + multiple + " = " + i * multiple);
}


