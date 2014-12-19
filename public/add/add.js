'use strict';

angular.module('myNotes.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.createNote = function(){
    $http.post('/api/notes', $scope.formData)
          .success(function(data){
            $scope.formData = {};
            $location.path( "/list" );
          }).error(function(err){
            console.log(err);
          })
  };
}]);
