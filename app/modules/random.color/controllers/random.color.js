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
      var _ctrl = this;

      // initialize
      _init();

      /**
       * @ngdoc property
       * @propertyOf dyecol.random.color:RandomColorController
       * @name active
       * @type {Object}
       */
      this.active = {
        color: null,
        show: false
      };

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color:RandomColorController
       * @name _init
       * @private
       */
      function _init() {
        // reset colors
        _ctrl.colors = [];

        // update the bg color
        RandomColorService.updateBgColor();

        // set the bg color
        _ctrl.bgColor = 'rgb(' +
          RandomColorService.getBgColor()[0] + ',' +
          RandomColorService.getBgColor()[1] + ',' +
          RandomColorService.getBgColor()[2] + ')';

        // initialize colors
        for (var i = 0; i < 300; i++) {
          _ctrl.colors.push(new ColorListItem());
        }
      }

      /**
       * @ngdoc method
       * @methodOf dyecol.random.color:RandomColorController
       * @name _keydown
       * @description
       * Called on keydown
       * @private
       */
      function _keydown(e) {
        if (e.keyCode === 32) { //space key
          e.preventDefault();
          _init();
          $scope.$applyAsync();
        } else if (_ctrl.active.show === true) {
          var _index = _ctrl.colors.indexOf(_ctrl.active.color);
          if (e.keyCode === 39) { // next
            if (_index < _ctrl.colors.length) {
              _ctrl.active.color = _ctrl.colors[_index + 1];
            }
          } else if (e.keyCode === 37) { // prev
            if (_index > 0) {
              _ctrl.active.color = _ctrl.colors[_index - 1];
            }
          } else if (e.keyCode === 27) { //esc key
            _ctrl.active.show = false;
          }
          $scope.$applyAsync();
        }
      }

      // add the event listener
      document.addEventListener('keydown', _keydown);

      // remove the event listener on $destroy
      $scope.$on('$destroy', function() {
        document.removeEventListener('keydown', _keydown);
      });
    });
})();
