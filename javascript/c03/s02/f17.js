/*
Step 17
To test your calculateSquare function, you will need to call the function a couple of times.

Add a console.log that calls the calculateSquare function with the argument of 2.

Then, add another console.log that calls the calculateSquare function with the argument of 9.
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
