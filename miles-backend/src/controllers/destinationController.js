const destinationService = require('../services/destinationService');

async function createDestination(req, res) {
  try {
    const newDestination = await destinationService.createDestination(req.body);
    res.status(201).json(newDestination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllDestinations(req, res) {
  try {
    const destinations = await destinationService.getAllDestinations();
    res.status(200).json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDestinationById(req, res) {
  try {
    const destinationId = req.params.destinationId;
    const destination = await destinationService.getDestinationById(destinationId);

    if (!destination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(200).json(destination);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateDestination(req, res) {
  try {
    const destinationId = req.params.destinationId;
    const updatedDestination = await destinationService.updateDestination(destinationId, req.body);

    if (!updatedDestination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(200).json(updatedDestination);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteDestination(req, res) {
  try {
    const destinationId = req.params.destinationId;
    const deletedDestination = await destinationService.deleteDestination(destinationId);

    if (!deletedDestination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(200).json(deletedDestination);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
};
