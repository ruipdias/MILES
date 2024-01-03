const Destination = require('../models/Destination');

async function createDestination(destinationData) {
  try {
    const newDestination = new Destination(destinationData);
    const savedDestination = await newDestination.save();
    return savedDestination;
  } catch (error) {
    throw error;
  }
}

async function getAllDestinations() {
  try {
    const destinations = await Destination.find();
    return destinations;
  } catch (error) {
    throw error;
  }
}

async function getDestinationById(destinationId) {
  try {
    const destination = await Destination.findById(destinationId);
    return destination;
  } catch (error) {
    throw error;
  }
}

async function updateDestination(destinationId, destinationData) {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(destinationId, destinationData, { new: true });
    return updatedDestination;
  } catch (error) {
    throw error;
  }
}

async function deleteDestination(destinationId) {
  try {
    const deletedDestination = await Destination.findByIdAndDelete(destinationId);
    return deletedDestination;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
};
