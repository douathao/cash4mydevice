angular.module('cash4MyDevice.main', [
  'ui.router'
])
  .config([
    '$stateProvider',
    'devicesProvider',
    'carriersProvider',
    function ($stateProvider, devicesProvider, carriersProvider) {
      var templateDir = '/app/main/templates/',
          allDevicesUri = devicesProvider.getAllUri().join('|'),
          allCarriersUri = carriersProvider.getAllUri().join('|');

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
          url: '/{type:(?:apple|samsung)}/{model:(?:' + allDevicesUri + ')}',
          templateUrl: templateDir + 'selectCarrier.html',
          controller: 'SelectCarrierCtrl'
        })
        .state('selectCapacity', {
          parent: 'main',
          url: '/{type:(?:apple|samsung)}/{model:(?:' + allDevicesUri + ')}/{carrier:(?:' + allCarriersUri + ')}',
          templateUrl: templateDir + 'selectCapacity.html',
          controller: 'SelectCapacityCtrl'
        });
    }]);