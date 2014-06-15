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
    $scope.beforeFirstroundCutoff = Date.now() < 1402603200000 ? true : false;
    //$scope.afterKOroundOpen = Date.now() > [match 48 kickoff + 2 hrs] ? true : false;
    //$scope.beforeKOroundCutoff = Date.now() < [match 49 kickoff] ? true : false;

    // Identify admin users.
    $scope.isAdmin = Auth.isAdmin() ? true : false;
  });
