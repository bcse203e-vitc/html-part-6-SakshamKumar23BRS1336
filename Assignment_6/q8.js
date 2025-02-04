function findGCD(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(findGCD(12, 18)); // Output: 6

// Bonus Challenge: Recursive approach
function findGCDRecursive(a, b) {
  return b === 0 ? a : findGCDRecursive(b, a % b);
}
console.log(findGCDRecursive(12, 18)); // Output: 6
