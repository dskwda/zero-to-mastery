/*
Step 9
It would be nice if the word "love" were repeated three times in the sentence "I love learning!".

As you recall in a prior lesson, you can repeat a string a specific number of times using the repeat() method. Here is an example:

Example Code
const word = "Hello!";
const repeatedWord = word.repeat(3);

console.log(repeatedWord);  // "Hello!Hello!Hello!"
Since strings are immutable, this method will not modify the original string. It will return a new string with the repeated content.

Create a variable called repeatedLove and assign it "love ".repeat(3). Then log to the console the repeatedLove variable so you can see the result.
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
