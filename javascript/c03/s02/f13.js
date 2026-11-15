/*
Step 13
The next step is to add the division functionality to your calculator.

Declare a function called calculateQuotient that takes two parameters, num1 and num2.

Inside the function, return the quotient of the two parameters.

Then, add a console.log that calls the calculateQuotient function with the arguments 7 and 11.
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
    return num1 / num2;
}
console.log(calculateQuotient(7, 11));
