
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Team = mongoose.model('Team'),
  Match = mongoose.model('Match');

Match.find({}).exec(function (err, collection) {
  // if no Matches exist, populate initial Match data
  if (collection.length === 0) {

    /* Round 1 */
    /* Group A */
    // find Team 1
    Team.find( { code: 'bra' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'cro' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 12, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 1,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'mex' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'cmr' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 13, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 2,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'bra' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'mex' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 17, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 17,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'cmr' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'cro' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 18, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 18,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'cmr' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'bra' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 23, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 33,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'cro' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'mex' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 23, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 34,
          datetime: matchDate,
          round: '1',
          group: 'A',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group B */
    // find Team 1
    Team.find( { code: 'esp' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ned' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 13, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 3,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'chi' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'aus' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 13, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 4,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'esp' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'chi' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 18, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 19,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'aus' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ned' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 18, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 20,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'aus' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'esp' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 23, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 35,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'cro' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'mex' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 23, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 36,
          datetime: matchDate,
          round: '1',
          group: 'B',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group C */
    // find Team 1
    Team.find( { code: 'col' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'gre' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 14, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 5,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'civ' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'jpn' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 14, 2014 22:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 6,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'col' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'civ' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 19, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 21,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'jpn' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'gre' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 19, 2014 19:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 22,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'jpn' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'col' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 24, 2014 16:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 37,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'civ' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'gre' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 24, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 38,
          datetime: matchDate,
          round: '1',
          group: 'C',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group D */
    // find Team 1
    Team.find( { code: 'uru' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'crc' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 14, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 7,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'eng' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ita' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 14, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 8,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'uru' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'eng' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 19, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 23,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'ita' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'crc' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 20, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 24,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'ita' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'uru' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 24, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 39,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'crc' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'eng' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 24, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 40,
          datetime: matchDate,
          round: '1',
          group: 'D',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group E */
    // find Team 1
    Team.find( { code: 'sui' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ecu' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 15, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 9,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'fra' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'hon' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 15, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 10,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'sui' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'fra' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 20, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 25,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'hon' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ecu' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 20, 2014 19:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 26,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'hon' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'sui' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 25, 2014 16:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 41,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'ecu' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'fra' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 25, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 42,
          datetime: matchDate,
          round: '1',
          group: 'E',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group F */
    // find Team 1
    Team.find( { code: 'arg' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'bih' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 15, 2014 19:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 11,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'irn' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'nga' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 16, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 12,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'arg' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'irn' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 21, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 27,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'nga' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'bih' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 21, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 28,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'nga' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'arg' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 25, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 43,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'bih' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'irn' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 25, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 44,
          datetime: matchDate,
          round: '1',
          group: 'F',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group G */
    // find Team 1
    Team.find( { code: 'ger' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'por' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 16, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 13,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'gha' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'usa' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 16, 2014 19:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 14,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'ger' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'gha' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 21, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 29,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'usa' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'por' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 22, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 30,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'usa' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'ger' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 26, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 45,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'por' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'gha' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 26, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 46,
          datetime: matchDate,
          round: '1',
          group: 'G',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

    /* Group H */
    // find Team 1
    Team.find( { code: 'bel' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'alg' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 17, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 15,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'rus' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'kor' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 17, 2014 18:00 -0400');

        // create the Match
        Match.create({
          matchNumber: 16,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'bel' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'rus' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 22, 2014 13:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 31,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'kor' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'alg' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 22, 2014 16:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 32,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'kor' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'bel' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 26, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 47,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });
    // find Team 1
    Team.find( { code: 'alg' }, function (err, team1) {
      // find Team 2
      Team.find( { code: 'rus' }, function (err, team2) {
        // convert the match date to a timestamp
        var matchDate = Date.parse('Jun 26, 2014 17:00 -0300');

        // create the Match
        Match.create({
          matchNumber: 48,
          datetime: matchDate,
          round: '1',
          group: 'H',
          team1: team1[0]._id,
          team2: team2[0]._id,
          score1: 0,
          score2: 0,
          result: ''
        });
      });
    });

  }
});