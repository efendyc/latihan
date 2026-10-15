//parseInt(string, radix);

console.log(parseInt("42", 10));    // Output: 42
console.log(parseInt("-42", 10));   // Output: -42 (Handles negative numbers)
console.log(parseInt("  42  ", 10));// Output: 42 (Ignores leading/trailing whitespace)
console.log(parseInt("42px", 10));      // Output: 42 (Stops at 'p')
console.log(parseInt("12.99", 10));    // Output: 12 (Stops at the decimal point)
console.log(parseInt("2026@year", 10)); // Output: 2026 (Stops at '@')
