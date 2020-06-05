const axios = require('axios')
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

let data
let result

Given('this order', function (dataTable) {
  data = dataTable.hashes()[0]
})

When('the total price is calculated', async function () {
  result = await axios.post('http://localhost:3000/price-calculator', data)
})

Then('the total price is {float}', function (expectedTotalPrice) {
  expect(result.data.totalPrice).to.eql(expectedTotalPrice)
})
