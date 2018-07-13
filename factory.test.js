const PersonFactory = require('./factory')

describe('PersonFactory', () => {
  it('creates a Person called John with a greeter function', () => {
    const john = PersonFactory('John')
    expect(john.name).toBe('John')
    expect(john.greeter()).toEqual('Hello, my name is John')
  })
})