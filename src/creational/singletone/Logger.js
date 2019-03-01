class Logger {
  constructor() {
    this._logs = [];
  }

  get count() {
    return this._logs.length;
  }

  log(message) {
    console.log(`${message} | ${new Date().toISOString()}`);
    this._logs.push(message);
  }
}

module.exports = new Logger();
