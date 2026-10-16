const animals = ['cat', 'dog', 'bird', 'fish', 'hamster'];
animals.unshift('rabbit');
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}
console.log('-------------------');

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}

//untuk meletakkan data array diawal dengan unshift() dan menghapus data array diawal dengan shift()

output:
dog
bird
fish
hamster
-------------------
apple
banana
orange
grape
kiwi
