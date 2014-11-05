angular.module('cash4MyDevice.customerReview', [
  'ui.router'
])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      var templateDir = '/app/customer-review/templates/';

      $stateProvider
        .state('customerReview', {
          url: '/customer-review',
          templateUrl: templateDir + 'main.html',
          controller: 'CustomerReviewCtrl'
        });
    }]);