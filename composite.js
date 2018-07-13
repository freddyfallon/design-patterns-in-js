function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.add = function (item) {
  this.items.push(item)
}

ShoppingCart.prototype.addExclamation = function () {
  this.items.forEach(item => item.exclamationMark = '!')
  return this.items
}

module.exports = ShoppingCart