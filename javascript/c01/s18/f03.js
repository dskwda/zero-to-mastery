/*
Step 3
In a prior lesson, you learned about the replace() method which is used to locate a substring in a string and replace it with another value.

Here is an example:

Example Code
const text = "I love JavaScript!";
const newText = text.replace("JavaScript", "coding");
// Result: "I love coding!"
Remember that strings are immutable which means the original text is not modified in that example. A new string is created instead.

Create a new variable called replacedString and assign it originalString.replace("cats", "dogs").
*/

let originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);
let replacedString = originalString.replace("cats", "dogs");
