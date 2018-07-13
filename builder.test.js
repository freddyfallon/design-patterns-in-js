const Person = require('./builder')

describe('Person.Builder', () => {
  it('will set the id when instantiated', () => {
    const freddy = new Person.Builder(12)
    expect(freddy.id).toBe(12)
  })
})

describe('Person.Builder.withName', () => {
  it('sets the name of the person', () => {
    const freddy = new Person.Builder(12)
    freddy.withName('Freddy')
    expect(freddy.name).toBe('Freddy')
  })
})

describe('Person.Builder.withAge', () => {
  it('sets the age of the person', () => {
    const freddy = new Person.Builder(12)
    freddy.withAge(18)
    expect(freddy.age).toBe(18)
  })
})

describe('Person.Builder.build', () => {
  it('builds and returns the person', () => {
    const freddy = new Person.Builder(12)
    freddy.withName('Freddy')
    freddy.withAge(18)
    expect(freddy.build()).toEqual({ "id": 12, "name": "Freddy", "age": 18 })
  })
})