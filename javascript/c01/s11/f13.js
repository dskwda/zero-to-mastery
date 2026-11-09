/*
Step 13
In previous lessons, you learned how to access the last character in a string like this:

Example Code
const firstName = "Jessica";

// returns "a"
firstName[firstName.length - 1];
string.length - 1 will always give you the last index number for a string.

Create a new variable called lastCharacter and assign it the value of the last character in the subject variable.

Then, log the value of the lastCharacter variable to the console.
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

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
console.log(subject[subject.length - 1]);

let lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);
