const Store = require("./Store")
const Customer = require("./Customer")

const ali = new Customer("ali")
const mohamed = new Customer("mohamed")

const store1 = new Store("store1")
const store2 = new Store("store2")

store1.subscribe(ali)
store1.subscribe(mohamed)
store2.subscribe(ali)

setTimeout(() => {
	store1.sale(25)
}, 5000)

setTimeout(() => {
	store2.sale(50)
}, 2000)
