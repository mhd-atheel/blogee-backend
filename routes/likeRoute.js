const express = require('express')
const {createLike} = require('../controllers/likeController')
const router = express.Router()


router.post('/create-like',createLike),



module.exports = router