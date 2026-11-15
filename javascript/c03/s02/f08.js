/*
Step 8
The advantage of functions is that they can be called with different arguments, allowing you to reuse the same code with various values.

Here are some example function calls with different string arguments:

Example Code
// function definition
function greetUser(name) {
  console.log(`Hello ${name}!`);
}

// function calls
greetUser("John"); // "Hello John!"
greetUser("Jane"); // "Hello Jane!"
Add a console.log that calls the calculateSum function with the arguments 2 and 5.
*/

function calculateSum(num1, num2) {
    return num1 + num2;
}
console.log(calculateSum(2, 5));
