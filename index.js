const express = require('express')
const {calculateTotalPrice} = require('./price-calculator')
const bodyParser = require('body-parser');


const app = express()
const port = 3000
let server;
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Coucou'))
app.post('/price-calculator',(req,res) => {
    const data = req.body
    res.send({totalPrice : calculateTotalPrice(data.price,data.numberOfItems,data.state)})
 })


async function start(){
    server = await app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    console.log("Demarré !")
}

function stop(){
    server.close(()=> console.log('Bye bye'))
}

module.exports = {start,stop}

