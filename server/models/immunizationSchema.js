const mongoose = require('mongoose');

const immunizationSchema = new mongoose.Schema({
  childId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Child',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  vaccine: {
    type: mongoose.Schema.ObjectId,
    ref: 'Vaccine',
    required: true,
  },
});

const Immunization = mongoose.model('Immunization', immunizationSchema);
module.exports = Immunization;
