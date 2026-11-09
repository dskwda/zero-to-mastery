/*
Step 4
Your userInput value has some extra spaces at both ends of the string. To create a new string with that whitespace removed, you can use the trim() method.

Here is an example:

Example Code
const sentence = "  Learning about the trim method.  ";
sentence.trim(); // "Learning about the trim method."
Create a variable named cleanedInput and assign it the result of using the trim() method on the userInput variable.
*/

let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput = userInput.trim();
