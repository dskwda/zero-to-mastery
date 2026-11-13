/*
Step 6
Up until this point, you have only been dealing with floating point numbers and the number 0.

For the next part of the workshop, you will review how to work with the Math.floor() method.

Start by adding a console.log() that logs the message "The Math.floor() method rounds the value down to the nearest whole integer."
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
