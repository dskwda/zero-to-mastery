/*
Step 8
Great, your function returns a 0, but it doesn’t count anything yet.

To fix this, inside getMatchedWordCount, create a for...of loop with an empty code block that iterates over each word in sentence.
*/

function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;
  for (const word of sentence) {
    
  }
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

