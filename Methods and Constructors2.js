//Methods and Constructors
const rectangle = {
    width: 20,
    height: 10,
};
function getArea() {
    return this.width * this.height;
}
console.log(getArea.call(rectangle)); // Output: 200
