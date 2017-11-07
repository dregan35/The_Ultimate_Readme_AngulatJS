app.factory('homeFactory', function ($http, $q) {

  const baseURL = 'http://localhost:1147/api/v1/';
  return {

   getBooks: function() {
      return $http({
        method: 'GET',
        url: baseURL + 'book',
      
      });
    },

    getTexts: function(version, book) {
      return $http({
        method: 'GET',
        url: baseURL + 'text?version='+ version +'&book='+book,
      });
    },

getChapters: function(book) {
  console.log("bookfromgetchap", book);
  return $http({
    method: 'GET',
    url: baseURL + 'chapter/'+ book,
    

 });
  
  },


getVersions: function() {
  return $http({
    method: 'GET',
    url: baseURL + 'version',

 });
  
  }
}
});


