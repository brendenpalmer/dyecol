/**
 * @author Brenden Palmer
 * @name dyecol.color.util.Color
 * @ngdoc service
 */

;
(function() {
  'use strict';

  angular.module('dyecol.color.util', [])
    .service('Color', function() {
      var _baseAlpha = 0.4;
      var _hoverAlpha = 0.8;

      /**
       * @ngdoc service
       * @methodOf dyecol.color.util.Color
       * @name getBaseAlpha
       * @description
       * Gets the base alpha value
       * @return {number} The base alpha
       */
      this.getBaseAlpha = function() {
        return _baseAlpha;
      };

      /**
       * @ngdoc service
       * @methodOf dyecol.color.util.Color
       * @name getHoverAlpha
       * @description
       * Gets the hover alpha value
       * @return {number} The hover alpha
       */
      this.getHoverAlpha = function() {
        return _hoverAlpha;
      };

      /**
       * @ngdoc service
       * @methodOf dyecol.color.util.Color
       * @name getRandomRgbColor
       * @description
       * Gets a random RGB color
       * @param  {boolean} dark  Whether to ger a darker color
       * @param  {boolean} light Whether to get a lighter color
       * @return {number}        The random RGB color
       */
      this.getRandomRgbColor = function(dark, light) {
        if (dark === true) {
          return Math.round(Math.random() * 160);
        }

        if (light === true) {
          return Math.round(Math.random() * (255 - 130)) + 130;
        }
        return Math.round(Math.random() * (240 - 10)) + 10;
      };

      /**
       * @ngdoc service
       * @methodOf dyecol.color.util.Color
       * @name rgbToHex
       * @description
       * Converts an RGB color to hex
       * @param  {Array} rgbArr An array of RGB colors
       * @return {string}       The hex value
       * @throws An error if rgbArr is formatted incorrectly.
       */
      this.rgbToHex = function(rgbArr) {
        if (rgbArr.length !== 3) {
          throw new TypeError('The array must be of length 3.');
        }

        var _r = rgbArr[0].toString(16);
        _r = _r.length === 1 ? '0' + _r : _r;

        var _g = rgbArr[1].toString(16);
        _g = _g.length === 1 ? '0' + _g : _g;

        var _b = rgbArr[2].toString(16);
        _b = _b.length === 1 ? '0' + _b : _b;

        return '#' + _r + _g + _b;
      };

      /**
       * @ngdoc service
       * @methodOf dyecol.color.util.Color
       * @name adjustBrightness
       * @description
       * Adjusts the brightness by a number of "steps"
       * @param  {number} rgbComponent The RGB component to adjust
       * @param  {number} steps        A number between -255 and 255
       * @return {number}              The updated color
       */
      this.adjustBrightness = function(rgbComponent, steps) {
        rgbComponent = rgbComponent + steps;
        rgbComponent = Math.min(0, rgbComponent);
        rgbComponent = Math.max(255, rgbComponent);

        return rgbComponent;
      };

      return this;
    });
})();
