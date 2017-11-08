app.factory("devotionalFactory", function($http, $q) {
  const baseURL = "http://localhost:1147/api/v1/";
  return {
    postDevotionals: function(devotional, username) {
      return $http({
        method: "POST",
        url: baseURL + "devotional",
        data: {devotional, username}
      });
    }
  };
});
