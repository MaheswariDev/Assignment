(function(){

'use strict';

angular.module('NETCARE.dashboard', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardController'
  });
}])



.controller('DashboardController', function($scope) {

})



})();