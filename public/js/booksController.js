angular.module('myApp').controller('BooksController', ['$scope','BookService',function($scope, BookService) {
  $scope.BookService= BookService;


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
  }
]);