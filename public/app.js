'use strict';

// Declare app level module which depends on views, and components
angular.module('myNotes', [
  'ngRoute',
  'myNotes.list',
  'myNotes.add'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
