/*
Step 6
Staff look up artifacts dozens of times a day, so your auditor needs a reusable lookup. The square brackets can also take a variable, so collection[id] returns whichever artifact that id refers to.

Create a function named getArtifactTitle that takes an id parameter. Use collection[id] to get the artifact, store it in a variable named artifact, and return artifact.title.
*/

const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

console.log(collection[101].title);
console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact.title;
}
