app.factory('homeFactory', function($http, $q) {
  
  const baseURL = 'http://localhost:1149/api/v1/';
  return {

   getbooks: function() {
      return $http({
        method: 'GET',
        url: baseURL + 'book',
      });
    }
  };
});
