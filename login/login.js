(function(){

'use strict';

angular.module('NETCARE.login', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])



.controller('LoginController', function($scope) {

})



})();