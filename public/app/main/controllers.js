angular.module('cash4MyDevice.main')
  .controller('SelectModelCtrl', [
    '$scope',
    'devices',
    function ($scope, devices) {
      $scope.devices = devices.getDevices($scope.$stateParams.type);
    }])
  .controller('SelectCarrierCtrl', [
    '$scope',
    'carriers',
    function ($scope, carriers) {
      $scope.carriers = carriers.getCarriers();
    }])
  .controller('SelectCapacityCtrl', [
    '$scope',
    'devices',
    function ($scope, devices) {
      $scope.capacity = devices.getAllCapacity();
    }])
  .controller('selectConditionCtrl', [
    '$scope',
    'devices',
    'conditions',
    function ($scope, devices, conditions) {
      $scope.conditions = conditions;
      $scope.capacity = devices.getAllCapacity();
    }]);