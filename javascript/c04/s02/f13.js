/*
Step 13
For this next portion of the workshop, you will review how to remove items from the end of the array.

Start by adding a console.log that logs the message "This looks like too much junk food.".
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
