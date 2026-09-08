const readline = require('readline-sync');
const miles = Number(readline.question('Enter miles: '));
const km = miles * 1.60934;
console.log(+ miles + ' miles is equal to '+ km + ' kilometers ');