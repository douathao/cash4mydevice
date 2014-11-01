angular.module('cash4MyDevice.core')
/**
 * Capitalize Filter:
 * Use to capitalize the first letter of a string
 */
.filter('capitalize', function() {
  return function(input) {
    if (input != null) {
      input = input.toLowerCase();
    }

    return input.substring(0, 1).toUpperCase() + input.substring(1);
  };
});