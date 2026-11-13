/*
Step 12
The next portion of the workshop will review how to round numbers to the nearest whole integer.

Start by adding a console.log() that logs the message "The Math.round() method rounds the value to the nearest whole integer." to the console.
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
