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
        return '{rectangle}';
    };
}

const rect1 = new rectangle(10, 20);

console.log(String(rect1)); // Output: {rectangle}