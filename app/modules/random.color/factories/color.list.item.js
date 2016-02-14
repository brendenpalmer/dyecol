/**
 * @author Brenden Palmer
 * @name dyecol.random.color.ColorListItem
 * @ngdoc service
 */

;
(function() {
  'use strict';

  angular.module('dyecol.random.color')
    .factory('ColorListItem', function(
      Color,
      RandomColorService
    ) {
      /**
       * @ngdoc method
       * @methodOf dyecol.random.color.ColorListItem
       * @description
       * The constructor for ColorListItem
       * @constructor
       */
      function ColorListItem() {
        this._r = Color.getRandomRgbColor();
        this._g = Color.getRandomRgbColor();
        this._b = Color.getRandomRgbColor();
        this.bg = 'rgb(' + this._r + ',' + this._g + ',' + this._b + ')';
        this.initBaseColors();
        this.initHoverColors();
      }

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color.ColorListItem
       * @name initBaseColors
       * @description
       * Initializes the base colors
       */
      ColorListItem.prototype.initBaseColors = function() {
        var _baseColorR = Math.floor(Color.getBaseAlpha() * this._r + (1 - Color.getBaseAlpha()) * RandomColorService.getBgColor()[0]);
        var _baseColorG = Math.floor(Color.getBaseAlpha() * this._g + (1 - Color.getBaseAlpha()) * RandomColorService.getBgColor()[1]);
        var _baseColorB = Math.floor(Color.getBaseAlpha() * this._b + (1 - Color.getBaseAlpha()) * RandomColorService.getBgColor()[2]);

        this.baseRgb = 'rgb(' + _baseColorR + ',' + _baseColorG + ',' + _baseColorB + ')';
        this.baseHex = Color.rgbToHex([_baseColorR, _baseColorG, _baseColorB]);
      };

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color.ColorListItem
       * @name initHoverColors
       * @description
       * Initializes the hover colors
       */
      ColorListItem.prototype.initHoverColors = function() {
        var _hoverColorR = Math.floor(Color.getHoverAlpha() * this._r + (1 - Color.getHoverAlpha()) * RandomColorService.getBgColor()[0]);
        var _hoverColorG = Math.floor(Color.getHoverAlpha() * this._g + (1 - Color.getHoverAlpha()) * RandomColorService.getBgColor()[1]);
        var _hoverColorB = Math.floor(Color.getHoverAlpha() * this._b + (1 - Color.getHoverAlpha()) * RandomColorService.getBgColor()[2]);

        this.hoverRgb = 'rgb(' + _hoverColorR + ',' + _hoverColorG + ',' + _hoverColorB + ')';
        this.hoverHex = Color.rgbToHex([_hoverColorR, _hoverColorG, _hoverColorB]);
      };

      return ColorListItem;
    });
})();
