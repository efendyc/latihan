//function declaration and arrow function
function add(a, b) {
    return a + b;
};

//function expression
const subtract = function(a, b) {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const readline = require('readline-sync');
const num1 = readline.questionInt("Enter the first number: ");
const num2 = readline.questionInt("Enter the second number: ");

console.log(`The sum is: ${add(num1, num2)}`);
console.log(`The difference is: ${subtract(num1, num2)}`);
console.log(`The product is: ${multiply(num1, num2)}`);
console.log(`The quotient is: ${divide(num1, num2)}`);
