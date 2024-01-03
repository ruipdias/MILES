const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Stop = mongoose.model('Stop', stopSchema);

module.exports = Stop;
