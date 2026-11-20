/*
Step 8
Test your getWordCount by creating a wordCount variable set to the calling of the getWordCount function with the sentence "I love freeCodeCamp".

After that, log the following to the console: "Word Count: [Word count goes here]". Replace [Word count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

With that, your sentence analyzer project is done!
*/

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;
  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  const words = sentence.trim().split(" ");
  let count = 0;
  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }
  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
