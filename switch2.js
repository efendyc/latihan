const readline = require('readline-sync');
const nilai = Number(readline.question("masukan pilihan [1 - 100]: "));
switch(true){
    case nilai >= 80:
        console.log('A');
        break;
    case nilai > 70:
         console.log('B');
        break;
    case nilai > 60:
        console.log('C');
        break;
    case nilai > 50:
        console.log('D');
        break;
    case nilai > 40:
        console.log('E');
        break;
    default:
        grade = "F";
}

output:
masukan pilihan [1 - 100]: 66
C
