/*
Step 18
The last console statement outputs -1 because the substring "learning" is not found in the "Learning is fun. sentence.

The indexOf method is case-sensitive. So the substring "learning" is not the same as the substring "Learning".

Now that you understand how some common string methods work, you can complete the workshop by logging one last message to the console.

Add a console statement that outputs the message "I hope you enjoyed learning today." to the console.

And with that final message, you have completed the workshop!
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

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");
