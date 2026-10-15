const readline = require('readline-sync');

// Mengubah input string langsung menjadi angka (Number)
const nomorHari = Number(readline.question("masukan pilihan [1 - 7]: "));

switch (nomorHari) {
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  case 7:
    console.log('Minggu');
    break;
  default:
    console.log('Nomor hari tidak valid');
}

output:
masukan pilihan [1 - 7]: 3
Rabu
