'use strict';

var mongoose = require('mongoose'),
    Match = mongoose.model('Match');

/**
 * Get Matches
 */
exports.list = function(req, res) {
  return Match.find({}).sort('matchNumber').populate('team1 team2').exec(function (err, matches) {
    if (!err) {
      return res.json(matches);
    } else {
      return res.send(err);
    }
  });
};
