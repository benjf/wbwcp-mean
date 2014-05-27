'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Team Schema
 */
var TeamSchema = new Schema({
  code: String,
  name: String,
  flagImage: String,
  ranking: Number,
  group: String
});

/**
 * Validations
 */
// Validate empty name
TeamSchema.path('name').validate(function(name) {
    return name.length;
  }, 'Team name cannot be blank');

// Validate name is not taken
TeamSchema.path('name').validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({name: value}, function(err, user) {
      if(err) throw err;
      if(user) {
        if(self.id === user.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'The specified Team name is already in use.');

mongoose.model('Team', TeamSchema);
