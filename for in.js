//index and value, for in
const animals = {
    1 : 'Dog',
    2 : 'Sheep',
    3 : 'Fish',
};

for (const indexKey in animals){
    console.log(`The favourite pets ${indexKey} is ${animals[indexKey]}`);
}

output:
The favourite pets 1 is Dog
The favourite pets 2 is Sheep
The favourite pets 3 is Fish
