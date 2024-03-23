const express = require('express')
const router = express.Router()
require('../model/db.con')
const categoryControl = require('../controllers/blogCategory')
router.use(express.json())

router.post('/create-category', categoryControl.createCategory)
router.get('/all-category', categoryControl.getAllCategory)
router.delete('/delete-category', categoryControl.deletecategory)
module.exports = router;