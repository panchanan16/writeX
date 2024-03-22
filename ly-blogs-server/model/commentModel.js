const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signups',
    },
    blogId:{
        type: String
    },
    comment: {
        type: String
    }
})

const comments = mongoose.model('comments', commentSchema)

module.exports = comments;