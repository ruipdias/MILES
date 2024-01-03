const express = require('express');
const router = express.Router();
const travelPlanController = require('../controllers/travelPlanController');

// Create a new travel plan
router.post('/travel-plans', travelPlanController.createTravelPlan);

// Get all travel plans
router.get('/travel-plans', travelPlanController.getAllTravelPlans);

// Get a travel plan by ID
router.get('/travel-plans/:travelPlanId', travelPlanController.getTravelPlanById);

// Update a travel plan by ID
router.put('/travel-plans/:travelPlanId', travelPlanController.updateTravelPlan);

// Delete a travel plan by ID
router.delete('/travel-plans/:travelPlanId', travelPlanController.deleteTravelPlan);

module.exports = router;
