//build in contructor function Array()

const animals = [];
animals.push('cat');
animals.push('dog');
animals.push('bird');
animals.push('fish');
animals.push('hamster');
animals.pop();
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}

console.log('-------------------');

const fruits = [];
fruits.push('apple');
fruits.push('banana');
fruits.push('orange');
fruits.push('grape');
fruits.push('kiwi');
fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}

output:
cat
dog
bird
fish
-------------------
apple
banana
orange
grape
