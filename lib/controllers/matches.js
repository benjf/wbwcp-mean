'use strict';

var mongoose = require('mongoose'),
    Match = mongoose.model('Match'),
    Pick = mongoose.model('Pick');

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

/**
 * Get one Match
 */
exports.show = function(req, res) {
  var matchId = req.params.id;
  return Match.find({ _id: matchId }).populate('team1 team2').exec(function (err, match) {
    if (!err) {
      return res.json(match);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Calculate Points, given a Match result and a Pick choice
 */
function calculatePoints(result, choice) {
  var points;
  // magic goes here...
  switch (result) {
    case 'w:1':
      if (choice === 'w:1') {
        return 4;
      } else if (choice === 'w+2:1') {
        return 2;
      } else if (choice === 'd') {
        return 0;
      } else if (choice === 'w+2:2') {
        return -2;
      } else if (choice === 'w:2') {
        return -1;
      }
      break;
    case 'w+2:1':
      if (choice === 'w:1') {
        return 3;
      } else if (choice === 'w+2:1') {
        return 6;
      } else if (choice === 'd') {
        return 0;
      } else if (choice === 'w+2:2') {
        return -2;
      } else if (choice === 'w:2') {
        return -1;
      }
      break;
    case 'd':
      if (choice === 'w:1') {
        return 0;
      } else if (choice === 'w+2:1') {
        return -1;
      } else if (choice === 'd') {
        return 2;
      } else if (choice === 'w+2:2') {
        return -1;
      } else if (choice === 'w:2') {
        return 0;
      }
      break;
    case 'w+2:2':
      if (choice === 'w:1') {
        return -1;
      } else if (choice === 'w+2:1') {
        return -2;
      } else if (choice === 'd') {
        return 0;
      } else if (choice === 'w+2:2') {
        return 6;
      } else if (choice === 'w:2') {
        return 3;
      }
      break;
    case 'w:2':
      if (choice === 'w:1') {
        return -1;
      } else if (choice === 'w+2:1') {
        return -2;
      } else if (choice === 'd') {
        return 0;
      } else if (choice === 'w+2:2') {
        return 2;
      } else if (choice === 'w:2') {
        return 4;
      }
      break;
  }
  // we should never get here
  return points;
}

/**
 * Update a Match
 */
exports.update = function(req, res, next) {
  var matchId = req.params.id;
  // find the Match to update
  Match.find( { _id: matchId }, function(err, record) {
    if (err) {
      return next(err);
    }

    // a nil-nil Draw requires 'result' to be selected
    // otherwise 'result' is calculated from the scores

    if (req.body.score1 || req.body.score2) {

      var result = req.body.score1 - req.body.score2;

      if (result === 0) {
        // Draw
        req.body.result = 'd';
      } else if (result === 1) {
        // Team 1 by one goal
        req.body.result = 'w:1';
      } else if (result === -1) {
        // Team 2 by one goal
        req.body.result = 'w:2';
      } else if (result > 1) {
        // Team 1 by two or more goals
        req.body.result = 'w+2:1';
      } else {
        // Team 2 by two or more goals
        req.body.result = 'w+2:2';
      }
    }

    // save the updated Match record
    Match.update({ _id: record[0]._id }, { $set: req.body }).exec();

    if (typeof req.body.result !== 'undefined') {
      // find all Picks with this matchId
      Pick.find( { match: matchId }, function(err, picks) {
        picks.forEach(function (pick, index, array) {
          // calculate Pick.points value, based on req.body.result & pick.choice
          console.log(req.body.result);
          console.log(pick.choice);
          var newPoints = calculatePoints(req.body.result, pick.choice);

          console.log(newPoints);
          // sanity check
          if (typeof newPoints !== 'undefined') {
            // update Pick.points w/ new value
            Pick.update({ _id: pick._id }, { $set: { points: newPoints } }).exec();
          }
        });
      });
    }
  });
  res.send(200);
};
