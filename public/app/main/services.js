/* global $ */
angular.module('cash4MyDevice.main')
  .provider('devices', function () {
    var samsung = [
          { name: 'Galaxy Note 4', image: 'galaxy-note-4.png', uri: 'galaxy-note-4' },
          { name: 'Galaxy Note 3', image: 'galaxy-note-3.png', uri: 'galaxy-note-3' },
          { name: 'Galaxy S 5', image: 'galaxy-s5.png', uri: 'galaxy-s5' },
          { name: 'Galaxy S 4', image: 'galaxy-s4.png', uri: 'galaxy-s4' },
          { name: 'Galaxy S 3', image: 'galaxy-s3.png', uri: 'galaxy-s3' },
        ],
        apple = [
          { name: 'iPhone 5S', uri: 'iphone-5s' },
          { name: 'iPhone 5C', uri: 'iphone-5c' },
          { name: 'iPhone 5', uri: 'iphone-5'  },
          { name: 'iPhone 4S', uri: 'iphone-4'  },
          { name: 'iPhone 4', uri: 'iphone-4' }
        ];
    return {
      $get: function () {
        this.model = null;
        this.getDevices = function (model) {
          this.model = model;
          if (model === 'apple') {
            return apple;
          }
          return samsung;
        };

        return this;
      },
      getAllDevice: function () {
        return $.unique($.merge(samsung.map(function (device) {
          return device.uri;
        }), apple.map(function (device) {
          return device.uri;
        })));
      }
    };
  });