// Methods and Constructors
const rectangle1 = {
    width: 4,
    height: 5,
    getArea: function() {
        return this.width * this.height;
    },
};
const rectangle2 = {
    width: 8,
    height: 10,
    getArea: function() {
        return this.width * this.height;
    },
};

const rectangle3 = {
    width: 12,
    height: 15,
    getArea: function() {
    return this.width * this.height;
    },
};

function rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() { 
        return this.width * this.height;
    };
}
const rect1 = new rectangle(10, 10);
const rect2 = new rectangle(20, 10);
const rect3 = new rectangle(40, 10);

console.log(rect1.getArea()); 
console.log(rect2.getArea()); 
console.log(rect3.getArea()); 

output:
Hello, my name is John and I am 30 years old.
