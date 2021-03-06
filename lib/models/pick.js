'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Pick Schema
 */
var PickSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', index: true },
  choice: String,
  points: Number,
  round: {
    type: String,
    default: 'first'
  }
});

mongoose.model('Pick', PickSchema);
