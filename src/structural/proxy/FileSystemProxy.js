class FileSystemProxy {
	constructor(fsModule) {
		this._fs = fsModule || require("fs")
	}

	readFile(path, options, callback) {
		/*only give access to .md files*/
		if (!path.match(/.md$/)) {
			console.log(path)
			return callback(new Error("only .md files are allowed"))
		}
		this._fs.readFile(path, options, (error, content) => {
			if (error) {
				return callback(error)
			}
			return callback(null, content)
		})
	}
}

module.exports = FileSystemProxy
