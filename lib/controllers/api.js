'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  // find 'things' with status = true
  // sort by date (desc)
  return Thing.find( { status: true } ).sort('-dateTime').exec(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Create an awesome thing
 */
exports.create = function(req, res, next) {
  // insert
  var newThing = new Thing({
    name: req.body.name,
    info: req.body.info,
    dateTime: req.body.dateTime,
    status: req.body.status
  });
  newThing.save(function(err, thing) {
    if (!err) {
      return res.send(200);
    } else {
      return res.send(err);
    }
  });
};