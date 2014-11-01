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
  .controller('SelectPhoneCtrl', [

    function () {

    }]);