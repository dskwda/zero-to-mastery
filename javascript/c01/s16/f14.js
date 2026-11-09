/*
Step 14
As you recall from earlier lessons and workshops, you can extract portions of a string by using the slice() method.

Here is a reminder:

Example Code
const str = "abcd";
str.slice(0, 3); // "abc"
You should change the existing camelCasedVersion assignment by replacing the empty string with lowercaseWord.slice(0, 5).

Now you should see the word "camel" in the console.
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
let camelCasedVersion = lowercaseWord.slice(0, 5);

console.log("Camel cased version:");

console.log(camelCasedVersion);
