const stopService = require('../services/stopService');

async function createStop(req, res) {
  try {
    const newStop = await stopService.createStop(req.body);
    res.status(201).json(newStop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllStops(req, res) {
  try {
    const stops = await stopService.getAllStops();
    res.status(200).json(stops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getStopById(req, res) {
  try {
    const stopId = req.params.stopId;
    const stop = await stopService.getStopById(stopId);

    if (!stop) {
      res.status(404).json({ error: 'Stop not found' });
    } else {
      res.status(200).json(stop);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateStop(req, res) {
  try {
    const stopId = req.params.stopId;
    const updatedStop = await stopService.updateStop(stopId, req.body);

    if (!updatedStop) {
      res.status(404).json({ error: 'Stop not found' });
    } else {
      res.status(200).json(updatedStop);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteStop(req, res) {
  try {
    const stopId = req.params.stopId;
    const deletedStop = await stopService.deleteStop(stopId);

    if (!deletedStop) {
      res.status(404).json({ error: 'Stop not found' });
    } else {
      res.status(200).json(deletedStop);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createStop,
  getAllStops,
  getStopById,
  updateStop,
  deleteStop,
};
