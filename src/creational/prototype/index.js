const CustomerPrototype = require("./CustomerPrototype")

const customer1 = new CustomerPrototype().clone()
customer1.name = "ahmed"
customer1.addItemToShoppingList("xbox")

const customer2 = new CustomerPrototype().clone()
customer2.name = "ali"
customer2.addItemToShoppingList("ps4")

console.log(`${customer1.name}'s shoppingList: ${customer1.shoppingList}`)
console.log(`${customer2.name}'s shoppingList: ${customer2.shoppingList}`)
