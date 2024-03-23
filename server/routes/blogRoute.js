const express = require('express')
const router = express.Router()
require('../model/db.con')
const blog = require('../controllers/blogControl')
router.use(express.json())

router.post('/create-blog', blog.createBlog)

router.get('/filter-blog-by-category/:filterId', blog.filterBycategory)

router.get('/filter-blog-by-userId/:authorId', blog.getMyAllBlog)

router.get('/filter-blog-by-blogId/:blogId', blog.getBlogById)

router.delete('/delete-blog/:blogId', blog.deleteBlog)

router.get('/get-all-blog', blog.getAllBlog)

router.put('/update-views', blog.viewsIncrease)

module.exports = router