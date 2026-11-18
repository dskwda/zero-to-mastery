/*
Step 4
The museum has more than one artifact on record. Add a second artifact to collection under the key 102, following the same shape as the first.

Use these values:

{
  title: "Bronze Tablet",
  category: "Inscription",
  curator: {
    id: 202,
    name: "Robert Sinclair",
  },
  locations: [{ gallery: "Archive Wing", year: 2019 }],
  tags: ["bronze", "writing"],
  onDisplay: false,
}
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
