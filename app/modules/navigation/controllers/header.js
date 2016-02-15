/**
 * @author Brenden Palmer
 * @name dyecol.navigation:HeaderController
 * @ngdoc controller
 */

;
(function() {
  'use strict';

  angular.module('dyecol.navigation')
    .controller('HeaderController', function(
      $state,
      NavigationService,
      DYECOL_STATE_NAMES
    ) {
      /**
       * @ngdoc property
       * @propertyOf dyecol.navigation:HeaderController
       * @name this.states
       * @type {Object}
       */
      this.states = DYECOL_STATE_NAMES;

      /**
       * @ngdoc method
       * @methodOf dyecol.navigation:HeaderController
       * @name toggleHover
       * @description Toggles hover
       */
      this.toggleHover = function() {
        NavigationService.publish('toggleHover');
      };
    });
})();
