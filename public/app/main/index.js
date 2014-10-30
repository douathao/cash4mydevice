angular.module('cash4MyDevice.main', [
  'ui.router'
])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('selectType', {
          url: '/',
          templateUrl: '/app/main/templates/main.html'
        })
        .state('selectModel', {
          url: '/:type',
          controller: 'SelectTypeCtrl',
          template: '{{type}}'
        });
    }]);