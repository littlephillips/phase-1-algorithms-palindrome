const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  // Write your algorithm here
  var reversed = word.split("").reverse().join("");
  //console.log(reversed)
  if(reversed === word) return true;
  return false;
}

isPalindrome("noon")





/* 
  Add your pseudocode here
  input a string 
  split the characters
  reverse the string 
  join the string
  return value should be true
*/

/*
  Add written explanation of your solution here
  check is string given is the same as reversed
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
