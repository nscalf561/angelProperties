var app = angular.module("AngelProperties", ['ngRoute']);

app.config(($routeProvider) => {

  $routeProvider

    .when('/', {
      templateUrl : 'templates/home.html',
      // controller : 'mainController'
    })

    .when('/login', {
      templateUrl : 'templates/login.html',
      controller : 'loginController'
    });

});

app.controller('loginController', ($scope) => {
  $scope.loginForm = true;
  $scope.switchForm = () => {
    $scope.loginForm = $scope.loginForm ? false : true;
  };
});
