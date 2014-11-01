angular.module('cash4MyDevice.main', [
  'ui.router'
])
  .config([
    '$stateProvider',
    'devicesProvider',
    function ($stateProvider, devicesProvider) {
      var templateDir = '/app/main/templates/',
          allDevices = devicesProvider.getAllDevice();

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
          controller: 'SelectTypeCtrl'
        })
        .state('selectCarrier', {
          parent: 'main',
          url: '/{type:(?:apple|samsung)}/{model:(?:' + allDevices.join('|') + ')}',
          templateUrl: templateDir + 'selectCarrier.html'
        });
    }]);