
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Team = mongoose.model('Team'),
  Match = mongoose.model('Match');

Match.find({ matchNumber: 49 }).exec(function (err, collection) {
  // if no Matches exist, populate initial Match data
  if (collection.length === 0) {

    Team.find( { code: 'tbd' }, function (err, tbdTeam) {
      // * Round of 16 
      // create the Match
      Match.create({
        matchNumber: 49,
        datetime: Date.parse('Jun 28, 2014 13:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 50,
        datetime: Date.parse('Jun 28, 2014 17:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 51,
        datetime: Date.parse('Jun 29, 2014 13:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 52,
        datetime: Date.parse('Jun 29, 2014 17:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 53,
        datetime: Date.parse('Jun 30, 2014 13:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 54,
        datetime: Date.parse('Jun 30, 2014 17:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 55,
        datetime: Date.parse('Jul 01, 2014 13:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 56,
        datetime: Date.parse('Jul 01, 2014 17:00 -0300'),
        round: 'r16',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });

      // * Quarter-finals
      // create the Match
      Match.create({
        matchNumber: 57,
        datetime: Date.parse('Jul 04, 2014 13:00 -0300'),
        round: 'quarters',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 58,
        datetime: Date.parse('Jul 04, 2014 17:00 -0300'),
        round: 'quarters',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 59,
        datetime: Date.parse('Jul 05, 2014 13:00 -0300'),
        round: 'quarters',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 60,
        datetime: Date.parse('Jul 05, 2014 17:00 -0300'),
        round: 'quarters',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });

      // * Semi-finals
      // create the Match
      Match.create({
        matchNumber: 61,
        datetime: Date.parse('Jul 08, 2014 17:00 -0300'),
        round: 'semis',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
      // create the Match
      Match.create({
        matchNumber: 62,
        datetime: Date.parse('Jul 09, 2014 17:00 -0300'),
        round: 'semis',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });

      // * Third place game
      // create the Match
      Match.create({
        matchNumber: 63,
        datetime: Date.parse('Jul 12, 2014 17:00 -0300'),
        round: 'thirdplace',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });

      // * Final
      // create the Match
      Match.create({
        matchNumber: 64,
        datetime: Date.parse('Jul 13, 2014 16:00 -0300'),
        round: 'final',
        group: '',
        team1: tbdTeam[0]._id,
        team2: tbdTeam[0]._id,
        score1: 0,
        score2: 0,
        result: ''
      });
    });
  }
});