const Customer = require("./Customer")

class VIPCustomer extends Customer {
	constructor(name, discount) {
		super(name)
		this._discount = discount
	}
	set discount(value) {
		this._discount = value
	}
	get discount() {
		return this._discount
	}
}

module.exports = VIPCustomer
