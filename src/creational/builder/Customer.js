class Customer {
  constructor(builder) {
    this._name = builder.name;
    this._shoppingList = builder.shoppingList;
    this._credit = builder.credit;
    this._discount = builder.discount;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList;
  }

  get credit() {
    return this._credit;
  }

  get discount() {
    return this._discount;
  }

  addItemToShoppingList(item) {
    this._shoppingList.push(item);
  }
}

module.exports = Customer;
