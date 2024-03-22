const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    username : {
        type: String
    },
    email: {
        type: String
    },
    password : {
        type: String
    },
    designation : {
        type: String
    }
})

const newUser = mongoose.model('signup', signupSchema)

module.exports = newUser ;



