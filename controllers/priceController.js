const { calculateTotalPrice } = require('../price-calculator')

class PriceCalculator {
  async getPrice(req, res) {
    const data = req.body

    try {
      const price = data.price
      const quantity = data.numberOfItems
      const state = data.state

      const result = await calculateTotalPrice(price, quantity, state)

      res.send({ totalPrice: result })
    } catch (err) {
      res.status(400).end()
    }
  }
}

module.exports = PriceCalculator
