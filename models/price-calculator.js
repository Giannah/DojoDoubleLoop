class Calculator {
  calculateTotalPrice(price, quantity, state) {
    return price * quantity * 1.0625
  }
}

module.exports = Calculator
