(function () {
  'use strict';

  angular
    .module('bcClock', [])
    .component('bcClock', {
      bindings: {
        size: '<',
        name: '@'
      },
      transclude: false,
      require: {},
      controller: BcClockController,
      template: [
        '<div class="BcClock BcClock--{{ $ctrl.size }}">',
          '<h4 class="BcClock--name">{{ $ctrl.name }}</h4>',
          '<span class="BcClock--time">{{ $ctrl.now | date:\'HH:mm:ss\' }}</span>',
        '</div>'
      ].join('')
    });

  /** @ngInject */
  function BcClockController($interval) {
    var $ctrl = this;
    var intervalPromise = null;

    $ctrl.now = new Date();
    $ctrl.$onInit = $onInit;
    $ctrl.$onDestroy = $onDestroy;

    activate();

    //////////

    function activate() {
      intervalPromise = $interval(function() {
        $ctrl.now = new Date();
      }, 1000);
    }

    function $onInit() {

    }

    function $onDestroy() {
      $interval.cancel(intervalPromise);
    }
  }
})();

