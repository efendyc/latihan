// 1. Basic usage with decimal strings
const num1 = parseFloat("3.14");
console.log(num1); // Output: 3.14

// 2. Ignores leading and trailing spaces
const num2 = parseFloat("   5.5   ");
console.log(num2); // Output: 5.5

// 3. Stops parsing at the first non-numeric character
const num3 = parseFloat("42.25px");
console.log(num3); // Output: 42.25

// 4. Returns NaN if the first character cannot be converted
const num4 = parseFloat("abc88.9");
console.log(num4); // Output: NaN

// 5. Stops at a second decimal point
const num5 = parseFloat("10.50.80");
console.log(num5); // Output: 10.5
