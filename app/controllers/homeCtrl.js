"use strict";

app.controller("HomeCtrl", function (
  $scope,
  $location,
  authFactory,
  homeFactory
) {

  $scope.chapters = [];
  $scope.chaptersLoaded = false;

  homeFactory.getVersions().then(function (data) {
    $scope.versions = data.data;
  });

  homeFactory.getBooks().then(function (data) {
    $scope.books = data.data;
  });

  $scope.getText = () => {
    homeFactory
      .getTexts($scope.selected_translation, $scope.selected_book.b)
      .then(function (data) {
        $scope.texts = data.data;
      });
  };

  $scope.getChapters = () => {
    homeFactory.getChapters($scope.selected_book.b).then(function (data) {
      $scope.chapters = data.data;
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
