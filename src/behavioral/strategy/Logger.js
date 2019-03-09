const LogStrategy = require("./LogStrategy")

class Logger {
	constructor() {
		this.logs = []
		this.strategy = LogStrategy.toConsole
	}

	log(message) {
		const timestamp = new Date().toISOString()
		this.logs.push({ message, timestamp })
		this.strategy(message, timestamp)
	}

	changeStrategy(strategyName) {
		this.strategy = LogStrategy[strategyName]
	}
}

module.exports = new Logger()
