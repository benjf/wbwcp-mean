'use strict';

angular.module('wbwcpNgApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.isAdmin = (Auth.isLoggedIn() && Auth.isAdmin()) ? true : false;
    });
  });
