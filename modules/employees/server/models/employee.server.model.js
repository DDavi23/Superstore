'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: 'Please fill Employee first name',
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    required: 'Please fill Employee last name',
    trim: true
  },
  dateHired: {
    type: String,
    default: '',
    required: 'Please fill Employee date of hire',
    trim: true
  },
  department: {
    type: String,
    default: '',
    required: 'Please fill Employee department',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Employee', EmployeeSchema);
