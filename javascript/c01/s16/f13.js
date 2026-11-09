/*
Step 13
There will be times where you will need to use multiple methods to create a new string. Over the next few steps, you will use some of the methods you have learned so far to create a new string that uses the camelCase naming convention.

Start by creating a variable called lowercaseWord and assign it the string "camelcase".

Below that lowercaseWord variable, create another variable called camelCasedVersion and assign it an empty string for now.

Below that camelCasedVersion variable, add a console.log() with the string "Camel cased version:" followed by another console.log() for the camelCasedVersion variable.
*/

let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput = userInput.trim();

console.log("Result of trimming whitespace from both ends:");

console.log(cleanedInput);

let trimmedStart = userInput.trimStart();

console.log("After using the trimStart() method, leading spaces removed:");

console.log(trimmedStart);

let trimmedEnd = userInput.trimEnd();

console.log("After using the trimEnd() method, trailing spaces removed:");

console.log(trimmedEnd);

let upperCaseInput = cleanedInput.toUpperCase();

console.log("Result of using the toUpperCase() method:");

console.log(upperCaseInput);

let lowerCaseInput = cleanedInput.toLowerCase();

console.log("Result of using the toLowerCase() method:");

console.log(lowerCaseInput);

let lowercaseWord = "camelcase";
let camelCasedVersion = "";

console.log("Camel cased version:");

console.log(camelCasedVersion);
