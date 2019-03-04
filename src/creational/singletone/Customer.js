const logger = require("./Logger")

class Customer {
	constructor(name) {
		this._name = name
		this._shoppingList = []
		logger.log(`new customer named: ${this._name}`)
	}

	set name(value) {
		this._name = value
	}

	get name() {
		return this._name
	}

	get shoppingList() {
		return this._shoppingList
	}

	addItemToShoppingList(item) {
		logger.log(`adding item ${item} to shopping list of ${this._name}`)
	}
}

module.exports = Customer
