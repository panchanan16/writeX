const mongoose = require('mongoose')

const blogCategorySchema = new mongoose.Schema({
    category : {
        type: String
    }
})

const newBlogCategory = mongoose.model('blogcategory', blogCategorySchema)

module.exports = newBlogCategory ;