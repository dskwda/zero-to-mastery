/*
Step 5
Now, it's time to use the variables you created in the previous step.

In previous lessons, you learned how to work with template literals like this:

Example Code
const name = "John";
const age = 30;

// My name is John and I am 30 years old.
`My name is ${name} and I am ${age} years old.`;
Start by creating a sentence variable.

Using template literal syntax, assign the string Today, you will learn about [topic variable goes here] in [subject variable goes here]. to the sentence variable.

You will replace the [topic variable goes here] and [subject variable goes here] placeholders with the topic and subject variables and ${} syntax.

Finally, log the sentence variable to the console.
*/

console.log("Hi there!");

let botName = "teacherBot";

let greeting = `My name is ${botName}.`;
console.log(greeting);

let subject = "JavaScript";
let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);
