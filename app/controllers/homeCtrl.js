"use strict";

app.controller("HomeCtrl", function(
  $scope,
  $location,
  authFactory,
  homeFactory
) {
  $(document).ready(function() {
    $(`select`).material_select();
  });

  $scope.chaptersLoaded = false;

  homeFactory.getVersions().then(function(data) {
    $scope.versions = data.data;
  });

  homeFactory.getBooks().then(function(data) {
    $scope.books = data.data;
  });
 
  $scope.getChapters = () => {
  homeFactory.getChapters($scope.selected_book.b).then(function(data) {
    console.log("data", data.data);
    $scope.chapters = [{c:1},{c:2}];

    $scope.chaptersLoaded = true;
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
