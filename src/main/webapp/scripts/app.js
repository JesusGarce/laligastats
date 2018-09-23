'use strict';

/**
 * @ngdoc overview
 * @name LaLigaStatsApp
 * @description
 * # LaLigaStatsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('LaLigaStatsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'route-segment',
    'view-segment'
  ]);

app.config(['$locationProvider', '$routeSegmentProvider', '$routeProvider', function ($locationProvider, $routeSegmentProvider, $routeProvider) {

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: true,
    rewriteLinks: true
  }).hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/main'});

  $routeSegmentProvider
    .when('/main', 'main')

    .segment('main', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl',
      controllerAs: 'main'
    });

}]);
