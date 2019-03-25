const fs = require("fs")
const path = require("path")

class ExitCommand {
	constructor() {
		this.name = "exit"
	}
	exec() {
		process.exit(0)
	}
}

class CreateFileCommand {
	constructor(fileName, content) {
		this.name = "create file"
		;(this.fileName = fileName), (this.content = content)
	}
	exec() {
		fs.writeFileSync(path.join(__dirname, this.fileName), this.content)
	}
}
module.exports = { ExitCommand, CreateFileCommand }
