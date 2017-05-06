angular.module('myApp')
.service('BookService', [function() {
  var library = [
      {
        title: 'Catch 22',
        author: 'guy',
        printed: 'last year'
      },
      {
        title: 'book2',
        author: 'author2',
        printed: 'today'
      },
      {
        title: 'book3',
        author: 'someone',
        printed: 'yesterday'
      }
      ];
  return {
    getBook: function(index) {
      return library[index];
    },
    getBooks: function() {
      return library;
    }
  };
}]);

