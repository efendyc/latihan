//How Objects Are Copied
let price = 100;
let copiedPrice = price; // copied by value

copiedPrice = 200;
console.log(price); // 100
console.log(copiedPrice); // 200

output:
100
200
