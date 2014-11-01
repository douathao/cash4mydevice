angular.module('cash4MyDevice', [
  'cash4MyDevice.main',
  'cash4MyDevice.core',
  'ui.router'
])
  .config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {
      // use html5 pushState if available
      if (window.history && history.pushState) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
      }
      
      $urlRouterProvider.otherwise('/device');

      $stateProvider
        .state('contacts', {
          url: '/contacts',
          template: '<h1>Hello</h1>'
        });
    }]);