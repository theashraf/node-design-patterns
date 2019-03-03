class LocalStorageAdapter {
  constructor() {
    this._storage = {}
  }
  setItem(key, value) {
    this._storage[key] = value
  }
  getItem(key) {
    return this._storage[key]
  }
}

module.exports = new LocalStorageAdapter()
