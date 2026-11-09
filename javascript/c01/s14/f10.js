/*
Step 10
You can use slice() to extract from the beginning of a string.

Create a variable named greetingWord. Then assign it the result of using message.slice(0, 7) to extract the first word "Welcome".

Then use either a template literal or string concatenation to log the message The first word is "<greetingWord>". to the console. Replace <greetingWord> with the actual value of the variable.
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

console.log(`The word "${platform}" was sliced from the message.`);

let greetingWord = message.slice(0, 7);

console.log(`The first word is "${greetingWord}".`);
