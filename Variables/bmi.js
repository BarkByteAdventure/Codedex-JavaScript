/*Exponents*/
let score = 0

score = 2 ** 2      // score is 4
score = 2 ** 3      // score is now 8
score = 2 ** 4      // score is now 16
score = 2 ** 5      // score is now 32

console.log(score)  // Output: 32

/*It is computed by taking an individual's weight (mass) in kilograms and dividing it by the square of their height in meters.

bmi= mass / height ** 2 ​

Create a bmi.js program */

const height = 1.65
const mass = 70

const bmi = mass / (height ** 2)	

console.log(bmi)
 