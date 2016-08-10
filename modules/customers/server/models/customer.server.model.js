'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: 'Please fill customer first name',
    trim: true
  },
    lastName: {
      type: String,
      default: '',
      required: 'Please fill customer last name',
      trim: true
    },
    lastPurchaseDate: {
      type: String,
      default: '',
      required:'Please fill in last date of purchase',
    },
    email: {
      type: String,
      default: '',
      required: 'Please fill in email address',
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

mongoose.model('Customer', CustomerSchema);
