const express = require('express')
const router = express.Router()
require('../../model/db.con')
const authControl = require('../controls/authentication')

router.use(express.json())

router.post('/signUp-user', authControl.signupUser);

router.post('/login-user', authControl.loginUser);

router.post('/update-user', authControl.updateUser);

router.get('/get-users', authControl.getAllUser);

module.exports = router;