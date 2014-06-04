'use strict';

angular.module('wbwcpNgApp')
  .controller('MatchEditCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.errors = {};

    // get the match data for this id
    var matchId = $routeParams.id;
    $http.get('/api/match/' + matchId).success(function(match) {
      $scope.matchEdit = match[0];
    });

    // get all teams for select options
    $http.get('/api/teams').success(function(teams) {
      $scope.teams = teams;
    });

    // set up 'group' select options
    $scope.groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // set up 'round' select options
    $scope.rounds = ['1', 'r16', 'quarters', 'semis', 'thirdplace', 'final'];

    // set up 'results' select options
    $scope.results = [
      {
        name: 'Team 1 by 2+ goals',
        value: 'w+2:1'
      },
      {
        name: 'Team 1 by 1 goal',
        value: 'w:1'
      },
      {
        name: 'Draw',
        value: 'd'
      },
      {
        name: 'Team 2 by 1 goal',
        value: 'w:2'
      },
      {
        name: 'Team 2 by 2+ goals',
        value: 'w+2:2'
      }
    ];

    $scope.saveMatch = function(form) {
      $scope.submitted = true;

      var newMatchData = {
        team1: form.team1.$viewValue._id,
        team2: form.team2.$viewValue._id,
        score1: form.score1.$viewValue,
        score2: form.score2.$viewValue,
        round: form.round.$viewValue,
        group: form.group.$viewValue,
        result: form.result.$viewValue.value
      };

      if (form.$valid) {
        // $http PUT with newMatchData
        $http.put('/api/match/' + $scope.matchEdit._id, newMatchData);
        // redirect to /matches
        $location.path('/matches');
      }
    };
  });
