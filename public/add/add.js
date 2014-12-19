'use strict';

angular.module('myNotes.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', [function() {

}]);