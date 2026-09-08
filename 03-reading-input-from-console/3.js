const readline = require('readline-sync');
const seconds = Number(readline.question('Enter seconds: '));
const minutes = Math.floor(seconds/60);
const remainingSeconds = seconds % 60;
console.log(+ seconds + ' is '+ minutes + ' and ' + remainingSeconds + ' seconds');