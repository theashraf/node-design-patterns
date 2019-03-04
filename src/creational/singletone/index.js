const Customer = require("./Customer")
const logger = require("./Logger")

logger.log("the start")

const ali = new Customer("ali")
ali.addItemToShoppingList("ta3mya")

const ahmed = new Customer("ahmed")
ahmed.addItemToShoppingList("chips")

logger.log("the end")

console.log(`logs count : ${logger.count}`)
