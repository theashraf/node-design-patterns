const CustomerBuilder = require("./CustomerBuilder");

const ali = new CustomerBuilder("ali").withShoppingList(["fruits"]).build();
ali.addItemToShoppingList("some other stuff");

const mohamed = new CustomerBuilder()
  .withName("mohamed")
  .withShoppingList(["veges"])
  .withCredit(100)
  .withDiscount(10)
  .build();
mohamed.addItemToShoppingList("a cheap item");

console.log(ali.name, ali.shoppingList, ali.credit);
console.log(mohamed.name, mohamed.shoppingList, mohamed.credit);
