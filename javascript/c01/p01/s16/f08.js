/*
Step 8
To trim whitespace at the end of a string, you can use the trimEnd() method.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimEnd(); // "  I love learning."
Create a variable called trimmedEnd and assign it the result of using the trimEnd() method on the userInput variable.
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
