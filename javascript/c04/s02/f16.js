/*
Step 16
Now it is time to add more items to the beginning of the grocery list.

Start by adding a console.log statement that logs the message "It might be nice to get a dessert."

Below that console statement, use the correct array method to add the string "Chocolate Cake" to the beginning of the shoppingList array.

Finally, add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.
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
