class ShoppingCart {
  constructor() {
    this._cart = []
  }

  add(item) {
    this._cart.push(item)
  }

  get(name) {
    return this._cart.find(item => item.name === name)
  }
}

const instance = new ShoppingCart()

Object.freeze(instance)

module.exports = instance