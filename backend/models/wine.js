const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  year: {type: Number, required: false},
  rating: {type: Number, required: true},
  price: {type: Number, required: false},
  notes: {type: String, required: false},
  variety: {type: String, required: false},
  alcPercent: {type: Number, required: false},
  terroir: {type: String, required: false},
  picName: {type: String, required: false, default: 'NONE.jpg'}
});

module.exports = mongoose.model('Wine', wineSchema); //this is how mongoose relates shit to each other
