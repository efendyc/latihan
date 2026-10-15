const readline = require('readline-sync');
const size = Number(readline.question('Enter size: '));
for (let i = 0; i < size; i++) {
    let bintang = "";

    for (let j = 0; j <= i; j++) {
        bintang += "*";
    }

console.log(bintang);
}

output:
Enter size: 4
*
**
***
****
