const countryCode = {
    "US": "United States",
    "CA": "Canada",
    "GB": "United Kingdom",
    "AU": "Australia",
    "DE": "Germany"
}
const readline = require('readline-sync');
const code = readline.question("Enter a country code (e.g., US, CA, GB, AU, DE): ").toUpperCase();
if (countryCode[code]) {
    console.log(`The country for code ${code} is: ${countryCode[code]}`);
} else {
    console.log("Country code not found.");
}

output:
Enter a country code (e.g., US, CA, GB, AU, DE): AU
The country for code AU is: Australia
