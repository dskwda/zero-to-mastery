/*
Step 10
It would be nice to see that repeated word in a sentence. Create a new variable called newSentence and assign it the result of concatenating the word "I " with the repeatedLove variable followed by concatenating the string " learning.". Then log the newSentence variable to the console. You can choose to use either the + operator or template literals for the string concatenation.

Now you should see the text "I love love love  learning.".

NOTE: There is an extra space after the last "love" which is correct. In the last step, you will trim that extra space.
*/

let originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);
let replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);
let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);
let dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);
let learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);
let repeatedLove = "love ".repeat(3);
console.log(repeatedLove);
let newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
