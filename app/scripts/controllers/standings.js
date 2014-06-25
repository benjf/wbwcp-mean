'use strict';

angular.module('wbwcpNgApp')
  .controller('StandingsCtrl', function ($scope, $http) {
    $scope.errors = {};


    // get all users from the back-end
    $http.get('/api/users').success(function(users) {
      $scope.users = users;

      // get all picks from the back-end
      $http.get('/api/picks').success(function(picks) {
        for (var pick in picks) {
          if(picks[pick].points !== undefined) {
            // update $scope.users[].points
            for (var i = 0; i < $scope.users.length; i++) {
              if (picks[pick].user === $scope.users[i]._id) {
                if (picks[pick].round !== 'ko') {
                  // first round
                  if (typeof $scope.users[i].pointsFirst === 'undefined') {
                    $scope.users[i].pointsFirst = picks[pick].points;
                  } else {
                    $scope.users[i].pointsFirst += picks[pick].points;
                  }
                } else {
                  // knockout round
                  if (typeof $scope.users[i].pointsKO === 'undefined') {
                    $scope.users[i].pointsKO = picks[pick].points;
                  } else {
                    $scope.users[i].pointsKO += picks[pick].points;
                  }
                }
                // total
                $scope.users[i].points += picks[pick].points;
              }
            }
          }
        }
        // fill any missing values with 0's
        for (var user in users) {
          if (typeof users[user].points === 'undefined') {
            users[user].points = 0;
          }
          if (typeof users[user].pointsFirst === 'undefined') {
            users[user].pointsFirst = 0;
          }
          if (typeof users[user].pointsKO === 'undefined') {
            users[user].pointsKO = 0;
          }
        }
      });
      // default sort
      $scope.standingsSort = '-points';
    });

    $scope.currentStanding = function() {
      $scope.matchNumberForStanding = 1;
    };

    $scope.changeStanding = function() {
      $scope.matchNumberForStanding = 2;
    };



    

    // Find highest match number where we have a result recorded.
    
    // Populate select box w/ integers equal to that match number and lower.
    
    // For selected match number and below (up to 48), retrieve points for all users into array, sorted by points desc.
    
    // Above 48, build two separate arrays: one for KO round, and one for "total" (first round + KO)
    
    // View prints table(s) of username and points totals.


  });
