const express = require('express')
const app = express()
const middlewares = require('./models/middlwares')
const notesRouter = require('./controllers/notes')


app.use(express.json())
app.use(express.static('build'))
app.use(middlewares.requestLogger)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use('/api/notes', notesRouter)

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

module.exports = app