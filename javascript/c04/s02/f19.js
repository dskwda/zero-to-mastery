/*
Step 19
The last change to make to the grocery list is to update the first item in the list.

In previous lessons, you learned how to update an item using bracket notation and the index of the item you want to update.

Here is a reminder of how to update an item in an array:

Example Code
const array = [1, 2, 3, 4, 5];

array[0] = 10;
// Result: [10, 2, 3, 4, 5]
console.log(array); 
Update the first item in the shoppingList array to be "Canola Oil".
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
shoppingList.shift();
shoppingList[0] = "Canola Oil";
