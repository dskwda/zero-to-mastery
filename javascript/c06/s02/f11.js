/*
Step 11
You’ve finished working on your getMatchedWordCount function!

Now you are going to test it with different data to see how it behaves.

Add a new console.log statement below the existing one that calls getMatchedWordCount with these parameters:

sentence: ["Do", "not", "fear", "the", "dandy", "lion"]
match: "dandy"
Congratulations! You’ve completed this workshop.
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
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);
console.log(
  getMatchedWordCount(
    ["Do", "not", "fear", "the", "dandy", "lion"],
    "dandy"
  )
);
