(function() {
  'use strict';

  angular
    .module('scrumManager')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    var off = $rootScope.$on('$stateChangeError', function (e, toState, toStateParams, fromState, fromStateParams, error) {
      $log.error(error);
    });

    $rootScope.$on('$destroy', function () {
      off();
    });

    $log.debug('runBlock end');
  }

})();
