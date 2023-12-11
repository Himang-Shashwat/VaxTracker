const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A vaccine must have a name'],
  },
  purpose: String,
  sideEffects: String,
  importance: String,
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;
