const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  greet: function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am a ${this.occupation}.`);
  }
};

person.greet();


output:
Hello, my name is John Doe, I am 30 years old, and I am a Software Developer.
