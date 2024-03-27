// continue

/* The continue statement is used to skip the rest of the code in a loop.

   Example:

   for (let i = 0; i < 5; i++) {
    if (i == 1) {
      continue;
    }
    console.log(i);
  }

 Output:  0
            2
            3
            4

The code above will output the numbers 0 through 4, except for 1 because the continue skips this iteration!!!
*/  

// break

/* The break statement is used to exit a loop earlier.

   Example:

   for (let i = 0; i < 5; i++) {
    if (i == 3) {
      break;
    }
    console.log(i);
  }

 Output:  0
            1
            2

The code above will output the numbers 0 through 2, except for 3 because the break statement exits the loop early.*/


/*Write an even-odds.js file that begins with a for loop that iterates from 1 to 50.

If the iterator variable i is odd, use the continue keyword to skip this iteration. Otherwise, log the number to the Console.
If the iterator variable is equal to 42, log 42 to the Console and use the break keyword to exit the loop.
The output should look like this:

2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42 */

for (let i = 1; i <= 50; i++) {
  if (i == 1 || i % 2 == 1) {
    continue;
  }
  console.log(i);
  if (i == 42) {
    break;
  }
}
