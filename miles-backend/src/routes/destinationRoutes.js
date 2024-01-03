const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Create a new destination
router.post('/destinations', destinationController.createDestination);

// Get all destinations
router.get('/destinations', destinationController.getAllDestinations);

// Get a destination by ID
router.get('/destinations/:destinationId', destinationController.getDestinationById);

// Update a destination by ID
router.put('/destinations/:destinationId', destinationController.updateDestination);

// Delete a destination by ID
router.delete('/destinations/:destinationId', destinationController.deleteDestination);

module.exports = router;
