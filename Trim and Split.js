//trim untuk menghilangkan spasi, split untuk memisahkan

const readline = require('readline-sync');
const name = readline.question("Enter your name: ");
const splits = name.trim().split(' ');
const strings =[]
for (let i = 0; i<splits.length; i++){
    strings.push(splits[i]);
}
console.log(splits);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

output:
Enter your name: John Koli Sihombing
[ 'John', 'Koli', 'Sihombing' ]
JOHN KOLI SIHOMBING
john koli sihombing
