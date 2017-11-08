app.factory("devotionalFactory", function($http, $q) {
  const baseURL = "http://localhost:1147/api/v1/";
  return {
    postDevotionals: function(username, devotional) {
      console.log("userand", username);
      return $http({
        method: "POST",
        url: baseURL + "devotional",
        data: {username, devotional}
      });
    }
  };
});
