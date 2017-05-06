
angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', function($scope, mainCharacter, CharacterVersionFactory, BookService) {
      $scope.firstName = mainCharacter;
      $scope.genChar = CharacterVersionFactory.getCharacter();
      $scope.books = BookService.getBooks();
   }]);