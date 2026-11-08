/*
Step 7
To get the desired output of "I love dogs and dogs are so much fun!", you will need to use the replaceAll() method instead of the replace() method. This method returns a new string for all matches to the substring.

Update the exampleSentence.replace("cats", "dogs") to use the replaceAll() method instead. Now you should see the correct text in the console.
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
