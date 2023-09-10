const express = require('express')
const {createPost, getpost, getpostbyuserid} = require('../controllers/postContoller')
const router = express.Router()


router.post('/create-post',createPost),
router.post('/get-post',getpost),
router.post('/get-post-by-user',getpostbyuserid),


module.exports = router