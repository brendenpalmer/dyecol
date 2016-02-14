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
      $scope
    ) {
      this.bgColor = 'background:rgb(83,186,117);';
    });
})();
