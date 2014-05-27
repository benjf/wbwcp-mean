'use strict';

angular.module('wbwcpNgApp')
  .factory('Pick', function Pick($http) {
    
    
    return {

      /**
       * Get array of Picks for a user
       * 
       * @param  {String}   userId   - user ID
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      loadPicks: function(userId) {

        $http.get('/api/picks/' + userId).success(function(picks) {
          //console.log(picks);
          // array[pick.match] = pick.choice
          var rePicks = [];
          for (var pick in picks) {
            rePicks[picks[pick].match] = picks[pick].choice;
          }
          console.log(rePicks);
          // send picks to the front-end
          return rePicks;
        });

      }
    };
  });