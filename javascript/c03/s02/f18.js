/*
Step 18
The last piece of functionality for your calculator will be the square root functionality.

A square is a number multiplied by itself. So, the square root would be the number that when multiplied by itself gives the original number.

For example, the square root of 9 is 3 because 3 * 3 = 9.

To get the square root of a number in JavaScript, you can use the Math.sqrt() method.

Here is an example:

Example Code
// result: 3
Math.sqrt(9);
Declare a function called calculateSquareRoot that takes a num parameter and returns the square root of num.
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
    return num ** 2;
}
console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
    return Math.sqrt(num);
}
