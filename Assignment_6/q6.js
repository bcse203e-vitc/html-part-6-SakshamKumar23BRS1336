function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(25)); // Output: 77

// Bonus Challenge: Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(77)); // Output: 25
