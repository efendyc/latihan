//Mencari nilai rata-rata menggunakan for

const readline = require('readline-sync');
const numberOfTest = Number(readline.question('How many test do you have this week: '));

// 1. Initialize a running total outside the loop
let totalScore = 0;

// 2. Properly declare the loop variable 'i' with 'let'
for (let i = 1; i <= numberOfTest; i++) {
    const testScore = Number(readline.question('Test - ' + i + ': '));
    
    // 3. Add the current test score to the running total
    totalScore += testScore; 
}

// 4. Calculate the average outside the loop after all scores are gathered
const average = totalScore / numberOfTest;

console.log('The average: ' + average);
