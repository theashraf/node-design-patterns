const { Customer, GoldenCustomer, SilverCustomer } = require("./Customer")

const ali = new Customer("Ali", 500)
const mohamed = new Customer("Mohamed", 100)

ali.print()
mohamed.print()

const goldenAli = new GoldenCustomer(ali)
const silverMohamed = new SilverCustomer(mohamed)

goldenAli.print()
silverMohamed.print()
