// Index

// - access a single element in an array, we use bracket notation!

let fruits = ["strawberries 🍓", "blueberries 🫐", "bananas 🍌"];

console.log(fruits[0]);


/* - Array indices start at 0, not 1
   - can use bracket notation to change the value of an existing element:
*/

let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

pokemon[2] = "Pikachu";

console.log(pokemon);
// Output: ["Bulbasaur", "Charmander", "Pikachu"]

// - se it to assign a new value to an index that doesn't yet exist

let numbers = [1, 2, 3];

numbers[3] = 4;

console.log(numbers);
// Output: [1, 2, 3, 4]


/*Let's use array bracket notation to customize a list for a trip to the grocery store!

Copy and paste the following array into an index.js file:

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

It looks like we actually don't need eggs! But we do need butter and laundry soap!

Use bracket notation to:

    Replace "🥚 Eggs" with "🧈 Butter".
    Add "🧼 Laundry Soap" to the end of the groceryList array.

Finally, log the updated groceryList array to the Console. */

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

groceryList[2] = "🧈 Butter";

groceryList.push("🧼 Laundry Soap");

console.log(groceryList);


