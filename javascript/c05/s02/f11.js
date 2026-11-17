/*
Step 11
In this step, you will create a function that checks whether an object has a specific property.

Here is an example of using hasOwnProperty:

Example Code
const cat = {
  species: "Cat",
  color: "White"
};

const dog = {
  species: "Dog",
  weight: 50
};

const hasColor = (pet) => {
  return pet.hasOwnProperty("color"); // check if "color" property exists
};

console.log(hasColor(cat)); // true
console.log(hasColor(dog)); // false
In this example, the hasColor function uses hasOwnProperty to check whether the color property exists on an object.

Now create a function called hasHabitat. The function should take one parameter named animal.

Use the hasOwnProperty method to return true if the animal object has a property called "habitat" and false otherwise.

After creating the function, use console.log to call hasHabitat(tiger) and hasHabitat(elephant) so you can see both results in the console.
*/

const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true
};
const elephant = {
    species: "Elephant",
    age: 10,
    isEndangered: true
};

const getSpecies = (animal) => {
    return animal.species;
};
console.log(getSpecies(tiger));
const getAge = (animal) => {
    return animal.age;
};
console.log(getAge(tiger));
const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
}
console.log(addHabitat(tiger, "Rainforest"));
const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
}
console.log(updateAge(elephant, 12));
const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
}
console.log(removeEndangeredStatus(tiger));
const hasHabitat = (animal) => {
    return animal.hasOwnProperty("habitat");
}
console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));
