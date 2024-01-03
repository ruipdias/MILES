const travelPlanService = require('../services/travelPlanService');

async function createTravelPlan(req, res) {
  try {
    const newTravelPlan = await travelPlanService.createTravelPlan(req.body);
    res.status(201).json(newTravelPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllTravelPlans(req, res) {
  try {
    const travelPlans = await travelPlanService.getAllTravelPlans();
    res.status(200).json(travelPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTravelPlanById(req, res) {
  try {
    const travelPlanId = req.params.travelPlanId;
    const travelPlan = await travelPlanService.getTravelPlanById(travelPlanId);

    if (!travelPlan) {
      res.status(404).json({ error: 'Travel Plan not found' });
    } else {
      res.status(200).json(travelPlan);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateTravelPlan(req, res) {
  try {
    const travelPlanId = req.params.travelPlanId;
    const updatedTravelPlan = await travelPlanService.updateTravelPlan(travelPlanId, req.body);

    if (!updatedTravelPlan) {
      res.status(404).json({ error: 'Travel Plan not found' });
    } else {
      res.status(200).json(updatedTravelPlan);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTravelPlan(req, res) {
  try {
    const travelPlanId = req.params.travelPlanId;
    const deletedTravelPlan = await travelPlanService.deleteTravelPlan(travelPlanId);

    if (!deletedTravelPlan) {
      res.status(404).json({ error: 'Travel Plan not found' });
    } else {
      res.status(200).json(deletedTravelPlan);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createTravelPlan,
  getAllTravelPlans,
  getTravelPlanById,
  updateTravelPlan,
  deleteTravelPlan,
};
