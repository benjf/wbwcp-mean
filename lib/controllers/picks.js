'use strict';

var mongoose = require('mongoose'),
    Pick = mongoose.model('Pick'),
    Match = mongoose.model('Match');

/**
 * Get Picks for a single userId
 */
exports.list = function(req, res) {
  if (req.params.uid) {
    var userId = req.params.uid;
    return Pick.find({ user: userId }, function (err, picks) {
      if (!err) {
        return res.json(picks);
      } else {
        return res.send(err);
      }
    });
  }
  else {
    return Pick.find(function (err, picks) {
      if (!err) {
        return res.json(picks);
      } else {
        return res.send(err);
      }
    });
  }
};

/**
 * Save a Pick
 */
exports.save = function (req, res, next) {
  // you can only save your own picks!
  if (req.user._id == req.body.user) {
    // look for an existing Pick to update (user._id, match._id)
    Pick.find( { user: req.body.user, match: req.body.match }, function(err, record) {
      if (err) {
        return next(err);
      }

      // find match round to separate first/KO round points
      Match.find( { _id: req.body.match}, function(err, matchRecord) {

        var matchRound = "first";
        if (matchRecord.round !== "1") {
          matchRound = "ko";
        }

        if (typeof record[0] !== 'undefined') {
          // update
          var newPick = {
            choice: req.body.choice,
            round: matchRound
          };
          Pick.update({ _id: record[0]._id }, { $set: newPick }).exec();
        } else {
          // insert
          Pick.create({
            user: req.body.user,
            match: req.body.match,
            choice: req.body.choice,
            round: matchRound
          });
        }
      });
    });
    res.send(200);
  } else {
    res.send(403);
  }
  
};