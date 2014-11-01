angular.module('cash4MyDevice.core')
  .directive('hoverImage', function () {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        var originalState = $attrs.ngSrc,
            hoverState = originalState.split('.').join('-hover.');

        $element.on('mouseenter', function () {
          $element.attr('src', hoverState);
        })
          .on('mouseleave', function () {
            $element.attr('src', originalState);
          });
      }
    };
  })
  .directive('breadcrumbs', ['$location', '$state', function($location, $state) {
    return {
      restrict: 'E',
      replace: true,
      controller: ['$scope', '$filter', function($scope, $filter) {
        var url;
        $scope.invalidCrumb = ['Contacts', 'Guidelines', 'Quote', 'Reports'];
        renderBreadCrumb();
        $scope.$on('$stateChangeSuccess', function() {
          renderBreadCrumb();
        });
        function renderBreadCrumb() {
          url = '';
          $scope.crumbs = [];
          if ($state.current.data && $state.current.data.breadcrum) {
            $scope.crumbs = $state.current.data.breadcrum;
          } else {
            angular.forEach($location.path().split('/'), function(value) {
              if (value) {
                url += '/' + value;
                $scope.crumbs.push(
                  { name: $filter('capitalize')(value.replace(/\-/g, ' ')), url: url }
                );
              }
            });
          }
        }
      }],
      templateUrl: '/app/core/templates/breadcrumb.html'
    };
  }]);