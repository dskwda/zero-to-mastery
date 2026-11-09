/*
Step 5
Now it is time to see the result.

Start by adding a console.log() with the string "Result of trimming whitespace from both ends:".

Then below that console.log(), add another console.log() with the cleanedInput variable.
*/

let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput = userInput.trim();

console.log("Result of trimming whitespace from both ends:");

console.log(cleanedInput);
