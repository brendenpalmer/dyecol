/**
 * @author Brenden Palmer
 * @name dyecol.random.color:RandomColorController
 * @ngdoc controller
 */

;
(function() {
  'use strict';

  angular.module('dyecol.random.color')
    .controller('RandomColorController', function(
      $scope,
      ColorListItem,
      RandomColorService
    ) {
      // update the bg color
      RandomColorService.updateBgColor();

      /**
       * @ngdoc property
       * @propertyOf dyecol.random.color:RandomColorController
       * @name bgColor
       * @type {string}
       */
      this.bgColor = 'rgb(' +
        RandomColorService.getBgColor()[0] + ',' +
        RandomColorService.getBgColor()[1] + ',' +
        RandomColorService.getBgColor()[2] + ')';

      /**
       * @ngdoc property
       * @propertyOf dyecol.random.color:RandomColorController
       * @name colors
       * @type {Array}
       */
      this.colors = [];

      /**
       * @ngdoc property
       * @propertyOf dyecol.random.color:RandomColorController
       * @name active
       * @type {Object}
       */
      this.active = {
        color: null
      };

      // initialize colors
      for (var i = 0; i < 300; i++) {
        this.colors.push(new ColorListItem());
      }
    });
})();
