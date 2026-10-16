//Object to Primitive Conversion
const person = {
    name: "John",
    age: 30,
    salary: 50000,
}

person[Symbol.toPrimitive] = function(hint) {   
    if(hint === "number") {
        return this.salary;
    }
};

console.log(+person); // 50000
