/*
Step 16
It would be nice to have your calculator calculate the square of a number. The square of a number is the number multiplied by itself.

To calculate the square of a number in JavaScript, you can use the Math.pow() method. The Math.pow() method takes two arguments: the base number and the exponent.

You can also use the exponentiation operator (**) to calculate the square of a number.

Here is an example:

Example Code
// base number is 5 
// the exponent is 2
Math.pow(5, 2); // 25

// using the exponentiation operator
5 ** 2; // 25
Declare a function called calculateSquare that takes a num parameter and returns the square of num.
*/

function calculateSum(num1, num2) {
    return num1 + num2;
}
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
    return num1 - num2;
}
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
    return num1 * num2;
}
console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
    return num2 ? num1 / num2 : "Error: Division by zero";
}
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
    return Math.pow(num, 2);
}
