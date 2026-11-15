/*
Step 4
If the applicant's annual income is greater than or equal to minIncomeForCondo, AND if their credit score is greater than or equal to minCreditScoreForCondo, then they qualify for a condo and car loan.

Check if that's true in the getLoanMessage function. If it is, return the string "You qualify for a condo and car loan."
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
    }
}
