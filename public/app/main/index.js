angular.module('cash4MyDevice.main', [
  'ui.router'
])
  .config([
    '$stateProvider',
    'devicesProvider',
    'carriersProvider',
    function ($stateProvider, devicesProvider, carriersProvider) {
      var templateDir = '/app/main/templates/',
          allDevices = devicesProvider.getAllDevice().join('|'),
          allCarriers = carriersProvider.getAllCarrier().join('|');

      $stateProvider
        .state('main', {
          url: '/device',
          abstract: true,
          template: '<div ui-view></div>'
        })
        .state('selectType', {
          url: '',
          parent: 'main',
          templateUrl: templateDir + 'main.html'
        })
        .state('selectModel', {
          parent: 'main',
          url: '/{type:(?:apple|samsung)}',
          templateUrl: templateDir + 'selectModel.html',
          controller: 'SelectModelCtrl'
        })
        .state('selectCarrier', {
          parent: 'main',
          url: '/{type:(?:apple|samsung)}/{model:(?:' + allDevices + ')}',
          templateUrl: templateDir + 'selectCarrier.html',
          controller: 'SelectCarrierCtrl'
        })
        .state('selectPhone', {
          parent: 'main',
          url: '/{type:(?:apple|samsung)}/{model:(?:' + allDevices + ')}/{carrier:(?:' + allCarriers + ')}',
          templateUrl: templateDir + 'selectPhone.html',
          controller: 'SelectPhoneCtrl'
        });
    }]);