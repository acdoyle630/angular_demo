
angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter) {
      $scope.firstName = mainCharacter;
    }]);