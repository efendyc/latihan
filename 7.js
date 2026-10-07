const Vegetable = {
    Carrot: 'High',
    Broccoli: 'Medium',
    Spinach: 'Low',
};
for (const vegetable in Vegetable) {
    console.log(`Vegetable Demand ${vegetable} is ${Vegetable[vegetable]}`);
}