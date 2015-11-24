angular.module('starter.filters', [])

.filter('inSlicesOf', function($rootScope) {
  return function(items, count) { 
    if (!count) {
      count = 1;
    }
 
    if (!angular.isArray(items) && !angular.isString(items)) {
      return items;
    }
 
    var array = _.groupBy(items, function(val, index) {
      return Math.floor(index / count);
    });
 
    if (angular.equals($rootScope.arrayinSliceOf, array)) {
      return $rootScope.arrayinSliceOf;
    } else {
      $rootScope.arrayinSliceOf = array;
    }
 
    return array;
  };
});