/*
Step 11
The slice() method can use negative indices to count from the end of the string. -1 refers to the last character.

Here is an example:

Example Code
const text = "JavaScript";
const lastThree = text.slice(-3);
console.log(lastThree); // "ipt"
Create a variable named endPunctuation. Then assign it the result of using message.slice(-1) to extract the last character.

Then use either a template literal or string concatenation to log the message The ending punctuation mark is a "<endPunctuation>" to the console. Replace <endPunctuation> with the actual value of the variable.
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

let endPunctuation = message.slice(-1);

console.log(`The ending punctuation mark is a "${endPunctuation}"`);
