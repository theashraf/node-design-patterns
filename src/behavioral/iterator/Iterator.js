class Iterator {
	constructor(list = []) {
		this.index = 0
		this.list = list
	}

	current() {
		return this.list[this.index]
	}

	next() {
		if (this.hasNext()) {
			this.index++
		}
		return this.current()
	}

	previous() {
		if (this.index !== 0) {
			this.index--
		}
		return this.current()
	}

	first() {
		const [first] = this.list
		return first
	}

	last() {
		const [last] = [...this.list].reverse()
		return last
	}

	hasNext() {
		return this.index < this.list.length - 1
	}
}

module.exports = Iterator
