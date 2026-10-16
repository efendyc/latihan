const fruitPrice = {
    apple: 1.5,
    banana: 0.5,
    orange: 0.8,
    mango: 2.0
}
for (const fruit in fruitPrice) {
    console.log(`The price of ${fruit} is $${fruitPrice[fruit]}`);
}

output:
The price of apple is $1.5
The price of banana is $0.5
The price of orange is $0.8
The price of mango is $2
