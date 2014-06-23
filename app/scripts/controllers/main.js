'use strict';

angular.module('wbwcpNgApp')
  .controller('MainCtrl', function ($scope, $http, $location, $anchorScroll, Auth) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.isAdmin = (Auth.isLoggedIn() && Auth.isAdmin()) ? true : false;
    });

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

  });
