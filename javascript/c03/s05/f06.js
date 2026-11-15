/*
Step 6
If the applicant's annual income and credit score fall below minIncomeForCar and minCreditScoreForCar, then they don't qualify for any loan. So, return the string "You don't qualify for any loans."
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
