function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(10)); // Output: Even

// Bonus Challenge: Separate even and odd numbers from an array
function separateEvenOdd(numbers) {
  let even = numbers.filter(num => num % 2 === 0);
  let odd = numbers.filter(num => num % 2 !== 0);
  return { even, odd };
}
console.log(separateEvenOdd([1, 2, 3, 4, 5])); // Output: { even: [2, 4], odd: [1, 3, 5] }
