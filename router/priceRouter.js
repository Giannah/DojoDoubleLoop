const express = require('express')
const router = express.Router()
const PriceController = require('../controllers/priceController')

const controller = new PriceController()

router.post('/price-calculator', controller.getPrice)

module.exports = router
