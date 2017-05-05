angular.module('myApp',[])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
  $rootScope.version = APP_VERSION;
}]);
