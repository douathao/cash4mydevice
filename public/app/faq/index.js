angular.module('cash4MyDevice.faq', [
  'ui.router'
])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      var templateDir = '/app/faq/templates/';

      $stateProvider
        .state('faq', {
          url: '/faq',
          templateUrl: templateDir + 'main.html'
        });
    }]);