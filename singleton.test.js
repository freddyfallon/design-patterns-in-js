const ShoppingCart = require('./singleton')

describe('ShoppingCart', () => {
  it('can be accessed from multiple places', () => {
    const cart1 = ShoppingCart
    cart1.add({ name: 'flowers' })
    const cart2 = ShoppingCart
    expect(cart2.get('flowers')).toEqual({ name: 'flowers' })
  })
})