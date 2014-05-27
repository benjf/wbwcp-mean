'use strict';

var mongoose = require('mongoose'),
    Pick = mongoose.model('Pick');

/**
 * Get Picks for a single userId
 */
exports.list = function(req, res) {
  var userId = req.params.uid;
  return Pick.find({ user: userId }, function (err, picks) {
    if (!err) {
      return res.json(picks);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Save a Pick
 */
exports.save = function (req, res, next) {
  // you can only save your own picks!
  console.log(req.body);
  if (req.user._id == req.body.user) {
    // look for an existing Pick to update (user._id, match._id)
    Pick.find( { user: req.body.user, match: req.body.match }, function(err, record) {
      if (err) {
        return next(err);
      }

      if (typeof record[0] !== 'undefined') {
        // update
        console.log("update Pick");
        var newPick = {
          user: req.body.user,
          match: req.body.match,
          choice: req.body.choice
        };
        Pick.update({ _id: record[0]._id }, { $set: newPick }).exec();
      } else {
        // insert
        console.log("insert Pick");
        Pick.create({
          user: req.body.user,
          match: req.body.match,
          choice: req.body.choice
        });
      }
        
    });
    res.send(200);
  } else {
    res.send(403);
  }
  
};