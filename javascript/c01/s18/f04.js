/*
Step 4
Now it is time to see the result from using the replace() method.

Start by adding a console.log() with the value "After using the replace() method:".

Then below that console.log(), add another console.log() with the replacedString variable.

Take a look at the console and you should see that the new sentence says "I love dogs." instead of the original "I love cats.".
*/

let originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);
let replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);
