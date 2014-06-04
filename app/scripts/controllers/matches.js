'use strict';

angular.module('wbwcpNgApp')
  .controller('MatchesCtrl', function ($scope, $http, User) {
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
          for (var pick in picks) {
            rePicks[picks[pick].match] = picks[pick].choice;
          }
          $scope.currentPicks = rePicks;
        });
      }
    });

    $scope.changeUser = function() {
      User.get({ _id: $scope.currentUser._id }, function() {
        if ($scope.currentUser._id) {
          $http.get('/api/picks/' + $scope.currentUser._id).success(function(picks) {
            // array[pick.match] = pick.choice
            var rePicks = [];
            for (var pick in picks) {
              rePicks[picks[pick].match] = picks[pick].choice;
            }
            // send picks to the front-end
            $scope.currentPicks = rePicks;
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
      });
    };
  });
