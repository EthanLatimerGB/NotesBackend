require('dotenv').config()

let PORT = process.env.PORT
let MONGOURL = process.env.MONGODB_URL

module.exports = {
    MONGOURL, PORT
}