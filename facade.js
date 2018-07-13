class Vehicle {
  constructor(type) {
    this.type = type
  }

  prepare() {
    if (this.type === 'bike') {
      return this.startBike()
    }
    if (this.type === 'car') {
      return this.startCar()
    } else return 'not a valid vehicle'
  }

  startBike() {
    return 'bike started'
  }

  startCar() {
    return 'car started'
  }
}

module.exports = Vehicle