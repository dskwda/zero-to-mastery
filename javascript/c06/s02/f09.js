/*
Step 9
Now, inside the loop, log the following template literal to the console: Checking "${word}" against "${match}" | Running count: ${count}
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
