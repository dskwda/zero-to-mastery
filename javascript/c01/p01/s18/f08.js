/*
Step 8
Now it is time to work with a new string method.

Begin by creating a variable called learningSentence and assign the string "I love learning!".

Then below that variable, log to the console "Original learning sentence:". Below that console.log(), add another console.log() for the learningSentence variable.
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
