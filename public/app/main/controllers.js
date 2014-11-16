/* global $ */
angular.module('cash4MyDevice.main')
  .controller('SelectModelCtrl', [
    '$scope',
    'devices',
    function ($scope, devices) {
      $scope.devices = devices.getDevices($scope.$stateParams.type);
    }
  ])
  .controller('SelectCarrierCtrl', [
    '$scope',
    'carriers',
    function ($scope, carriers) {
      $scope.carriers = carriers.getCarriers();
    }
  ])
  .controller('SelectCapacityCtrl', [
    '$scope',
    'devices',
    function ($scope, devices) {
      $scope.capacity = devices.getAllCapacity();
    }
  ])
  .controller('selectConditionCtrl', [
    '$scope',
    'devices',
    'conditions',
    function ($scope, devices, conditions) {
      $scope.conditions = conditions;
      $scope.capacity = devices.getAllCapacity();
    }
  ])
  .controller('ReviewPhoneCtrl', [
    '$scope',
    'cart',
    'devices',
    function ($scope, cart, devices) {
      $scope.device = devices.getDevice();

      $('#highchart').highcharts({
        title: {
          text: 'Price Data',
          x: -20 //center
        },
        xAxis: {
          categories: ['May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
        },
        yAxis: {
          title: {
            text: 'Price'
          },
          labels: {
            formatter: function () {
              return '$' + this.value;
            }
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valuePrefix: '$'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: 'Device',
          data: [489, 466, 470, 448, 406, 381, 391]
        }]
      });

      $scope.addToCart = function () {
        cart.add($scope.device);
        $scope.$state.go('checkout');
      };
    }
  ])
  .controller('CheckoutCtrl', [
    '$scope',
    'cart',
    function ($scope, cart) {
      $scope.devices = cart.fetch();
      $scope.totalPrice = cart.calculateTotalPrice();
    }
  ]);