/*
Step 10
There will be times where you will need to create a new string with a different casing.

To create a new string with all of the letters converted to uppercase, you can use the toUpperCase() method.

Here is an example:

Example Code
const sentence = "I love to code!";
sentence.toUpperCase(); // "I LOVE TO CODE!"
Create a variable called upperCaseInput and assign it the result of using the toUpperCase() method on the cleanedInput variable.
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
