/*
Step 9
Curators tag artifacts to make them easier to search, and a tag should never be added twice. Before adding a new tag, you can use the includes() method to check if it already exists, as it returns true when an array already contains a value.

Create a function named addTag that takes id and tag parameters. Look up the artifact using collection[id]. If it exists and its tags array does not already include tag, push tag onto artifact.tags.
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

console.log(getArtifactTitle(102));

function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}
