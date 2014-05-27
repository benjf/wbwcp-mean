'use strict';

angular.module('wbwcpNgApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
    $scope.user = User.get();

    $scope.changePassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.pwMessage = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};

    $scope.changeNames = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changeNames( $scope.user )
        .then( function() {
          $scope.namesMessage = 'Names successfully changed.';
        })
        .catch( function() {
          form.name.$setValidity('mongoose', false);
          $scope.errors.other = 'Oops, there was a problem.';
        });
      }
    };
  });
