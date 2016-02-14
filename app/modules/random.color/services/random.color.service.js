/**
 * @author Brenden Palmer
 * @name dyecol.random.color.RandomColorService
 * @ngdoc service
 */

;
(function() {
  'use strict';

  angular.module('dyecol.random.color')
    .service('RandomColorService', function(Color) {
      var _bgColor = [];

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color.RandomColorService
       * @name getBgColor
       * @description
       * Gets an array representation of RGB colors
       * @return {Array} The background color RGB array
       */
      this.getBgColor = function() {
        return _bgColor;
      };

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color.RandomColorService
       * @name updateBgColor
       * @description
       * Updates the background color
       */
      this.updateBgColor = function() {
        _bgColor = [];
        
        _bgColor.push(Color.getRandomRgbColor());
        _bgColor.push(Color.getRandomRgbColor());
        _bgColor.push(Color.getRandomRgbColor());
      };

      return this;
    });
})();
