
angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', function($scope, mainCharacter, CharacterVersionFactory ) {

      $scope.firstName = mainCharacter;

      $scope.genChar = CharacterVersionFactory.getCharacter();

      $scope.searchText = '';
   }]);