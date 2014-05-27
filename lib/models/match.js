'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Match Schema
 */
var MatchSchema = new Schema({
  matchNumber: Number,
  datetime: Number,
  //location: String,
  round: String,
  group: String,
  team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', index: true }, // object refs to teams
  team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', index: true }, // object refs to teams
  score1: Number,
  score2: Number,
  result: String
});

/**
 * Validations
 */
// Validate empty datetime
MatchSchema.path('datetime').validate(function(datetime) {
    return datetime.length;
  }, 'Match Date/Time cannot be blank');

// Validate empty team1
MatchSchema.path('team1').validate(function(team1) {
    return team1.length;
  }, 'Team 1 cannot be blank');

// Validate empty team2
MatchSchema.path('team2').validate(function(team2) {
    return team2.length;
  }, 'Team 2 cannot be blank');

mongoose.model('Match', MatchSchema);
