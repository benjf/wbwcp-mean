'use strict';

angular.module('wbwcpNgApp')
  .controller('MatchesCtrl', function ($scope, $http, User, Auth, $filter) {
    $scope.errors = {};

    // Set up data for the /matches page

    // get all matches from the back-end
    $http.get('/api/matches').success(function(matches) {
      $scope.firstround = matches.slice(0, 48);
      $scope.finals = matches.slice(48);
    });

    // get all users from the back-end
    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    // get all teams
    $http.get('/api/teams').success(function(teams) {
      $scope.teams = teams;
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

            if ($scope.beforeKOroundCutoff) {
              // for finals matches, shove picks data/teams into $scope.finals[i]
              var finalsPick = $filter('filter')($scope.finals, {_id: picks[pick].match}, true);
              if (finalsPick[0]) {
                var teamPick = $filter('filter')($scope.teams, {code: picks[pick].choice}, true);
                if (teamPick[0]) {
                  $scope.updateKOPick(finalsPick[0].matchNumber, teamPick[0]);
                }
              }
            }
          }
          $scope.currentPicks = rePicks;
          $scope.currentPoints = rePoints;
          $scope.pickCount = picks.length;

          // special case: bonus for picking all 4 semifinalists correctly
          $scope.currentPoints['semifinalsBonus'] = 0;
          if(
            $scope.currentPoints[$scope.finals[8]._id] != 0 &&
            $scope.currentPoints[$scope.finals[9]._id] != 0 &&
            $scope.currentPoints[$scope.finals[10]._id] != 0 &&
            $scope.currentPoints[$scope.finals[11]._id] != 0
            ) {
            $scope.currentPoints['semifinalsBonus'] = 4;
          }

        });
      }
    });

    $scope.changeUser = function() {
      User.get({ _id: $scope.currentUser._id }, function() {
        if ($scope.currentUser._id) {
          $http.get('/api/picks/' + $scope.currentUser._id).success(function(picks) {
            // reset $scope.finals when changing users
            $http.get('/api/matches').success(function(matches) {
              $scope.finals = matches.slice(48);

              // array[pick.match] = pick.choice
              var rePicks = [];
              var rePoints = [];
              for (var pick in picks) {
                rePicks[picks[pick].match] = picks[pick].choice;
                rePoints[picks[pick].match] = picks[pick].points;

                if ($scope.beforeKOroundCutoff) {
                  // for finals matches, shove picks data/teams into $scope.finals[i]
                  var finalsPick = $filter('filter')($scope.finals, {_id: picks[pick].match}, true);
                  if (finalsPick[0]) {
                    var teamPick = $filter('filter')($scope.teams, {code: picks[pick].choice}, true);
                    if (teamPick[0]) {
                      $scope.updateKOPick(finalsPick[0].matchNumber, teamPick[0]);
                    }
                  }
                }
              }
              // send picks to the front-end
              $scope.currentPicks = rePicks;
              $scope.currentPoints = rePoints;
              $scope.pickCount = picks.length;

              // special case: bonus for picking all 4 semifinalists correctly
              $scope.currentPoints['semifinalsBonus'] = 0;
console.log($scope.currentPoints[$scope.finals[8]._id]);
              if(
                (typeof $scope.currentPoints[$scope.finals[8]._id] != 'undefined' && $scope.currentPoints[$scope.finals[8]._id] != 0) &&
                (typeof $scope.currentPoints[$scope.finals[9]._id] != 'undefined' && $scope.currentPoints[$scope.finals[9]._id] != 0) &&
                (typeof $scope.currentPoints[$scope.finals[10]._id] != 'undefined' && $scope.currentPoints[$scope.finals[10]._id] != 0) &&
                (typeof $scope.currentPoints[$scope.finals[11]._id] != 'undefined' && $scope.currentPoints[$scope.finals[11]._id] != 0)
                ) {
                $scope.currentPoints['semifinalsBonus'] = 4;
              }

            });
          });
        }
      });
    };

    $scope.updateKOPick = function(matchNumber, team) {
      var tbdTeamArray = $filter('filter')($scope.teams, {code: 'tbd'}, true);
      var tbdTeam = tbdTeamArray[0];
      switch(matchNumber) {
        case 49:
          // match #57, old team1
          var oldTeam = $scope.finals[8].team1;
          // update match #57, team1
          $scope.finals[8].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[12].team1._id === oldTeam._id) {
            $scope.finals[12].team1 = tbdTeam;
          }
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 50:
          // match #57, old team2
          var oldTeam = $scope.finals[8].team2;
          // update match #57, team2
          $scope.finals[8].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[12].team1._id === oldTeam._id) {
            $scope.finals[12].team1 = tbdTeam;
          }
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 51:
          // match #59, old team1
          var oldTeam = $scope.finals[10].team1;
          // update match #59, team1
          $scope.finals[10].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[13].team1._id === oldTeam._id) {
            $scope.finals[13].team1 = tbdTeam;
          }
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 52:
          // match #59, old team2
          var oldTeam = $scope.finals[10].team2;
          // update match #59, team2
          $scope.finals[10].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[13].team1._id === oldTeam._id) {
            $scope.finals[13].team1 = tbdTeam;
          }
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 53:
          // match #58, old team1
          var oldTeam = $scope.finals[9].team1;
          // update match #58, team1
          $scope.finals[9].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[12].team2._id === oldTeam._id) {
            $scope.finals[12].team2 = tbdTeam;
          }
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 54:
          // match #58, old team2
          var oldTeam = $scope.finals[9].team2;
          // update match #58, team2
          $scope.finals[9].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[12].team2._id === oldTeam._id) {
            $scope.finals[12].team2 = tbdTeam;
          }
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 55:
          // match #60, old team1
          var oldTeam = $scope.finals[11].team1;
          // update match #60, team1
          $scope.finals[11].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[13].team2._id === oldTeam._id) {
            $scope.finals[13].team2 = tbdTeam;
          }
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 56:
          // match #60, old team2
          var oldTeam = $scope.finals[11].team2;
          // update match #60, team2
          $scope.finals[11].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[13].team2._id === oldTeam._id) {
            $scope.finals[13].team2 = tbdTeam;
          }
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 57:
          // match #61, old team1
          var oldTeam = $scope.finals[12].team1;
          // update match #61, team1
          $scope.finals[12].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 58:
          // match #61, old team2
          var oldTeam = $scope.finals[12].team2;
          // update match #61, team2
          $scope.finals[12].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[14].team1._id === oldTeam._id) {
            $scope.finals[14].team1 = tbdTeam;
          }
          if ($scope.finals[15].team1._id === oldTeam._id) {
            $scope.finals[15].team1 = tbdTeam;
          }
          break;
        case 59:
          // match #62, old team1
          var oldTeam = $scope.finals[13].team1;
          // update match #62, team1
          $scope.finals[13].team1 = team;
          // clear later games, if appropriate
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 60:
          // match #62, old team2
          var oldTeam = $scope.finals[13].team2;
          // update match #62, team2
          $scope.finals[13].team2 = team;
          // clear later games, if appropriate
          if ($scope.finals[14].team2._id === oldTeam._id) {
            $scope.finals[14].team2 = tbdTeam;
          }
          if ($scope.finals[15].team2._id === oldTeam._id) {
            $scope.finals[15].team2 = tbdTeam;
          }
          break;
        case 61:
          // update match #64, team1
          $scope.finals[15].team1 = team;
          // put loser into 3rd place game, match #63
          if (team.code === $scope.finals[12].team1.code) {
            // team 1 selected, put team 2 in 3rd place game
            $scope.finals[14].team1 = $scope.finals[12].team2;
          } else {
            // team 1 selected, put team 2 in 3rd place game
            $scope.finals[14].team1 = $scope.finals[12].team1;
          }
          break;
        case 62:
          // update match #64, team2
          $scope.finals[15].team2 = team;
          // put loser into 3rd place game, match #63
          if (team.code === $scope.finals[13].team1.code) {
            // team 1 selected, put team 2 in 3rd place game
            $scope.finals[14].team2 = $scope.finals[13].team2;
          } else {
            // team 1 selected, put team 2 in 3rd place game
            $scope.finals[14].team2 = $scope.finals[13].team1;
          }
          break;
      }
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
        
        // find the new Team data to shove into $scope.finals
        var newTeam = $filter('filter')($scope.teams, {code: choice}, true);
        //console.log(newTeam[0]);
        // based on match._id, update $scope.finals with new team info above
        var thisMatch = $filter('filter')($scope.finals, {_id: matchId}, true);
        //console.log(thisMatch[0]);
        //console.log($scope.finals);
        $scope.updateKOPick(thisMatch[0].matchNumber, newTeam[0]);
        //console.log($scope.finals);
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
    };

    // Do some time checks to determine if first/KO round picks can be submitted?
    //@todo: Instead of hard-coding the appropriate times here, we should move them to a config file.
    $scope.beginFirstMatch = 1402603200000;
    $scope.endLastFirstroundMatch = 1403820000000;
    $scope.beginFirstKOroundMatch = 1403971200000;
    $scope.beforeFirstroundCutoff = Date.now() < $scope.beginFirstMatch ? true : false; // Before match 1.
    $scope.afterKOroundOpen = Date.now() > $scope.endLastFirstroundMatch ? true : false; // After match 48 + 2 hours.
    $scope.beforeKOroundCutoff = Date.now() < $scope.beginFirstKOroundMatch ? true : false; // Before match 49.

    // set the active tab
    if ($scope.afterKOroundOpen) {
      $scope.activeTab = 'finals';
    } else {
      $scope.activeTab = 'group';
    }

    // Identify admin users.
    $scope.isAdmin = (Auth.isLoggedIn() && Auth.isAdmin()) ? true : false;
    $scope.isLoggedIn = (Auth.isLoggedIn()) ? true : false;
  });
