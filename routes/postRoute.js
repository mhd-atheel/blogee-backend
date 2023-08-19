const express = require('express')
const {createPost, getpost} = require('../controllers/postContoller')
const router = express.Router()


router.post('/create-post',createPost),
router.post('/get-post',getpost),


module.exports = router