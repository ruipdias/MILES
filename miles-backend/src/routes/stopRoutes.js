const express = require('express');
const router = express.Router();
const stopController = require('../controllers/stopController');

// Create a new stop
router.post('/stops', stopController.createStop);

// Get all stops
router.get('/stops', stopController.getAllStops);

// Get a stop by ID
router.get('/stops/:stopId', stopController.getStopById);

// Update a stop by ID
router.put('/stops/:stopId', stopController.updateStop);

// Delete a stop by ID
router.delete('/stops/:stopId', stopController.deleteStop);

module.exports = router;
