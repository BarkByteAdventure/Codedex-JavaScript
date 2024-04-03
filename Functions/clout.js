// Scope

/*
- programming, every function and variable has a "scope"
- means that when we define a variable inside a function,
  that variable can only be used within that function and not outside of it 
  
Let's use an add() function as an example:

function add(x, y) {
    let answer = x + y;
    return answer;
  }
  
  console.log(answer);

  - ReferenceError that states the answer variable is not defined
  - we are trying to access a variable that was made in a function

  - Any area outside the curly brackets of functions or loops is known as the global scope

If we were to define an answer outside of the add() function:
*/

function add(x, y) {
    let answer = x + y;
    return answer;
  }
  
  let answer = "This";
  console.log(answer); // Output: This

/*
have two answer variables in two different scopes:

    - One defined inside the add() function as a number.
    - One defined outside the add() function as a string (in the global scope).

    - really quick by removing that global answer variable and calling add() inside the console.log() statement:

        console.log(add(2, 2)); // Output: 4
 
 ---------------------------------------------------------------------------------------------------------------------*/

/*
You are helping your content creator friend with building clout on their various social media channels
by analyzing their views from last week.

Here are the viewership numbers, stored as arrays:

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

They need the following statistics from each array:

    The mean, or average number of views.
    The median, or middle value of the sorted array.

To calculate the mean and median, create two functions called mean() and median(). 
Each function accepts an viewsArray parameter.

Define a totalViews variable that is local to the scope of the mean() function. 
Use it to calculate the average views.

For the median, you'll need to sort the viewsArray parameter beforehand. 
Inside the scope of the median() array, define two variables called sortedStats and middleIndex.

Lastly, call these three functions and log the results to the Console!
 */


const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];

function mean() {
    let totalViews = 0;

    for (let i = 0; i < recentTikTokViews.length; i++) {
        totalViews += recentTikTokViews[i];
    }
    return totalViews / recentTikTokViews.length;
}

function median() {
    let sortedStats = recentTikTokViews.sort((a, b) => a - b);
    let middleIndex = Math.floor(recentTikTokViews.length / 2);

    return sortedStats[middleIndex];
}

console.log(mean());

console.log(median());

