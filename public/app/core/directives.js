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
  });