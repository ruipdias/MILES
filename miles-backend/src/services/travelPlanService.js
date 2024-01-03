const TravelPlan = require('../models/TravelPlan');

async function createTravelPlan(travelPlanData) {
  try {
    const newTravelPlan = new TravelPlan(travelPlanData);
    const savedTravelPlan = await newTravelPlan.save();
    return savedTravelPlan;
  } catch (error) {
    throw error;
  }
}

async function getAllTravelPlans() {
  try {
    const travelPlans = await TravelPlan.find();
    return travelPlans;
  } catch (error) {
    throw error;
  }
}

async function getTravelPlanById(travelPlanId) {
  try {
    const travelPlan = await TravelPlan.findById(travelPlanId);
    return travelPlan;
  } catch (error) {
    throw error;
  }
}

async function updateTravelPlan(travelPlanId, travelPlanData) {
  try {
    const updatedTravelPlan = await TravelPlan.findByIdAndUpdate(travelPlanId, travelPlanData, { new: true });
    return updatedTravelPlan;
  } catch (error) {
    throw error;
  }
}

async function deleteTravelPlan(travelPlanId) {
  try {
    const deletedTravelPlan = await TravelPlan.findByIdAndDelete(travelPlanId);
    return deletedTravelPlan;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createTravelPlan,
  getAllTravelPlans,
  getTravelPlanById,
  updateTravelPlan,
  deleteTravelPlan,
};
