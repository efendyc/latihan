const fruitPrice = {
    apple: 1.5,
    banana: 0.5,
    orange: 0.8,
    mango: 2.0
}
for (const fruit in fruitPrice) {
    console.log(`The price of ${fruit} is $${fruitPrice[fruit]}`);
}
