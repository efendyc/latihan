function arr(){
    this.lenght = 0;
    this.push = function(value) {
        this[this.lenght] = value;
        this.lenght++;
    }
    this.pop = function() {
        delete this[this.lenght - 1];
        this.lenght--;
    }

}
const animals = new arr();
animals.push('cat');
animals.push('dog');
animals.push('bird');
animals.push('fish');
animals.push('hamster');
for (let i = 0; i < animals.lenght; i++) {
    const animal = animals[i];
    console.log(animal);
}

console.log('==============')

const fruits = new arr();
fruits.push('apple');
fruits.push('banana');
fruits.push('orange');
fruits.push('grape');
fruits.push('kiwi');
for (let i = 0; i < fruits.lenght; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}

output:
og
bird
fish
hamster
==============
apple
banana
orange
grape
kiwi
