const app = require('express')()

app.use('/', (request, response) => {
  response.json({
    code   : 200,
    message: 'Pong',
    data   : null,
  })
})

module.exports = app
