angular.module('cash4MyDevice.customerReview')
  .directive('customerReview', function () {
    return {
      restrict: 'E',

      templateUrl: '/app/customer-review/templates/review.html'
    };
  })
  .directive('starRate', function () {
    return {
      restrict: 'E',
      /* jshint unused:true */
      scope: {
        star: '='
      },
      replace: true,
      template: '<div class="rate"></div>',
      link: function (scope, element) {
        var count = 0;
        while (count < scope.star) {
          element.append(angular.element('<i class="fa fa-star"></i>'));
          count++;
        }
      }
    };
  });