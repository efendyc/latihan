//Symbol
const person = {
  name: "John",
  age: 30,
};

const id = Symbol("id");
person[id] = 12345;
for (const key in person) {
    console.log(key); // Output: name, age
}

output:
{ name: 'John', age: 30, Symbol(id): 12345 }
