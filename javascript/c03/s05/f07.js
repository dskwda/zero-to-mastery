/*
Step 7
Now, it is time to test out your getLoanMessage function.

Use the table below to create 4 variables and their values:

Variable Name	Value
duplexLoanMsg	getLoanMessage(85000, 850)
condoLoanMsg	getLoanMessage(65000, 690)
carLoanMsg	getLoanMessage(45000, 660)
noLoanMsg	getLoanMessage(25000, 550)
After that, log each variable to the console to see the messages.

With that, your loan qualification checker project is complete!
*/

let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan.";
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan.";
    } else {
        return "You don't qualify for any loans.";
    }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
