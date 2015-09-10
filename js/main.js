/**
 * Main AngularJS Web Application
 */
var app = angular.module('jfastApp', ['ngRoute', 'ngDialog', 'ngSanitize']);

app.config(['$routeProvider','$locationProvider','ngDialogProvider' ,function ($routeProvider, $locationProvider, ngDialogProvider) {

$routeProvider
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
  .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

  app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("OPS! HI CHECKING MY CODE?");
 });


 
       