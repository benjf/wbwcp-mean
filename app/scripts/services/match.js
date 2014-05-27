'use strict';

angular.module('wbwcpNgApp')
  .factory('Match', function ($resource) {
    return $resource('/api/matches/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {}
      }
	  });
  });
