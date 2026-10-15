//padLeft and padRight
const padLeft = require('pad-left');
const result1 = padLeft(  '4', 4, '0') // 0004
const result2 = padLeft( '35', 4, '0') // 0035
const result3 = padLeft ('459', 4, '0') // 0459

const padRight = require('pad-right');
const result4 = padRight('4', 4 , '0') // '4000'
const result5 = padRight('35', 4, '0')// '3500'
const result6 = padRight('495', 4, '0' ) // '495~'
const result7 = padRight('abc', 4, '0') // 'abc '

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
