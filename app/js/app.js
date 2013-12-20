'use strict';

// Declare app level module which depends on filters, and services
var android2chrome = angular.module('android2chrome', [
    'android2chrome.services',
    'android2chrome.directives',
    'ng',
    'ngResource'
]);
android2chrome.backendUrl = "http://localhost/android2chrome";
//    .
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/options.html.old', {templateUrl: 'modules/options.html.old', controller: 'optionsCtrl'});
//  $routeProvider.when('/view2', {templateUrl: 'modules/partial2.html', controller: 'MyCtrl2'});
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);
