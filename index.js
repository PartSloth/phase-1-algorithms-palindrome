function isPalindrome(word) {
  const testArr = [];
  let originalArr = Array.from(word);
  originalArr.forEach(letter =>{
    testArr.unshift(letter);
  })
  let original = originalArr.join('');
  let test = testArr.join('');
  return original === test ? true : false;
}

/* 
  declare array1
  declare array2
  .from string into array1
  for each index of array1
    unshift char to array2
  .join('') array1
  .join('') array2 
  if statement
  return comparison of both strings
*/

/*
Create an original array from the string word passed into the isPalindrome function. Declare an empty test array. Iterate through the original array and unshift each char into the test array. This will create a test array that is the reverse of the original array.
Then join each array back into a string to use in the ternary operator to check if the word is a palindrome. If yes, function returns true. If not, function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("jelly"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
