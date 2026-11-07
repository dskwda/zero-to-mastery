/*
Step 5
Now it is time to see what happens when the substring is NOT found.

Create a variable named hasJavaScript. Then assign it the result of using the includes() method to check if fccSentence includes "JavaScript".

Then use either a template literal or string concatenation to log the message fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence. to the console. Replace <hasJavaScript> with the actual value of the variable.
*/

let fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

let hasJavaScript = fccSentence.includes("JavaScript");

console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);
