//length property
const animals = ['cat', 'dog', 'bird', 'fish', 'hamster'];
animals.push('rabbit');
console.log(animals.length);

animals.length = 3;
const newLength = animals.length;
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}

output:
6
cat
dog
bird
