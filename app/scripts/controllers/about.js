'use strict';

/**
 * @ngdoc function
 * @name ngislandsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngislandsApp
 */
angular.module('ngislandsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
