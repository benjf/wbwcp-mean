'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    teams = require('./controllers/teams'),
    matches = require('./controllers/matches'),
    picks = require('./controllers/picks'),
    session = require('./controllers/session'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  
  app.route('/api/users')
    .get(users.list)
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/teams')
    .get(teams.list);

  app.route('/api/matches')
    .get(matches.list);
  app.route('/api/match/:id')
    .get(matches.show)
    .put(matches.update);

  app.route('/api/picks/:uid')
    .get(picks.list)
    .put(picks.save);

/*
  app.route('/api/picks/:id')
    .get(picks.show);

  app.route('/api/standings')
    .get(standings.list);
*/
  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};