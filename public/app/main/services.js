/* global $ */
angular.module('cash4MyDevice.main')
  .value('conditions', [
    {
      condition: 'Mint',
      rule: ['No Scratches', 'No Blemishes Whatsoever', 'Flawless Condition']
    },
    {
      condition: 'Good',
      rule: ['Fully Functional', 'All buttons work', 'No chips or major scratches', 'Never exposed to liquid']
    },
    {
      condition: 'Cracked',
      rule: ['Fully Functional', 'Cracked front or back glass', 'LCD is NOT damaged', 'Never exposed to liquid']
    },
    {
      condition: 'Damaged',
      rule: ['Damaged LCD screen', 'Non—Working or missing buttons', 'Has engraving']
    },
    {
      condition: 'Broken',
      rule: ['Does NOT power on', 'Bent midframe', 'Software issues', 'Any password lock']
    }
  ])
  .provider('carriers', function () {
    var carriers = [
      {
        name: 'T-Mobile', uri: 't-mobile'
      },
      {
        name: 'AT&T', uri: 'at&t'
      },
      {
        name: 'Sprint', uri: 'sprint'
      },
      {
        name: 'Verizon', uri: 'verizon'
      },
      {
        name: 'Unlocked', uri: 'unlocked'
      }
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
        {
          name: 'Galaxy Note 4',
          uri: 'galaxy-note-4',
          capacity: [16, 32, 64]
        },
        {
          name: 'Galaxy Note 3',
          uri: 'galaxy-note-3',
          capacity: [16, 32, 64]
        },
        {
          name: 'Galaxy S 5',
          uri: 'galaxy-s5',
          capacity: [16, 32, 64]
        },
        {
          name: 'Galaxy S 4',
          uri: 'galaxy-s4',
          capacity: [16, 32, 64]
        },
        {
          name: 'Galaxy S 3',
          uri: 'galaxy-s3',
          capacity: [16, 32, 64]
        }
      ],
      apple: [
        {
          name: 'iPhone 5S',
          uri: 'iphone-5s',
          capacity: [16, 32, 64]
        },
        {
          name: 'iPhone 5C',
          uri: 'iphone-5c',
          capacity: [16, 32, 64]
        },
        {
          name: 'iPhone 5',
          uri: 'iphone-5',
          capacity: [16, 32, 64]
        },
        {
          name: 'iPhone 4S',
          uri: 'iphone-4s',
          capacity: [16, 32, 64]
        },
        {
          name: 'iPhone 4',
          uri: 'iphone-4',
          capacity: [16, 32, 64]
        }
      ]
    };
    return {
      $get: ['$stateParams', function ($stateParams) {
        this.getDevices = function (type) {
          return devices[type || $stateParams.type];
        };
        this.getAllCapacity = function (type, model) {
          var phone = devices[type || $stateParams.type].filter(function (phone) {
            return phone.uri === (model || $stateParams.model);
          });
          return phone[0].capacity;
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