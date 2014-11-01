angular.module('cash4MyDevice.main')
  .controller('SelectTypeCtrl', [
    '$scope',
    '$stateParams',
    'devices',
    function ($scope, $stateParams, devices) {
      $scope.devices = devices.getDevices($stateParams.type);
      $scope.type = $stateParams.type;
    }]);