angular.module('cash4MyDevice', [
  'cash4MyDevice.trackYourDevice',
  'cash4MyDevice.howItWorks',
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
    '$window',
    function ($rootScope, $state, $stateParams, $window) {
      // global
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      // scroll back to the top when state change
      $rootScope.$on('$stateChangeSuccess',
        function() {
          $window.scrollTo(0, 0);
        });
    }]);