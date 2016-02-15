/**
 * @author Brenden Palmer
 * @name dyecol.navigation.NavigationService
 * @ngdoc service
 */

;
(function() {
  'use strict';

  angular.module('dyecol.navigation')
    .service('NavigationService', function() {
      var _topics = {};

      /**
       * @ngdoc method
       * @methodOf dyecol.navigation.NavigationService
       * @name _hasTopic
       * @description
       * Returns whether or not the topic exists
       * @param  {string}  topic The topic the check
       * @return {Boolean}       Whether or not the topic exists
       * @private
       */
      function _hasTopic(topic) {
        return _topics.hasOwnProperty(topic);
      }

      /**
       * @ngdoc method
       * @methodOf dyecol.navigation.NavigationService
       * @name publish
       * @description
       * Publishes a topic
       * @param  {string} topic The topic to publish
       */
      this.publish = function(topic) {
        if (_hasTopic(topic) === true) {
          for (var i = 0; i < _topics[topic].length; i++) {
            _topics[topic][i]();
          }
        }
      };

      /**
       * @ngdoc method
       * @methodOf dyecol.navigation.NavigationService
       * @name subscribe
       * @description
       * Subscribes to a particular topic
       * @param  {string} topic   The topic
       * @param  {Function} handler The handler
       * @return {Function}       The function to remove the subscription
       */
      this.subscribe = function(topic, handler) {
        if (_hasTopic(topic) === false) {
          _topics[topic] = [];
        }

        _topics[topic].push(handler);

        return function() {
          _topics[topic].splice(_topics[topic].indexOf(handler), 1);
        };
      };

      return this;
    });
})();
