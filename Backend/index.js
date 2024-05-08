const express = require('express')
require('dotenv').config()
// var cors = require('cors')

const app = express()
const port = process.env.PORT || 4000
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first",
      joke: "this is first joke"
    },
    {
      id: 2,
      title: "second",
      joke: "this is second joke"
    },
    {
      id: 3,
      title: "third",
      joke: "this is third joke"
    },
    {
      id: 4,
      title: "fourth",
      joke: "this is fourth joke"
    },
  ]
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})