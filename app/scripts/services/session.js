'use strict';

angular.module('wbwcpNgApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
