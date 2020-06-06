const Calculator = require('../models/price-calculator')

const calculator = new Calculator()
class PriceController {
  getPrice(req, res) {
    const data = req.body

    try {
      const price = data.price
      const quantity = data.numberOfItems
      const state = data.state

      const result = calculator.calculateTotalPrice(price, quantity, state)

      res.status(200).send({ totalPrice: result })
    } catch (err) {
      res.status(400).end()
    }
  }
}

module.exports = PriceController
