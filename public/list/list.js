'use strict';

angular.module('myNotes.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/notes').success(function(data){
    $scope.notes = data;
  }).error(function(err){
    console.log(err);
  });
  $scope.removeNote = function(note){
    $http.delete('/api/notes/' + note._id).success(function(data){
      $scope.notes = data;
    }).error(function(err){
      console.log(err);
    })
  }
}]);
