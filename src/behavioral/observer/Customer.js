class Customer {
	constructor(name) {
		this.name = name
	}

	notify(storeName, discount) {
		console.log(
			`${this.name} , there's a sale at ${storeName}! ${discount}% off`
		)
	}
}

module.exports = Customer
