app.factory("devotionalFactory", function ($http, $q) {
  const baseURL = "http://localhost:1147/api/v1/";
  return {
    postDevotionals: function (username, devotional) {
      return $http({
        method: "POST",
        url: baseURL + "devotional",
        data: {
          username,
          devotional
        }
      });
    },

    getDevotionals: function (username, journal) {
      return $http({
        method: 'GET',
        url: baseURL + 'devotional',
        data: {
          username,
          journal
        }

      });
    },

    getDevotionals: function (username, journal) {
      return $http({
        method: 'GET',
        url: baseURL + 'devotional',
        data: {
          username,
          journal
        }

      });
    },

    destroyDevotionals: function (username, id) {
      return $http({
        method: 'DELETE',
        url: baseURL + 'devotional/' + id,
        data: {
          username
        }

      });
    }
  }
});
