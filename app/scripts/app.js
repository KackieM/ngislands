'use strict';

/**
 * @ngdoc overview
 * @name ngislandsApp
 * @description
 * # ngislandsApp
 *
 * Main module of the application.
 */
angular
  .module('ngislandsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/scbarrierislands', {
        templateUrl: 'views/scbarrierislands.html',
        controller: 'MainCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'MainCtrl'
      })
      .when('/edisto', {
        templateUrl: 'views/edisto.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
