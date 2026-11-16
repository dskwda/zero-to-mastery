/*
Step 17
In this last part of the workshop, you will review how to remove an item from the beginning of an array.

Start by adding a console.log that logs the message "On second thought, maybe we should be more health conscious.".
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
console.log(getShoppingListMsg(shoppingList));
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");
