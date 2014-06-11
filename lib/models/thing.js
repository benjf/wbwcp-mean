'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  name: String,
  info: String,
  dateTime: Number,
  status: Boolean
});

mongoose.model('Thing', ThingSchema);
