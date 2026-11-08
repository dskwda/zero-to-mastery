/*
Step 12
If you need to create a new string where all of the letters are in lowercase, you can use the toLowerCase() method.

Start by creating a variable called lowerCaseInput and assign it the result of using the toLowerCase() method on the cleanedInput variable.

Then log the string "Result of using the toLowerCase() method:".

Finally, add another console.log() for the lowerCaseInput variable.
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
