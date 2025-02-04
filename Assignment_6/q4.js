function reverseNumber(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(12345)); // Output: 54321

// Bonus Challenge: Check if the number is a palindrome
function isPalindrome(num) {
  let reversed = reverseNumber(num);
  return num === reversed;
}
console.log(isPalindrome(121)); // Output: true
