angular.module('myApp')
.filter('NoSoupForYou', function() {
  return function(input){
    if(!input){
      return 'No soup for you?';
    }
    else {
    return input + ' No soup for you!';
    }
  };
})
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
});
