/*
Step 11
Now it is time to access the second letter of the subject variable.

Start by adding a console statement that outputs the message Here is an example of accessing the second letter in the word [subject]. Remember to replace [subject] with the actual value of the subject variable and use correct template literal syntax.

Then add another console statement that outputs the second letter of the subject variable using bracket notation and the correct index number.
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
