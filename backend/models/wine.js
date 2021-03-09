const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  year: {type: String, required: false},
  rating: {type: String, required: true},
  price: {type: String, required: false},
  notes: {type: String, required: false},
  variety: {type: String, required: false},
  alcPercent: {type: String, required: false},
  terroir: {type: String, required: false},
  picName: {type: String, required: false, default: 'NONE.jpg'}
});

module.exports = mongoose.model('Wine', wineSchema); //this is how mongoose relates shit to each other
