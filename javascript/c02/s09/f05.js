/*
Step 5
The formula to generate a random number between two values is the following:

Example Code
Math.random() * (maximum - minimum) + minimum;
This will produce a result that is a floating point number between two values.

Create a variable called randomNum2 and assign it the result of generating a value between the min and max values.

Then, log the randomNum2 variable to see the result. Try refreshing the page to see different results.
*/

let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
let randomNum = Math.random();
console.log(randomNum);
console.log("Now, generate a random number between two values.");
let min = 1;
let max = 100;
let randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);
