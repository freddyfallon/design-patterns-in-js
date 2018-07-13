const Person = require('./constructor')

describe('Person', () => {
  it('sets the name and age when instantiated', () => {
    const fred = new Person('Fred', 22)
    expect(fred.name).toBe('Fred')
    expect(fred.age).toBe(22)
  })

  it('allows you to create two different instances with different attributes', () => {
    const fred = new Person('Fred', 22)
    expect(fred.name).toBe('Fred')
    expect(fred.age).toBe(22)
    const bill = new Person('Bill', 18)
    expect(bill.name).toBe('Bill')
    expect(bill.age).toBe(18)
  })
})