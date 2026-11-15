/*
Step 12
Now it is time to add the multiplication functionality to your calculator.

Declare a function called calculateProduct that takes two parameters, num1 and num2.

Inside the function, return the product of the two parameters.

Then, add a console.log that calls the calculateProduct function with the arguments 13 and 5.
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
