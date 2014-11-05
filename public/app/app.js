angular.module('cash4MyDevice', [
  'cash4MyDevice.customerReview',
  'cash4MyDevice.faq',
  'cash4MyDevice.main',
  'cash4MyDevice.core',
  'ui.router'
])
  .config([
    '$locationProvider',
    '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {
      // use html5 pushState if available
      if (window.history && history.pushState) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        $locationProvider.hashPrefix('!');
      }

      $urlRouterProvider.otherwise('/device');

    }])
  .run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
      // global
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]);