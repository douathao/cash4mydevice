/* global $ */
angular.module('cash4MyDevice.main')
  .provider('carriers', function () {
    var carriers = [
      { name: 'T-Mobile', uri: 't-mobile' },
      { name: 'AT&T', uri: 'at&t' },
      { name: 'Sprint', uri: 'sprint' },
      { name: 'Verizon', uri: 'verizon' },
      { name: 'Unlocked', uri: 'unlocked' }
    ];
    return {
      $get: function () {
        this.getCarriers = function () {
          return carriers;
        };

        return this;
      },
      getAllUri: function () {
        return carriers.map(function (device) {
          return device.uri;
        });
      }
    };
  })
  .provider('devices', function () {
    var devices = {
      samsung: [
        { name: 'Galaxy Note 4', uri: 'galaxy-note-4' },
        { name: 'Galaxy Note 3', uri: 'galaxy-note-3' },
        { name: 'Galaxy S 5', uri: 'galaxy-s5' },
        { name: 'Galaxy S 4', uri: 'galaxy-s4' },
        { name: 'Galaxy S 3', uri: 'galaxy-s3' }
      ],
      apple: [
        { name: 'iPhone 5S', uri: 'iphone-5s' },
        { name: 'iPhone 5C', uri: 'iphone-5c' },
        { name: 'iPhone 5', uri: 'iphone-5' },
        { name: 'iPhone 4S', uri: 'iphone-4s' },
        { name: 'iPhone 4', uri: 'iphone-4' }
      ]
    };
    return {
      $get: ['$stateParams', function ($stateParams) {
        this.model = null;
        this.getDevices = function (model) {
          var type = this.model = $stateParams.type || model;
          return devices[type];
        };

        return this;
      }],
      getAllUri: function () {
        return $.merge(devices.samsung.map(function (device) {
          return device.uri;
        }), devices.apple.map(function (device) {
          return device.uri;
        }));
      }
    };
  });