//Symbol
const person = {
  name: "John",
  age: 30,
  [Symbol("id")]: 12345
};

console.log(person);

output:
{ name: 'John', age: 30, Symbol(id): 12345 }
