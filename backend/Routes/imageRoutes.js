const express = require('express');
const { uploadImage, getImages , incrementViews} = require('../controllers/imageController');
const router = express.Router();

router.post('/upload', uploadImage);
router.get('/', getImages);
router.patch('/view/:id', incrementViews);

module.exports = router;
