const CustomerFactory = require("./CustomerFactory")

const ali = CustomerFactory("ali")
ali.addItemToShoppingList("some food")

const mohamed = CustomerFactory("mohamed", "VIPCustomer", 100)
mohamed.addItemToShoppingList("some more expensive food")

console.log(ali.shoppingList, ali.discount)
console.log(mohamed.shoppingList, mohamed.discount)
