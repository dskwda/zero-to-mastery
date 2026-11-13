/*
Step 13
In previous lessons, you learned that the Math.round() method rounds the value to the nearest whole integer.

Here are some examples:

Example Code
Math.round(6.7); // 7
Math.round(3.2); // 3
This differs from the Math.floor() and Math.ceil() methods, which round down and up to the nearest whole integer, respectively.

Create a new variable called numRounded and assign the result of rounding the number 2.7. Then, log the value of numRounded to the console.

Below that, create another new variable called numRounded2 and assign the result of rounding the number 11.2. Then, log the value of numRounded2 to the console.
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
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
let numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);
console.log("Now, generate a random integer between two values.");
let randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);
console.log("The Math.round() method rounds the value to the nearest whole integer.");
let numRounded = Math.round(2.7);
console.log(numRounded);
let numRounded2 = Math.round(11.2);
console.log(numRounded2);
