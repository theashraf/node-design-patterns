const path = require('path')
const FileSystemProxy = require('./FileSystemProxy')
const fs = new FileSystemProxy(require('fs'))

const result = (error, content) => {
  if (error) {
    return console.error(error.message)
  }
  console.log('file.md content : ', content)
}

fs.readFile(path.join(__dirname, './file.txt'), 'utf-8', result)
fs.readFile(path.join(__dirname, './file.md'), 'utf-8', result)
