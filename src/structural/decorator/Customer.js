class Customer {
	constructor(name, credit = 0) {
		this.name = name
		this.credit = credit
	}

	print() {
		console.log(`i'm ${this.name} & i have ${this.credit}$`)
	}
}

class GoldenCustomer extends Customer {
	constructor(baseObject) {
		super(baseObject.name, baseObject.credit)
		this.golden = true
		this.discount = 100
	}
	print() {
		console.log(
			`i'm ${this.name} & i have ${this.credit}$ & i'm a Golden Customer`
		)
	}
}

class SilverCustomer extends Customer {
	constructor(baseObject) {
		super(baseObject.name, baseObject.credit)
		this.silver = true
		this.discount = 50
	}
	print() {
		console.log(
			`i'm ${this.name} & i have ${this.credit}$ & i'm a Silver Customer`
		)
	}
}

module.exports = { Customer, GoldenCustomer, SilverCustomer }
