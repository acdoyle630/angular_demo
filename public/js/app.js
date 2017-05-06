/*jshint esversion: 6*/
angular.module('myApp',['ngRoute'])

.config(($routeProvider, $locationProvider)=>{
  $routeProvider
    .when('/', {
      templateUrl: 'public/views/default.html'
    })
    .when('/books', {
      templateUrl: 'public/views/books.html',
      controler: 'BooksController'
    })
    .otherwise('/404');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})

.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
  $rootScope.version = APP_VERSION;
}]);
