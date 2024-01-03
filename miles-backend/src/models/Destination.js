const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  city: String,
  country: String,
  continent: String,
  stops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stop' }],
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
