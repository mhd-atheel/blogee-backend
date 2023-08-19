const express = require('express')
const {createUser, loginUser, getUsers} = require('../controllers/userController')
const router = express.Router()


router.post('/create-user',createUser),
router.post('/login-user',loginUser),
router.get('/get-user',getUsers),

module.exports = router

