//Symbol
const person = {
  name: "John",
  age: 30,
};

const id = Symbol("id");
const city = Symbol("city");
person[id] = 12345;
person[city] = "New York";

console.log(person); 

output:
{ name: 'John', age: 30, Symbol(id): 12345, Symbol(city): 'New York' }
