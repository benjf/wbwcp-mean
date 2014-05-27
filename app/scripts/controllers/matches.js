'use strict';

angular.module('wbwcpNgApp')
  .controller('MatchesCtrl', function ($scope, $http, User) {
    $scope.errors = {};

    $scope.activeTab = 'group';

    $http.get('/api/matches').success(function(matches) {
      // send matches to the front-end
      $scope.firstround = matches.slice(0, 48);
      $scope.finals = matches.slice(48);
    });

    $http.get('/api/users').success(function(users) {
      // send users to the front-end
      $scope.users = users;
    });

    $scope.currentUser = User.get({}, function() {
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
