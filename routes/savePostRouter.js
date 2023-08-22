const express = require('express')
const savePost = require('../models/savePostModel')
const router = express.Router()


router.post('/save-post',savePost),



module.exports = router