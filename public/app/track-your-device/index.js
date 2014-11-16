angular.module('cash4MyDevice.trackYourDevice', [
  'ui.router'
])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      var templateDir = '/app/track-your-device/templates/';

      $stateProvider
        .state('trackYourDevice', {
          url: '/track-your-device',
          templateUrl: templateDir + 'main.html'
        });
    }]);