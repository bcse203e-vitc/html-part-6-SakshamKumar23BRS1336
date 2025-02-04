function findLargest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findLargest(10, 20, 15)); // Output: 20

// Bonus Challenge: Largest among N numbers
function findLargestN(numbers) {
  return Math.max(...numbers);
}
console.log(findLargestN([10, 20, 15, 25, 30])); // Output: 30
