angular.module('cash4MyDevice.customerReview')
  .controller('CustomerReviewCtrl', [
    '$scope',
    'customerReviews',
    function ($scope, customerReviews) {
      $scope.reviews = customerReviews.getReviews();
    }]);