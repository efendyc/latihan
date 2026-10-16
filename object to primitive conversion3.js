//object to primitive conversion
function rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getAraea = function() {
        return this.width * this.height;
    }
}

const rect1 = new rectangle(10, 20);
const rect2 = new rectangle(5, 15);
const rect3 = new rectangle(7, 12);

console.log(rect1.getAraea()); // Output: 200
console.log(rect2.getAraea()); // Output: 75
console.log(rect3.getAraea()); // Output: 84
