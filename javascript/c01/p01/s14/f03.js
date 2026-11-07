/*
Step 3
As you recall from the prior lessons, the includes() method checks if a string contains a specific substring and returns true or false.

Here is an example using the includes() method:

Example Code
const text = "Hello World";
const hasHello = text.includes("Hello");
console.log(hasHello); // true
Create a variable named hasFreeCodeCamp. Then assign it the result of using the includes() method on fccSentence to check if it contains "freeCodeCamp".
*/

let fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
