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
