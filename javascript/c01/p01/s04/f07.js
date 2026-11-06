/*
Earlier, you created the bot and botLocation variables. Now, you will use them to output new messages to the console.

In previous lessons, you learned how to work with string concatenation using the + operator to concatenate strings together like this:

Example Code
let firstName = "John";

console.log("Hello, my name is " + firstName + ".");
// result: "Hello, my name is John."
Remember that you need to be mindful of spaces when concatenating strings with variables.

Create a variable called botIntroduction.

Then use string concatenation with the + operator to join the string "My name is " followed by the bot variable followed by a period (.).

Assign this value to the botIntroduction variable.

Then, log the botIntroduction variable to the console.
*/

let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

let botIntroduction = "My name is " + bot + ".";

console.log(botIntroduction);
