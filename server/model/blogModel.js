const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type: String
    },
    description: {
        type: String
    },
    blog: {
        type: String
    },
    category: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signups'
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const newBlog = mongoose.model('blogpost', blogSchema)

module.exports = newBlog ;



