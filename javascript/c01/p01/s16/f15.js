/*
Step 15
As you recall from earlier lessons, the camelCase naming convention starts with a lowercase letter for the first word, and each subsequent word begins with an uppercase letter followed by lowercase letters.

Here are some reminder examples:

Example Code
freeCodeCamp
camelCase
learningIsFun
The second word in the lowercaseWord variable is "case". To access the c in that word, you can use lowercaseWord[5].

Update the camelCasedVersion assignment to use the + operator to concatenate lowercaseWord.slice(0, 5) with the result of using the correct method for converting strings to uppercase on lowercaseWord[5].

Now you should see camelC in the console.
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
let camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();

console.log("Camel cased version:");

console.log(camelCasedVersion);
