/*
Step 7
Sometimes staff will ask for an artifact the museum does not have. If no artifact is stored under that id, collection[id] is undefined, and reading .title from it would throw an error.

Update the return statement to use a conditional. Return artifact.title if an artifact is found, and the string "Artifact not found" if it is not.
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
  return artifact ? artifact.title : "Artifact not found";
}
