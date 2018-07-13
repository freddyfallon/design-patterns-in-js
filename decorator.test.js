const IceCream = require('./decorator')

describe('IceCream', () => {
  it('Will return vanilla as its flavour if nothing is passed on creation', () => {
    const icey = new IceCream({})
    expect(icey.flavour).toEqual('vanilla')
  })

  it('Will return chocolate as its flavour if chocolate is passed on creation', () => {
    const icey = new IceCream({ flavour: 'chocolate' })
    expect(icey.flavour).toEqual('chocolate')
  })

  it('Will return £1 if nothing passed at creation', () => {
    const icey = new IceCream({})
    expect(icey.cost).toEqual('£1')
  })
  it('Will return £10 if £10 passed at creation', () => {
    const icey = new IceCream({ cost: '£10' })
    expect(icey.cost).toEqual('£10')
  })
})