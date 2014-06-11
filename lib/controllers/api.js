'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
	// find 'things' with status = true
  return Thing.find( { status: true }, function (err, things) {
    if (!err) {
    	//TODO: sort by date (desc)
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};