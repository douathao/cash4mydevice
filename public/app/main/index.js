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
        })
        .state('selectCondition', {
          parent: 'main',
          url:
            '/{type:(?:apple|samsung)}' +
            '/{model:(?:' + allDevicesUri + ')}' +
            '/{carrier:(?:' + allCarriersUri + ')}' +
              // TODO: no hard code?
            '/{capacity:(?:16|32|64)}-gb',
          templateUrl: templateDir + 'selectCondition.html',
          controller: 'selectConditionCtrl'
        })
        .state('reviewPhone', {
          parent: 'main',
          url:
            '/{type:(?:apple|samsung)}' +
            '/{model:(?:' + allDevicesUri + ')}' +
            '/{carrier:(?:' + allCarriersUri + ')}' +
            '/{capacity:(?:16|32|64)}-gb' +
              // TODO: no hard code?
            '/{condition:(?:mint|good|cracked|damaged|broken)}',
          templateUrl: templateDir + 'reviewPhone.html',
          controller: 'ReviewPhoneCtrl'
        })
        .state('checkout', {
          parent: 'main',
          url: '/checkout',
          templateUrl: templateDir + 'checkout.html',
          controller: 'CheckoutCtrl'
        });
    }]);