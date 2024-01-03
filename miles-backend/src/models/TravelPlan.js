const mongoose = require('mongoose');

const travelPlanSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  amountOfDays: Number,
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
});

const TravelPlan = mongoose.model('TravelPlan', travelPlanSchema);

module.exports = TravelPlan;
