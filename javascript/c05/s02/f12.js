/*
Step 12
In this final step of the Wildlife Tracker workshop, you will create a function that accesses a property of an object using bracket notation.

Here is an example of accessing a property using bracket notation:

Example Code
const cat = {
  species: "Cat",
  age: 3
};

const property = "species";

console.log(cat[property]); // "Cat"
In this example, bracket notation allows you to access a property using a variable.

Now create a function called getProperty.

The function should take two parameters: animal and propertyName.

Return the value of the property using bracket notation.

After creating the function, use console.log to call getProperty(tiger, "species") and getProperty(elephant, "age") so you can see the returned values in the console.

With that, the Wildlife Tracker workshop is complete!
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
const getProperty = (animal, propertyName) => {
    return animal[propertyName];
    // return animal[`${propertyName}`];
}
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
