'use strict';

app.controller('RegisterCtrl', function($scope, $location, authFactory) {

  $scope.register = function() {
    console.log("scope.user", $scope.user);
    authFactory.register($scope.user)
      .then(function(response) {
        console.log("res", response);
        localStorage.setItem('username', $scope.user.username);
        localStorage.setItem('token', response.data.token);
        $location.url('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
});