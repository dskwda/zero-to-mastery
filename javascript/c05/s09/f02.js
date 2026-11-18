/*
Step 2
Every artifact has a person responsible for it.

Add a curator property to the artifact stored under the key 101, and set its value to an object with an id of 201 and a name of "Earl Sinclair".
*/

const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
  },
};