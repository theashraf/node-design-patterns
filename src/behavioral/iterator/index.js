const Item = require("./Item")
const Iterator = require("./Iterator")

require("readline").emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

const itemsList = new Iterator([
	new Item("item1", 5),
	new Item("item2", 6),
	new Item("item3", 9),
	new Item("item4", 15),
	new Item("item5", 17),
	new Item("item6", 20)
])

console.log("press arrow keys to iterate ...")
process.stdin.on("keypress", (str, key) => {
	switch (key.name) {
		case "right":
			itemsList.next().print()
			break
		case "left":
			itemsList.previous().print()
			break
		case "up":
			itemsList.first().print()
			break
		case "down":
			itemsList.last().print()
			break
		default:
			process.exit()
			break
	}
})
