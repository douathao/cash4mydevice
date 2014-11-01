angular.module('cash4MyDevice.main')
  .controller('SelectTypeCtrl', [
    '$scope',
    '$stateParams',
    'devices',
    function ($scope, $stateParams, devices) {
      /********************************************************/
      console.group('%cdevices :', 'color:red;font:strait');
      console.log(devices);
      console.groupEnd();
      /********************************************************/
      $scope.devices = devices.getDevices($stateParams.type);
      console.log('*****************  devices  **************************');
      console.log(devices);
      console.log('**********************************************');
      $scope.type = $stateParams.type;
    }]);