const ShoppingCart = require('./composite')

describe('add', () => {
  it('will add multiple objects', () => {
    const Item = function () { }
    const item1 = new Item
    const item2 = new Item
    const cart = new ShoppingCart()
    cart.add(item1)
    cart.add(item2)
    expect(cart.items).toEqual([item1, item2])
  })
})

describe('addExclamation', () => {
  it('will add exclamation mark', () => {
    const Item = function () { }
    const item1 = new Item
    const item2 = new Item
    const cart = new ShoppingCart()
    cart.add(item1)
    cart.add(item2)
    expect(cart.addExclamation()).toEqual([{
      "exclamationMark": "!",
    }, {
      "exclamationMark": "!",
    }])
  })
})