'use strict';

angular.module('wbwcpNgApp')
  .controller('StandingsCtrl', function ($scope, $http) {
    $scope.errors = {};


    // get all users from the back-end
    $http.get('/api/users').success(function(users) {

      // initialize point values with 0's
      for (var j in users) {
        users[j].points = 0;
        users[j].pointsFirst = 0;
        users[j].pointsKO = 0;
      }
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
                  $scope.users[i].pointsFirst += picks[pick].points;
                } else {
                  // knockout round
                  $scope.users[i].pointsKO += picks[pick].points;
                }
                // total
                $scope.users[i].points += picks[pick].points;
              }
            }
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
