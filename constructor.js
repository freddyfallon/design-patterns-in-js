function Person(name, age) { // Does not work with anonymous functions!
  this.name = name
  this.age = age
}

module.exports = Person