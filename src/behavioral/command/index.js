const { ExitCommand, CreateFileCommand } = require("./commands")
const conductor = require("./conductor")

conductor.run(new CreateFileCommand("test.txt", "hello world"))
conductor.printHistory()
conductor.run(new ExitCommand())
conductor.printHistory()
