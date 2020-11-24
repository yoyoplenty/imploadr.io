const express = require('express')
const router = express.Router();
var multer = require('multer')
var multer = require('multer')
var upload = multer({ dest: 'public/uploads' })
const path = require('path')
var MongoClient = require('mongodb').MongoClient;


const home = require('./controllers/home')
const image = require('./controllers/image');






router.get('/', home.index)

router.get('/images/:image_id', image.index);

router.post('/images', upload.single('photo'), image.create)

router.post('/images/:image_id/like', image.like);

router.post('/images/:image_id/comment', image.comment);



module.exports = router;
