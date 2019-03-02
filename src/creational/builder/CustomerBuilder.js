const Customer = require("./Customer");

class CustomerBuilder {
  constructor(name = "") {
    this._data = { name };
  }

  withName(name = "") {
    this._data.name = name;
    return this;
  }

  withShoppingList(shoppingList = []) {
    this._data.shoppingList = [...shoppingList];
    return this;
  }

  withDiscount(discount = 0) {
    this._data.discount = discount;
    return this;
  }

  withCredit(credit = 0) {
    this._data.credit = credit;
    return this;
  }

  build() {
    return new Customer(this._data);
  }
}

module.exports = CustomerBuilder;
