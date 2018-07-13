const Vehicle = require('./facade')

describe('prepare', () => {
  it('returns car started if passed car at instantiation', () => {
    const car = new Vehicle('car')
    expect(car.prepare()).toBe('car started')
  })

  it('returns car started if passed car at instantiation', () => {
    const bike = new Vehicle('bike')
    expect(bike.prepare()).toBe('bike started')
  })

  it('returns car started if passed car at instantiation', () => {
    const dog = new Vehicle('dog')
    expect(dog.prepare()).toBe('not a valid vehicle')
  })
})