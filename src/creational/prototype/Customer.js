class Customer {
  constructor(name) {
    this._name = name;
    this._shoppingList = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get shoppingList() {
    return this._shoppingList;
  }

  set shoppingList(list) {
    this._shoppingList = [...list];
  }

  addItemToShoppingList(item) {
    this._shoppingList.push(item);
  }
}

module.exports = Customer;
