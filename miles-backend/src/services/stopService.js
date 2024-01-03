const Stop = require('../models/Stop');

async function createStop(stopData) {
  try {
    const newStop = new Stop(stopData);
    const savedStop = await newStop.save();
    return savedStop;
  } catch (error) {
    throw error;
  }
}

async function getAllStops() {
  try {
    const stops = await Stop.find();
    return stops;
  } catch (error) {
    throw error;
  }
}

async function getStopById(stopId) {
  try {
    const stop = await Stop.findById(stopId);
    return stop;
  } catch (error) {
    throw error;
  }
}

async function updateStop(stopId, stopData) {
  try {
    const updatedStop = await Stop.findByIdAndUpdate(stopId, stopData, { new: true });
    return updatedStop;
  } catch (error) {
    throw error;
  }
}

async function deleteStop(stopId) {
  try {
    const deletedStop = await Stop.findByIdAndDelete(stopId);
    return deletedStop;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createStop,
  getAllStops,
  getStopById,
  updateStop,
  deleteStop,
};
