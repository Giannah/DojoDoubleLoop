const express = require('express')

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Coucou'))

function start(){
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    console.log("Demarré !")
}

module.exports = {start}

