class ItemGroup {
	constructor(name, composites = []) {
		this.name = name
		this.composites = composites
	}

	get total() {
		return this.composites.reduce((total, next) => total + next.total, 0)
	}

	print() {
		console.log(`item group: ${this.name} , price: $${this.total}`)
		this.composites.forEach(item => {
			item.print()
		})
	}
}

module.exports = ItemGroup
