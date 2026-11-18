/*
Step 1
In this workshop, you are going to build an artifact provenance auditor. You'll store museum artifacts in an object and write functions to look them up, tag them, move them between galleries, and summarize their history.

Each artifact is stored under its ID. Create an object named collection and add an entry to it. Set the key to 101 and the value to an object with a title of "Golden Mask" and a category of "Ceremonial".
*/

const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial"
  },
};