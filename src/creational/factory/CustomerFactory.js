const Customer = require("./Customer");
const VIPCustomer = require("./VIPCustomer");

const CustomerFactory = (name, type = "Customer", discount = 0) => {
  if (type === "VIPCustomer") {
    return new VIPCustomer(name, discount);
  } else if (type === "Customer") {
    return new Customer(name);
  } else {
    throw new Error("Invalid Customer Type");
  }
};

module.exports = CustomerFactory;
