/*
Step 7
Now it is time to see the results of trimming whitespace at the beginning of the string.

Below your trimmedStart variable, add a console.log() with the string "After using the trimStart() method, leading spaces removed:".

Then below that console.log(), add another console.log() with the trimmedStart variable.
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
