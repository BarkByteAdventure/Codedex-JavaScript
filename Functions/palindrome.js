/*Have you ever noticed how some words read the same forwards and backwards, like "noon" or "radar".
 These are known as palindromes!

Let's create an isPalindrome() function that does the following:

    It accepts a word string as a parameter.
    The function returns true if the word is a palindrome. Otherwise, it returns false.

Note: If there are any capital letters in word, use word.toLowerCase() to make it all lowercase.
      More info about this method here.

After defining this function, go ahead and call it a few times on some words to see the results!
Here are some words to try out:

    "racecar"
    "madam"
    "moonlight"
    "aviary"
 */

    //Variante 1
    function isPalindrome(word) {
        let wordBackwards = "";
        
        let lowerCaseWord = word.toLowerCase();
        
        for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
          wordBackwards += lowerCaseWord[i];
        }
        
        return wordBackwards == lowerCaseWord;
      }
      
      console.log(isPalindrome(""));

      //Variante 2

      function isPalindrome(word) {
        const lowerCaseWord = word.toLowerCase();
        const reversedWord = lowerCaseWord.split('').reverse().join('');
        return lowerCaseWord === reversedWord;
      }
      
      console.log(isPalindrome("moonlight"));

      //Variante 3

      function isPalindrome(word) {
        const lowerCaseWord = word.toLowerCase();
        const length = lowerCaseWord.length;
      
        for (let i = 0; i < length / 2; i++) {
          if (lowerCaseWord[i] !== lowerCaseWord[length - 1 - i]) {
            return false;
          }
        }
        
        return true;
      }
      
      console.log(isPalindrome("madam"));
