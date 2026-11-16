/*
Step 9
In previous lessons, you learned how to add elements to the beginning of an array using the unshift() method.

Here is a reminder of how to use the unshift() method:

Example Code
array.unshift(item1, item2, ..., itemX);
Use the unshift() method to add the string "Vegetable Oil" to the beginning of the shoppingList array.
*/

console.log("Grocery shopping list");

let shoppingList = [];
console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");

function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr.join(",")}`;
}

console.log(getShoppingListMsg(shoppingList));
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
