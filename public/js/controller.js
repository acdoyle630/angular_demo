
angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', function($scope, mainCharacter, CharacterVersionFactory, BookService) {

      $scope.firstName = mainCharacter;

      $scope.genChar = CharacterVersionFactory.getCharacter();

      $scope.books = BookService.getBooks();

      $scope.newBook = {
        title: '',
        author: '',
        printed: ''
      };

      $scope.addBook = function(){
        var brandNewBook = {
          title: $scope.newBook.title,
          author: $scope.newBook.author,
          printed: $scope.newBook.printed
        };

        BookService.addBook(brandNewBook);
        $scope.newBook.title = '';
        $scope.newBook.author = '';
        $scope.newBook.printed = '';

      };
   }]);