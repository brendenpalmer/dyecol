/**
 * @author Brenden Palmer
 * @name dyecol.random.color
 * @ngdoc overview
 */

;
(function() {
  'use strict';

  angular.module('dyecol.random.color', [
      'dyecol.constants'
    ])
    .config(function(
      $stateProvider,
      DYECOL_STATE_NAMES
    ) {
      $stateProvider.state(DYECOL_STATE_NAMES.randomColor, {
        parent: 'root',
        url: '/',
        title: 'dyecol | Beautiful Color Generator for Your Web Projects',
        views: {
          'main@': {
            templateUrl: 'modules/random.color/views/random.color.html',
            controller: 'RandomColorController',
            controllerAs: 'randomColor'
          }
        }
      });
    });
})();
