function isPalindrome(word) {
  const characters = word.split(''); // Convert the string to an array of characters
  let start = 0;
  let end = characters.length - 1;

  while (start < end) {
    if (characters[start] !== characters[end]) {
      return false; // If characters at start and end pointers are not equal, it's not a palindrome
    }
    start++;
    end--;
  }

  return true; // If the loop completes without returning false, it's a palindrome
}

/* 
  Add your pseudocode here
  Function isPalindrome(word):
    1. Convert the string 'word' to an array of characters and store it in the variable 'characters'.
    2. Initialize pointers 'start' and 'end' for the array.
    3. Iterate while 'start' pointer is less than 'end' pointer.
    4. Check if characters at 'start' and 'end' pointers are equal.
    5.   If not equal, return false as it's not a palindrome.
    6. Move the 'start' and 'end' pointers towards each other.
    7. If the loop completes without returning false, return true as it's a palindrome.
*/

/*
  Add written explanation of your solution here
  The function takes a word as input and converts it to an array of characters. It then uses two pointers, 'start' and 'end', initialized at the beginning and end of the array, respectively. The function iterates through the array, checking if the characters at the 'start' and 'end' pointers are equal. If not, it immediately returns false, indicating that the word is not a palindrome. The pointers move towards each other in each iteration. If the loop completes without returning false, the word is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
