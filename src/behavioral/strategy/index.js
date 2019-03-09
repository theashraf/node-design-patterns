const logger = require("./Logger")

logger.log("hello world!")

logger.changeStrategy("noDate")

logger.log("hello world!")

logger.changeStrategy("toFile")

logger.log("hello world!")
