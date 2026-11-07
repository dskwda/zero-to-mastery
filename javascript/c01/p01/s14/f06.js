/*
Step 6
The includes() method is case-sensitive, meaning it distinguishes between uppercase and lowercase letters.

Create a variable named hasLowercaseFCC. Then assign it the result of using the includes() method to check if fccSentence includes "freecodecamp" (all lowercase).

Then use either a template literal or string concatenation to log the message fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive. to the console. Replace <hasLowercaseFCC> with the actual value of the variable.
*/

let fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

let hasJavaScript = fccSentence.includes("JavaScript");

console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

let hasLowercaseFCC = fccSentence.includes("freecodecamp");

console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);
