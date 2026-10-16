//Number
const result1 = 255..toString(16);
console.log(result1); // Output: ff

const result2 = Number.parseInt("100px");
console.log(result2); // Output: 100

const result3 = Number.parseFloat("3.14em");
console.log(result3); // Output: 3.14

const result4 = Number.isNaN(NaN);
console.log(result4); // Output: true

const result5 = Number.isFinite(10 / 0);
console.log(result5); // Output: false
