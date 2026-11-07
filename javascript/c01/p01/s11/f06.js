/*
Step 6
For this next portion of the project, the bot will teach working with the string length property.

Start by creating a new variable called strLengthIntro.

Then using template literal syntax, assign the string Here is an example of using the length property on the word [subject]. to the strLengthIntro variable.

Replace [subject] with the subject variable like you did earlier.

Finally, log the strLengthIntro variable to the console.
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
