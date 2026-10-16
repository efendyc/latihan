// How Objects Are Copied
let rectangle = {
  width: 20,
  height: 10,
};
let copiedRectangle = rectangle; // copied by reference
copiedRectangle.width = 25; // copied by value
console.log(rectangle.width); // 20
console.log(copiedRectangle.width); // 25

output:
25
25
