const path = require('path')
const express = require('express')
const port = process.env.PORT || 5000;

const app = express()
const publicPath = express.static(path.join(__dirname, '/dist'))

app.use('/', publicPath)

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
