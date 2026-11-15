/*
Step 15
If you look in the console, you will see the Infinity value. Infinity is a special value in JavaScript that represents a number that is greater than any other number.

The division by zero is not a valid operation in mathematics.

To account for this edge case, you should update your calculateQuotient function to instead check if num2 is zero.

If it is, the function should return the string "Error: Division by zero". Otherwise, it should return the result of dividing num1 by num2.
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
