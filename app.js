const express = require('express')
const config = require('./utils/config')
const app = express()
const middlewares = require('./utils/middleware')
const notesRouter = require('./controllers/notes')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

logger.info('connecting to', config.MONGOURL)

mongoose.connect(config.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('Connected to MongoDB')
    })
    .catch((error) => {
        logger.error('Error connection to MongoDB: ', error.message)
    })

app.use(express.static('build'))
app.use(express.json())
app.use(middlewares.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

module.exports = app