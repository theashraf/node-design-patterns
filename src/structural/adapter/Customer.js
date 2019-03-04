class Customer {
	constructor(name = "") {
		this._name = name
		this._shoppingList = []
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
		this._shoppingList.push(item)
	}
	toJson() {
		return {
			name: this._name,
			shoppingList: this._shoppingList
		}
	}
}

module.exports = Customer
