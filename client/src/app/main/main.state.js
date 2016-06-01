(function() {
  'use strict';

  angular
    .module('scrumManager.main')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          user: function ($http, $q) {
            return $q.resolve({ id: null });
            // return $http.get('/api/current-user');
          }
        }
      });
  }

})();
