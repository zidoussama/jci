const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {createEvent, getAllEvents, getEventById, updateEvent, deleteEvent} = require('../controllers/eventController');

router.post('/create', upload.array('images'), createEvent);
router.get('/all', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', upload.array('images'), updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
