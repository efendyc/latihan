const readline = require('readline-sync');
const firstNum = Number(readline.question('Enter first number: '));
const secondNum = Number(readline.question('Enter second number: '));
const thirdNum = Number(readline.question('Enter third number: '));
const average = (firstNum + secondNum + thirdNum) / 3;
console.log('The average of '+ firstNum + ', ' + secondNum +', ' + thirdNum + ' is ' + average);
