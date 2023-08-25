const express = require('express')
const {createLike, deletelike} = require('../controllers/likeController')
const router = express.Router()


router.post('/create-like',createLike),
router.post('/delete-like',deletelike),



module.exports = router