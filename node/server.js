const express = require('express')
var os = require("os");
const app = express()

let ejs = require('ejs') // => a powerful and simple templating engine.
let fs = require('fs')

const port = process.env.PORT
// const port = 3000

// what we need to send
let objectSentFromServer = [
  {
    "id": 1,
    "title": "Post 1"
  },
  {
    "id": 2,
    "title": "Post 2"
  },
  {
    "id": 3,
    "title": "Post 3"
  }
] 

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf-8', (err, html) => {
      res.send(ejs.render(html, 
        { 
          objectSentFromServer: objectSentFromServer, 
          port: port,
          host: os.hostname()
        }))
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Ejecutar: node server.js