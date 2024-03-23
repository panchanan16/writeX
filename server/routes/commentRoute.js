const express = require('express')
const router = express.Router()
require('../model/db.con')
const commentControl = require('../controllers/commentControl')
router.use(express.json())

router.post('/create-comment', commentControl.createComment)

router.delete('/delete-comment', commentControl.deleteComment)

router.get('/get-comment-by-blogId/:blogId', commentControl.getBlogWithComment)

module.exports = router