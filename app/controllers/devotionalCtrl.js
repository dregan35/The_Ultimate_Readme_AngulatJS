"use strict";

app.controller("DevotionalCtrl", function(
  $scope,
  $location,
  authFactory,
  homeFactory,
  devotionalFactory
) {
  $scope.postDevotionals = () => {
    devotionalFactory
      .postDevotionals($scope.username, $scope.devotional)
      .then(function(data) {
        $scope.username = username;
      });
  };

  $scope.show = "false";

  $scope.authStatus = () => {
    $scope.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", false);
    const token = localStorage.token;
    if (token) {
      authFactory
        .ensureAuthenticated(token)
        .then(user => {
          if (user.data.status === "success") $scope.isLoggedIn = true;
          $scope.username = localStorage.username;
          localStorage.setItem("isLoggedIn", true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  $scope.logout = () => {
    authFactory.logout();
    $location.url("/");
  };

  $scope.authStatus();
});
