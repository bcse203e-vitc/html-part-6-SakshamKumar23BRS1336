function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

// Bonus Challenge: Recursive approach
function generateFibonacciRecursive(n, fib = [0, 1]) {
  if (fib.length >= n) return fib.slice(0, n);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return generateFibonacciRecursive(n, fib);
}
console.log(generateFibonacciRecursive(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
