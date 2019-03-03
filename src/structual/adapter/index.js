const localStorage = require('./LocalStorageAdapter')
const Customer = require('./Customer')

const ali = new Customer('ali')
ali.addItemToShoppingList('watch')
ali.addItemToShoppingList('ball')

const ahmed = new Customer('ahmed')
ahmed.addItemToShoppingList('xbox')
ahmed.addItemToShoppingList('iphone')

const customers = [ali.toJson(), ahmed.toJson()]
localStorage.setItem('customers', customers)

console.log('customers: ', localStorage.getItem('customers'))
