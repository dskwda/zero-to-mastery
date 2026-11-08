/*
Step 6
There will be times where you will want to only trim whitespace at the beginning of the string. That is where the trimStart() method comes in handy.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimStart(); // "I love learning.  "
Remember that strings are immutable. This method will create a new string with the result. Not modify the original one.

Create a variable trimmedStart and assign it the result of using the trimStart() method on the userInput variable.
*/

let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput = userInput.trim();

console.log("Result of trimming whitespace from both ends:");

console.log(cleanedInput);

let trimmedStart = userInput.trimStart();
