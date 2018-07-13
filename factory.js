function PersonFactory(name) {
  const person = {}
  person.name = name
  person.greeter = () => `Hello, my name is ${name}`
  return person
}

module.exports = PersonFactory