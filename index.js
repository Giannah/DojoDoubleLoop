const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
let server
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Coucou'))

const priceRouter = require('./router/priceRouter')

app.use('/', priceRouter)

async function start() {
  server = await app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
  )
  console.log('Demarré !')
}

function stop() {
  server.close(() => console.log('Bye bye'))
}

module.exports = { start, stop }
