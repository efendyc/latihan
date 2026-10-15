
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(10, 20)); // Generates 10, 11, ..., 19, or 20
