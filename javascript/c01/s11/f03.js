/*
Step 3
Now it is time to create a greeting using the botName variable.

In previous lessons, you learned how to concatenate strings using template literals like this:

Example Code
const name = "John";

// "Hello, John!"
`Hello, ${name}!`;
Start by creating a variable called greeting.

Next, using template literal syntax, assign a string that says My name is, followed by the botName variable, and ending with a period (.).

Finally, log the greeting variable to the console.
*/

console.log("Hi there!");

let botName = "teacherBot";

let greeting = `My name is ${botName}.`;
console.log(greeting);
