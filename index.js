function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("")
  let reversedArray = array.reverse()
  let reversedWord = reversedArray.join("")
  if (word == reversedWord){
    return true;
  } else {
    return false;
  }
}
isPalindrome('abba')
isPalindrome('racecar')


/* 
  Add your pseudocode here
  Create a variable to hold word
  Reverse the variable
  use if statement for comparision
*/

/*
  Add written explanation of your solution here
  Create a variable and reverse the string inside the variable. Use if statement to check if true else output false
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
