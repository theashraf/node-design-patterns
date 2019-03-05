class Item {
	constructor(name, price) {
		this.name = name
		this.price = price
	}

	get total() {
		return this.price
	}

	print() {
		console.log(`item: ${this.name} , price: $${this.price}`)
	}
}

module.exports = Item
