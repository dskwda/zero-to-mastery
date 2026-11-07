/*
Step 8
Now it is time to get the length of the topic string.

You can use template literals inside console statements like this:

Example Code
const developer = "Jessica";
console.log(`Hello, my name is ${developer}.`);
Start by outputting the message Here is an example of using the length property on the word [topic]. to the console.

Remember to replace [topic] with the topic variable, and use proper template literal syntax as you did in the previous steps.

Then, add a second console.log statement that outputs the length of the topic string to the console.
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
