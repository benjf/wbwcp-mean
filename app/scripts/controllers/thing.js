'use strict';

angular.module('wbwcpNgApp')
  .controller('ThingCtrl', function ($scope, $http, $location) {
    $scope.errors = {};

    $scope.newsTitle = '';
    $scope.newsBody = '';

    $scope.create = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        var newThing = {
          name: $scope.newsTitle,
          info: $scope.newsBody,
          dateTime: Date.now(),
          status: true
        };

        // $http POST with newThing
        $http.post('/api/thing/create', newThing);
        // redirect to the home page
        $location.path('/');
      }
    };
  });
