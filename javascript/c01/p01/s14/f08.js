/*
Step 8
The slice() method extracts a section of a string. It takes two arguments: the start index (included) and the end index (not included).

Here is an example:

Example Code
const greeting = "Hello World";
const firstWord = greeting.slice(0, 5);
console.log(firstWord); // "Hello"
String indices start at 0. In the message string, the character at index 11 is f (the start of "freeCodeCamp").

Create a variable named platform. Then assign it the result of using message.slice(11, 23) to extract "freeCodeCamp".
*/

let fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

let hasJavaScript = fccSentence.includes("JavaScript");

console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

let hasLowercaseFCC = fccSentence.includes("freecodecamp");

console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

let message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

let platform = message.slice(11, 23);
