function IceCream({ flavour, cost }) {
  this.flavour = flavour || 'vanilla'
  this.cost = cost || '£1'
}

module.exports = IceCream