/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
const items = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];
const cart = [];
function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  items.forEach((element) => {
    console.log(element.name);
  })
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map`
  return items.map((element) => {
    return element.name.toUpperCase();
  })
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`
  return items.find((element) => {
    return element.id === id
  })
}

 /**
   * @returns {number} the sum of all inventory items
   */
  
 function calculateTotalInventory() {
  // TODO Use the .reduce() method to return the total number of items in inventory
   return items.reduce((acc, item) => {
    acc = acc + item.inventory
    return acc
  },0)
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  let getname = items.find((element) => {
    return element.name === name
 })
 return getname.price;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`
  return items.filter((element) => {
    return element.category === category;
})
}
function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
  let cartArr = cart.map((element) => {
   return findItemById(parseInt(element))
  })
  cartArr.forEach((element) => console.log(element.name))
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`
  return items.reduce((acc, item) => {
    acc = acc + item.quantity
    return acc
  },0)
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  // TODO: use `reduce`
  return items.reduce((acc,item) => {
    acc = acc + item.price
    return acc
  },0) 
}

  
function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
  let cartArr = cart.map((element) => {
   return findItemById(parseInt(element))
  })
  cartArr.forEach((element) => console.log(element.name))
}



// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
// const INVENTORY = [
//   { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
//   { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
//   { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
//   { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
//   { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
//   { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
//   { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
// ];


  
  
console.log("Welcome! We carry the following items:");
logItemNames(items);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(items));

console.log(`In total, we have ${countItems(items)} items in stock.`);

const totalCost = calculateTotalPrice(items);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);


const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is: `);
console.log(getItemById(items, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(items, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are: `);
console.log(getItemsByCategory(items, category));

console.log(
  `The total price of the items in your cart is: `,calculateTotalPrice(items));