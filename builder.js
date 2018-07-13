class Person {
  constructor(build) {
    this.id = build.id
    this.name = build.name
    this.age = build.age
  }
  static get Builder() {
    class Builder {
      constructor(id) {
        this.id = id
      }
      withName(name) {
        this.name = name
        return this
      }
      withAge(age) {
        this.age = age
        return this
      }
      build() {
        return new Person(this)
      }
    }
    return Builder
  }
}

module.exports = Person