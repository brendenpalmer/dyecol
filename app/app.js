/**
 * @author Brenden Palmer
 * @name dyecol
 * @ngdoc overview
 */

;
(function() {
  'use strict';

  angular.module('dyecol', [
    'ngAnimate',
    'templates',
    'ui.router',
    'dyecol.constants',
    'dyecol.random.color',
    'dyecol.navigation'
  ]).config(function(
    $locationProvider,
    $urlRouterProvider
  ) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }).run(function(
    $rootScope,
    $state,
    APP_TITLE,
    DYECOL_STATE_NAMES
  ) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      $rootScope.pageTitle = '';

      if (toState.title) {
        $rootScope.pageTitle += toState.title;
      }
    });
  });
})();
