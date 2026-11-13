/*
Build a Fortune Teller
In this lab, you will define five fortunes and randomly select one of them to display the fortune to the user.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice. You can use the below options if you like:

"Your cat will look very cuddly today."
"The weather will be nice tomorrow."
"Be cautious of your new neighbors."
"You will find a new hobby soon."
"It would be wise to avoid the color red today."
You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.

You should create a selectedFortune variable and assign the appropriate fortune based on these rules:

If randomNumber is 1, assign the value of fortune1 to selectedFortune.
If randomNumber is 2, assign the value of fortune2 to selectedFortune.
If randomNumber is 3, assign the value of fortune3 to selectedFortune.
If randomNumber is 4, assign the value of fortune4 to selectedFortune.
If randomNumber is 5, assign the value of fortune5 to selectedFortune.
You should log the selectedFortune to the console.

Tests:
Waiting:1. You should initialize fortune1 with a string value.
Waiting:2. You should initialize fortune2 with a string value.
Waiting:3. You should initialize fortune3 with a string value.
Waiting:4. You should initialize fortune4 with a string value.
Waiting:5. You should initialize fortune5 with a string value.
Waiting:6. You should use the Math.random() method to generate a random number.
Waiting:7. You should generate a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.
Waiting:8. You should have a selectedFortune variable that is assigned a value based on the value of randomNumber.
Waiting:9. The randomNumber should correspond to its fortune. For example, if randomNumber is 1, the selectedFortune should be equal to fortune1 and so on.
Waiting:10. You should output the selectedFortune to the console.
*/

let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";
const min = 1;
const max = 5;
let randomNumber = Math.ceil(Math.random() * (max - min) + min);
let selectedFortune;
if (randomNumber == 1) {
    selectedFortune = fortune1;
}
if (randomNumber == 2) {
    selectedFortune = fortune2;
}
if (randomNumber == 3) {
    selectedFortune = fortune3;
}
if (randomNumber == 4) {
    selectedFortune = fortune4;
}
if (randomNumber == 5) {
    selectedFortune = fortune5;
}
console.log(selectedFortune);
