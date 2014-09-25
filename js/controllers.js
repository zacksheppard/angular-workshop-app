'use strict';

var controllers = angular.module('dabbble.controllers', []);

controllers.controller('AppCtrl', function ($scope){
  $scope.name = "Module";
});

controllers.controller('ShotsListCtrl', function($scope, $routeParams, $http) {

  var list = $routeParams.list;
  $scope.list;
  $http.jsonp('http://api.dribbble.com/shots/' + list + '?callback=JSON_CALLBACK').then(function(data){
      $scope.list = data.data;
      console.log(data);
  })
});

controllers.controller('ShotsCtrl', function($scope, $routeParams, $http){
  
  var id = $routeParams.id;
  
  $http.jsonp('http://api.dribbble.com/shots/' + id + '?callback=JSON_CALLBACK').then(function(data){
      $scope.shot = data.data;
      console.log(data);
  })
});