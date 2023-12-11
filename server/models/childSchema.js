const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: [true, 'A child must have a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'A child must have a last name'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'A child must have a date of birth'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'A child must have a gender'],
  },
});

const Child = mongoose.model('Child', childSchema);

module.exports = Child;
