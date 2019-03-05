const Item = require("./Item")
const ItemGroup = require("./ItemGroup")

const shoes = new Item("shoes", 10)
const pants = new Item("pant", 30)
const clothesGroup = new ItemGroup("clothes group", [shoes, pants])
console.log(shoes.total)
shoes.print()
console.log(clothesGroup.total)
clothesGroup.print()

const orange = new Item("orange", 10)
const banana = new Item("banana", 50)
const fruitsGroup = new ItemGroup("fruits group", [orange, banana])
fruitsGroup.print()

const goodsGroup = new ItemGroup("goods", [fruitsGroup, clothesGroup])
goodsGroup.print()
