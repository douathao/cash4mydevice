angular.module('cash4MyDevice.main')
  .controller('SelectTypeCtrl', [
    '$scope',
    '$stateParams',
    function ($scope, $stateParams) {
      $scope.type = $stateParams.type;
    }]);