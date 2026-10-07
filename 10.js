//Methods and Constructors
const person = {
    name: "John",
    age: 30,
};
person.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
person.greet(); // Output: Hello, my name is John and I am 30 years old.
