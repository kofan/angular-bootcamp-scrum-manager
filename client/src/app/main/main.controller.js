(function() {
  'use strict';

  angular
    .module('scrumManager.main', [])
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $scope, bcPopup) {
    var vm = this;

    vm.title = 'Main Controller...!';
    vm.showPopup = showPopup;
    
    activate();

    ///////////////

    function activate() {

    }

    function showPopup() {
      bcPopup.open({
        templateUrl: 'app/main/main.popup.html',
        controller: 'MainPopupController as mainPopup',
        scope: $scope,
        resolve: {
          r1: function ($timeout) {
            return $timeout(function() {
              return 'I\'m resolved instance 1';
            }, 1000);
          },
          r2: function ($timeout) {
            return $timeout(function() {
              return 'I\'m resolved instance 2';
            }, 1000);
          }
        }
      }).then(function(result) {
        $log.log(result);
      }).catch(function(err) {
        $log.log(err);
      });
    }

  }
})();
