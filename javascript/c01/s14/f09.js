/*
Step 9
Now it is time to log the result of using the slice() method.

Use either a template literal or string concatenation to log the message The word "<platform>" was sliced from the message. to the console. Replace <platform> with the actual value of the variable.
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
