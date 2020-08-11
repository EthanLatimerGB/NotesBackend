require('dotenv').config()

let PORT = process.env.PORT
let MONGOURL = process.env.MONGODB_URL
let SECRET = process.env.SECRET

if(process.env.NODE_ENV === 'test'){
    MONGOURL = process.env.TEST_MONGODB_URL
}

module.exports = {
    MONGOURL, PORT, SECRET
}