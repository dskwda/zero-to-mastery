/*
Step 10
In previous lessons, you learned how to access characters in a string like this:

Example Code
const firstName = "Jessica";
// returns "J"
firstName[0];
Remember that index numbers start at 0, so the first letter in a string will always be at index 0.

Start by adding another console statement.

Inside the console statement, output the first letter of the subject variable using bracket notation and the correct index number.
*/

console.log("Hi there!");

let botName = "teacherBot";

let greeting = `My name is ${botName}.`;
console.log(greeting);

let subject = "JavaScript";
let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);
