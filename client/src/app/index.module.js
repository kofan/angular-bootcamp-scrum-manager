(function() {
  'use strict';

  angular
    .module('scrumManager', [
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'ngResource',

      'ui.router',
      'ui.bootstrap',
      'toastr',

      'bcPopup',
      'bcGithub',
      'bcClickOutside',
      'bcPersons',
      'bcClock',

      'scrumManager.main'
    ]);

})();
