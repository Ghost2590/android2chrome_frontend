'use strict';

//if (!android2chrome.controllers){
//    android2chrome.controllers = {};
//    alert(android2chrome.controllers);
//}
//android2chrome.controllers.optionsCtrl = function optionsCtrl(locale, $scope) {
//angular.module('android2chrome.controllers', []).
//    controller('options', function optionsCtrl(locale, $scope) {
function popup($scope, resources) {
    var self = this;
//

    var authenticationResource = resources.authentication;
    var linksResource = resources.links;

    $scope.tabs = [
        {
            title: "Account",
            active: true,
            disabled: false,
            content: "partials/login.html"
        },
        {
            title: "Cronologia",
            active: false,
            disabled: false,
            content: "partials/history.html"
        }
   ];

    $scope.loginForm = {};
    $scope.currentAccount = "";

    $scope.login = function () {

//        var user = {
//            email: $scope.registerForm.email,
//            password: $scope.registerForm.pw
//        };
//
//        authenticationResource.login({user: user}, function (data) {
//           console.log(data);
//            $scope.user = data;
//        });
        $scope.currentAccount = "test";
    };

    $scope.logout = function () {

        $scope.currentAccount = null;
//        var user = {
//            email: $scope.registerForm.email,
//            password: $scope.registerForm.pw
//        };

//        $confirm("", "", null, function (result){
//            console.log(result);
//        });
//
//        authenticationResource.logout({user: user}, function (data) {
//           console.log(data);
//            $scope.user = data;
//        });
    };

    $scope.get = function (){
        linksResource.get({op: "get", user: $scope.user}, function(links){
            console.log(links);
        })
    };

    $scope.open = function (link){
        //openLink
        linksResource.update({op: "update", user: $scope.user, link: link}, function(result){
            console.log(result);
        })
    };

};
android2chrome.controller('popup', popup);
