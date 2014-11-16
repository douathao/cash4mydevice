angular.module('cash4MyDevice.howItWorks', [
  'ui.router'
])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      var templateDir = '/app/how-it-works/templates/';

      $stateProvider
        .state('howItWorks', {
          url: '/how-it-works',
          templateUrl: templateDir + 'main.html'
        });
    }]);