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

    // Do some time checks to determine if first/KO round picks can be submitted?
    //@todo: Instead of hard-coding the appropriate times here, we should move them to a config file.
    $scope.beforeFirstroundCutoff = Date.now() < 1402603200000 ? true : false; // Before match 1.
    $scope.afterKOroundOpen = Date.now() > 1403816400000 ? true : false; // After match 48 + 2 hours.
    $scope.beforeKOroundCutoff = Date.now() < 1403971200000 ? true : false; // Before match 49.

    // Identify admin users.
    $scope.isAdmin = Auth.isAdmin() ? true : false;
  });
