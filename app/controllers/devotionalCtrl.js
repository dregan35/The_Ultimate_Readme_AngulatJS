"use strict";

app.controller("DevotionalCtrl", function(
  $scope,
  $location,
  authFactory,
  homeFactory,
  devotionalFactory,
  $window
) {
  $scope.postDevotionals = () => {
    $window.location.reload();
    devotionalFactory
      .postDevotionals($scope.username, $scope.devotional)
      .then(function(data) {
        $scope.username = username;
      });
  };

  devotionalFactory
    .getDevotionals($scope.username, $scope.journal)
    .then(function(data) {
      console.log("datadev", data.data);
      $scope.devCollection = data.data;
    });

  $scope.destroyDevotionals = function($event) {
    $window.location.reload();
    let id = $event.currentTarget.attributes.id.nodeValue;
    devotionalFactory
      .destroyDevotionals($scope.username, id)
      .then(function(data) {});
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
