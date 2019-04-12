(function(){

'use strict';

angular.module('NETCARE.registration', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'registration/registration.html',
    controller: 'RegistrationController'
  });
}])



.controller('RegistrationController', function($scope) {

})



})();