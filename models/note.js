const mongoose = require('mongoose')
const config = require('../utils/config')
mongoose.set('useFindAndModify', false)

const url = config.MONGOURL

console.log('connecting to ', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( console.log('Connected to MongoDB database') )
    .catch((error) => {
        console.log('Error connecting to MongoDB database', error.message)
    })

const noteSchema = new mongoose.Schema({
    content: {
        type: String, 
        minlength: 5,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    important: Boolean,
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)