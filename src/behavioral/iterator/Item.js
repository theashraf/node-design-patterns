class Item {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	print() {
		console.log(`${this.name} , ${this.price}`)
	}
}

module.exports = Item
