function findLCM(a, b) {
  return (a * b) / findGCD(a, b); // Using GCD
}
console.log(findLCM(12, 18)); // Output: 36
