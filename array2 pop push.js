const animals = {
    0: 'cat',
    1: 'dog',
    2: 'bird',
    3: 'fish',
    lenght: 4,
    push:  function(value) {
        this[this.lenght] = value;
        this.lenght++;
    },    
pop: function() {
    delete this[this.lenght - 1];
    this.lenght--;
}
}
animals.push('hamster');
for (let i = 0; i < animals.lenght; i++) {
    const animal = animals[i];
    console.log(animal);
}

output:
cat
dog
bird
fish
hamster
