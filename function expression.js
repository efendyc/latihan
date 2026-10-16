// Function expression
const readline = require('readline-sync');
const age = readline.questionInt("What is your age? ");
let logGreeting;

if (age >= 18) {
    logGreeting = function() {
        console.log("Hello there!");
    };
}
    else { 
        logGreeting = function() {
            console.log("Hey kiddo!");
        }
    };
logGreeting();

output:
What is your age? 10
Hey kiddo!


output:
Enter the first number: 10
Enter the second number: 5
The sum is: 15
The difference is: 5
The product is: 50
The quotient is: 2
