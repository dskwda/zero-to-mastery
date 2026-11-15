/*
Step 3
To check which loan a user is qualified for based on the annualIncome and creditScore, you have to use if/else if statement or a ternary right inside the getLoanMessage function. You'll then return the appropriate message in the block of each condition.

Starting with the duplex loan, check if annualIncome is greater than or equal to minIncomeForDuplex AND if creditScore is greater than or equal to minCreditScoreForDuplex.

If that condition is true, then the applicant is eligible for a duplex loan and the other loans. So, inside the check, return the string "You qualify for a duplex, condo, and car loan."
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
    }
}
