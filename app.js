const express = require('express')
const config = require('./utils/config')
const app = express()
require('express-async-errors')
const middlewares = require('./utils/middleware')
const notesRouter = require('./controllers/notes')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')


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
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {  
    const testingRouter = require('./controllers/testing')  
    app.use('/api/testing', testingRouter)
}

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

module.exports = app