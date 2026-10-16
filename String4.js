//string
const str = 'https:facebook.com';
const isValidUrl = str.startsWith('https:') || str.startsWith('http:');
console.log(isValidUrl); // true

const fileName = 'image.png';
const isValidFile = fileName.endsWith('.png') || fileName.endsWith('.jpg');
console.log(isValidFile); // true
