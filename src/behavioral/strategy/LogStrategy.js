const fs = require("fs")
const path = require("path")

class LogStrategy {
	static toConsole(message, timestamp) {
		console.log(`${message} - ${timestamp}`)
	}
	static noDate(message) {
		console.log(message)
	}
	static toFile(message, timestamp) {
		fs.appendFile(
			path.join(__dirname, "./logs.txt"),
			`${message} - ${timestamp} \n`,
			error => {
				if (error) throw error.message
			}
		)
	}
}

module.exports = LogStrategy
