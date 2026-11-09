/*
Step 6
Next, create a new variable called dogsOnlySentence and assign it exampleSentence.replace("cats", "dogs").

Then below that variable, log to the console "Replacing all occurrences of cats with dogs:". Below that console.log(), add another console.log() for the dogsOnlySentence variable.

You should now see the text "I love dogs and cats are so much fun!" logged to the console. But that isn't the desired result. In the next step, you will learn how to fix it so the text reads "I love dogs and dogs are so much fun!".
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
let dogsOnlySentence = exampleSentence.replace("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);
