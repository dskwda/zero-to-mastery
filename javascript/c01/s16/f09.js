/*
Step 9
Now it is time to see the results of trimming whitespace at the end of the string.

Below your trimmedEnd variable, add a console.log() with the string "After using the trimEnd() method, trailing spaces removed:".

Then below that console.log(), add another console.log() with the trimmedEnd variable.
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
