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

    var loginResource = resources.login;

    $scope.tabs = [
        {
            title: "Login",
            active: true,
            disabled: false,
            content: "partials/login.html"
        },
        {
            title: "Logout",
            active: false,
            disabled: true,
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

        var user = {
            email: $scope.registerForm.email,
            password: $scope.registerForm.pw
        };

        loginResource.login({user: user}, function (data) {
           console.log(data);
        });
    };

};
android2chrome.controller('popup', popup);
