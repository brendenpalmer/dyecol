/**
 * @author Brenden Palmer
 * @name dyecol.navigation:HeaderController
 * @ngdoc controller
 */

;(function () {
    'use strict';

    angular.module('dyecol.navigation')
        .controller('HeaderController', function (
            $state,
            DYECOL_STATE_NAMES
        ) {
            /**
             * @name this.states
             * @type {Object}
             */
            this.states = DYECOL_STATE_NAMES;
    });
})();
