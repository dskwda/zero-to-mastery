/*
Step 14
For the last part of the workshop, you will review how to find the index position of substring in a string. Remember that a substring is a part of a string.

Start by creating a variable called learningIsFunSentence and assign it the string value of "Learning is fun.".
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

let learningIsFunSentence = "Learning is fun.";
