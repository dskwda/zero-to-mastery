/*
Step 3
Each artifact also tracks where it has been, how it is described, and whether it is on display.

Add three more properties to the artifact stored under 101:

locations: an array holding two objects, { gallery: "Hall A", year: 2020 } and { gallery: "Hall C", year: 2024 }
tags: an array holding the strings "gold" and "egypt"
onDisplay: the boolean true
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
};