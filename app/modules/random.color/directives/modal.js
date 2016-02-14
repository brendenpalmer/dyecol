/**
 * @author Brenden Palmer
 * @name dyecol.ui.modal:modal
 * @ngdoc directive
 */

;(function () {
    'use strict';

    angular.module('dyecol.random.color')
        .directive('modal', function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'modules/random.color/directives/views/modal.html',
                scope: {},
                bindToController: {
                    color: '='
                },
                controllerAs: 'modal',
                controller: function ($scope) {
                    /**
                     * @name $scope.closeModal
                     * @description
                     * Closes the modal
                     */
                    this.closeModal = function () {
                        this.color = null;
                        $scope.$applyAsync();
                    };
                }
            };
        });
})();
