const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    createGallery,
    getAllGalleries,
    getGalleryById,
    updateGallery,
    deleteGallery
} = require('../controllers/galleryController');

router.post('/', upload.array('images', 1), createGallery);
router.get('/', getAllGalleries);
router.get('/:id', getGalleryById);
router.put('/:id', upload.array('images', 1), updateGallery);
router.delete('/:id', deleteGallery);

module.exports = router;
