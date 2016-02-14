/**
 * @author Brenden Palmer
 * @name dyecol.constants
 */

;(function () {
    'use strict';

    angular.module('dyecol.constants', [])
        .constant('APP_TITLE', 'dyecol')
        .constant('DYECOL_STATE_NAMES', Object.freeze({
            randomColor: 'randomColor'
        }));
})();
