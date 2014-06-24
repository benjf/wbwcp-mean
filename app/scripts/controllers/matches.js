'use strict';

angular.module('wbwcpNgApp')
  .controller('MatchesCtrl', function ($scope, $http, User, Auth) {
    $scope.errors = {};

    // Set up data for the /matches page
    $scope.activeTab = 'group';

    // get all matches from the back-end
    $http.get('/api/matches').success(function(matches) {
      $scope.firstround = matches.slice(0, 48);
      $scope.finals = matches.slice(48);
    });

    // get all users from the back-end
    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    // get picks for the currently displayed user
    $scope.currentUser = User.get({}, function() {
      if ($scope.currentUser._id) {
        $http.get('/api/picks/' + $scope.currentUser._id).success(function(picks) {
          // array[pick.match] = pick.choice
          var rePicks = [];
          var rePoints = [];
          for (var pick in picks) {
            rePicks[picks[pick].match] = picks[pick].choice;
            rePoints[picks[pick].match] = picks[pick].points;
          }
          $scope.currentPicks = rePicks;
          $scope.currentPoints = rePoints;
          $scope.pickCount = picks.length;
        });
      }
    });

    $scope.changeUser = function() {
      User.get({ _id: $scope.currentUser._id }, function() {
        if ($scope.currentUser._id) {
          $http.get('/api/picks/' + $scope.currentUser._id).success(function(picks) {
            // array[pick.match] = pick.choice
            var rePicks = [];
            var rePoints = [];
            for (var pick in picks) {
              rePicks[picks[pick].match] = picks[pick].choice;
              rePoints[picks[pick].match] = picks[pick].points;
            }
            // send picks to the front-end
            $scope.currentPicks = rePicks;
            $scope.currentPoints = rePoints;
            $scope.pickCount = picks.length;
          });
        }
      });
    };

    $scope.savePick = function(userId, matchId, choice) {
      $scope.submitted = true;
      // PUT to /api/picks/userId
      $http.put('/api/picks/' + userId, { user: userId, match: matchId, choice: choice });
      // update $scope.currentPicks
      $http.get('/api/picks/' + $scope.currentUser._id).success(function(picks) {
        // array[pick.match] = pick.choice
        var rePicks = [];
        for (var pick in picks) {
          rePicks[picks[pick].match] = picks[pick].choice;
        }
        // send picks to the front-end
        $scope.currentPicks = rePicks;
        $scope.pickCount = picks.length;
      });
    };

    // Determine if a given match should be "enabled" so that users can submit picks.
    $scope.enableKOpicks = function() {
      // Array of KO stage matches to be either enabled or disabled.
      $scope.KOpicksEnabled = [];

      // For the round of 16, we enable if both teams are not the generic 'TBD' placeholder.
      for (var i = 49; i < 57; i++) {
        // @todo: replace finals[i] with the actual match record.
        //$scope.KOpicksEnabled[i] = finals[i].team1.name != 'TBD' && finals[i].team2.name != 'TBD' ? true : false;
      }

      // For all other matches, we enable if the user has picked results for the two matches that feed into this one.
      for (var i = 49; i < 57; i++) {
        // If a choice record exists for this user for match XX and YY...
      }
    }

    // Do some time checks to determine if first/KO round picks can be submitted?
    //@todo: Instead of hard-coding the appropriate times here, we should move them to a config file.
    $scope.beginFirstMatch = 1402603200000;
    $scope.endLastFirstroundMatch = 1403820000000;
    $scope.beginFirstKOroundMatch = 1403971200000;
    $scope.beforeFirstroundCutoff = Date.now() < $scope.beginFirstMatch ? true : false; // Before match 1.
    $scope.afterKOroundOpen = Date.now() > $scope.endLastFirstroundMatch ? true : false; // After match 48 + 2 hours.
    $scope.beforeKOroundCutoff = Date.now() < $scope.beginFirstKOroundMatch ? true : false; // Before match 49.

    // Identify admin users.
    $scope.isAdmin = (Auth.isLoggedIn() && Auth.isAdmin()) ? true : false;
  });
