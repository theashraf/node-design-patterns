const Customer = require("./Customer");

class CustomerPrototype {
  constructor() {
    const customer = new Customer();
    customer.addItemToShoppingList("milk");
    customer.addItemToShoppingList("meat");
    customer.addItemToShoppingList("fruits");
    customer.addItemToShoppingList("veges");
    this._customer = customer;
  }

  clone() {
    const cloned = Object.create(Object.getPrototypeOf(this._customer));
    cloned.name = this._customer.name;
    cloned.shoppingList = [...this._customer.shoppingList];
    return cloned;
  }
}

module.exports = CustomerPrototype;
