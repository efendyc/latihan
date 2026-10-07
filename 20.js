//object to primitive conversion
function rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getAraea = function() {
        return this.width * this.height;
    };
    this[Symbol.toPrimitive] = function(hint) {
        if (hint === "number" || hint === "default") {
            return this.getAraea();
        }
        return 'rectangle object';
    };
}

const rect1 = new rectangle(10, 20);
const rect2 = new rectangle(5, 15);
console.log(rect1 > rect2); // Output: true
