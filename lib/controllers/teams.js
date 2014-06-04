'use strict';

var mongoose = require('mongoose'),
    Team = mongoose.model('Team');

/**
 * Get all Teams
 */
exports.list = function(req, res) {
  return Team.find({}).sort('name').exec(function (err, teams) {
    if (!err) {
      return res.json(teams);
    } else {
      return res.send(err);
    }
  });
};