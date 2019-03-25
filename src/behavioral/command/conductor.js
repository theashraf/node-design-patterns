class Conductor {
	constructor() {
		this.history = []
		this.redoHistory = []
	}

	run(command) {
		console.log(`running command ${command.name} ...`)
		command.exec()
		this.history.push(command)
	}

	printHistory() {
		this.history.forEach(command => console.log(command.name))
	}
}

module.exports = new Conductor()
