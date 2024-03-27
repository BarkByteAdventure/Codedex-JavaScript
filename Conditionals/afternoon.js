// ELSE CLAUSE

/*If the condition is true, execute the code inside the if.
Else the condition is false, execute the code inside the else

if (condition) {
    // Do something
  } else {
    // Do something else 
  }
*/

if (grade > 60) {
    console.log("You passed.");
  } else {
    console.log("You failed.");
  } 

//Comparison Operators

/*
    === strict equal
    !== strict not equal
    > greater than
    >= greater than or equal
    < less than
    <= less than or equal
 */


/*Go back to your if statement from the previous exercise and turn it into an if/else for the following:

    If hour < 12, then print “Good morning 🌞” and some of your morning routines.
    Else, print “Good afternoon ☁️” and some of your afternoon rituals.

After you run the code, change hour's value and run it again. Do this a few times to make sure
the program is working as intended.*/

let hour = 14;

if (hour < 12) {
    console.log("Good morning 🌞");
} else {
    console.log("Good afternoon ☁️");
}