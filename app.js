'use strict';
 
// Declare app level module which depends on views, and components


var app = angular.module('NETCARE', [
  'ngRoute',
  'NETCARE.login',
  'NETCARE.registration',
  'NETCARE.dashboard',
  
  ]);

app.config( function($routeProvider,$httpProvider) {

 $routeProvider.otherwise({redirectTo: '/'});
 // $httpProvider.interceptors.push('myInterceptor');

});
app.controller('MainCtrl', function($http)
{

});

