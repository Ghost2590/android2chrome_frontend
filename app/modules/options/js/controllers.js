'use strict';

//if (!android2chrome.controllers){
//    android2chrome.controllers = {};
//    alert(android2chrome.controllers);
//}
//android2chrome.controllers.optionsCtrl = function optionsCtrl(locale, $scope) {
//angular.module('android2chrome.controllers', []).
//    controller('options', function optionsCtrl(locale, $scope) {
function options($scope, resources) {
    var self = this;

    var authenticationResource = resources.authentication;

    $scope.tabs = [
        {
            title: "Account",
            active: true,
            disabled: false,
            content: "partials/account.html"
        },
        {
            title: "Generali",
            active: false,
            disabled: false,
            content: "partials/generali.html"
        },
        {
            title: "Notifiche",
            active: false,
            disabled: false,
            content: "partials/notifiche.html"
        }
   ];

    $scope.login = function () {

        var user = {
            email: $scope.registerForm.email,
            password: $scope.registerForm.pw
        };

        authenticationResource.login({op: "login", user: user}, function (data) {
            console.log("ok: ", data);
            $scope.currentAccount = data;

            $scope.currentAccount = {
                email: "luca.prezzi90@gmail.com"
            };
        }, function (error) {
            console.log("error: ", error);
            $scope.currentAccount = null;

            $scope.currentAccount = {
                email: "luca.prezzi90@gmail.com"
            };
        });
    };

    $scope.logout = function () {

        var user = {
            email: $scope.registerForm.email,
            password: $scope.registerForm.pw
        };

        authenticationResource.logout({op: "logout", user: user}, function (data) {
            console.log("ok: ", data);
            $scope.currentAccount = null;
        }, function (error) {
            console.log("error: ", error);
            $scope.currentAccount = null;
        });
    };

    $scope.registerForm = {};
    $scope.showRegisterData = true;
    $scope.registerForm.email = "luca.prezzi90@gmail.com";
    $scope.currentAccount = {
        email: "luca.prezzi90@gmail.com"
    };

    $scope.clearForm = function (){
        $scope.registerForm = {};
        $scope.registerDataToggle();
    };

    $scope.deleteAccount = function (){
//
//        var dialog = $dialog.dialog({
//            templateUrl: '../partials/modalDelete.html',
//            controller: DialogCtrl,
//            resolve: {
//                item: function () {
//                    return {
//                        user: $scope.user,
//                        auth: authenticationResource
//                    };
//                }
//            }
//        }).open();
//
//        dialog.then(function (results) {
//            if (!results) {
//                return;
//            }
//
//            if (results.user) {
//                console.log("OK", results);
//                $scope.user = results.user;
//
//                $scope.registerForm = {};
//                $scope.registerDataToggle();
//            } else {
//                console.log("NO SELECTION");
//            }
//        });
//
//        authenticationResource.delete({op: "delete", user: data}, function(result){
//            console.log(result);
//        });
    };

    $scope.registerDataToggle = function(){
        $scope.showRegisterData = !$scope.showRegisterData;
    };

//    registerForm._valid = false;

    $scope.submit = function(){

        if (!$scope.registerForm.email || !$scope.registerForm.pw ||!$scope.registerForm.pw2) {
            $scope.registerForm.$trySubmit = true;
            return;
        }
//            if (registerForm._valid){
        var data = {
            email: $scope.registerForm.email,
            password: $scope.registerForm.pw,
            password2: $scope.registerForm.pw2
        };
//            console.log(data);
        authenticationResource.register({op: "register", user: data}, function(result){
            console.log(result.echo);
        });

//            }
    };
//    console.log($scope)

};


var DialogCtrl = function ($scope, item, dialog) {


    $scope.controller = item.controller;
    var self = this;

    $scope.user = item.user;

    $scope.cancella = function () {

        item.auth.delete({op: "delete", user: $scope.user}, function (data) {

                dialog.close({});
        });
    };

    $scope.close = function () {
        var result = {
            user: $scope.user
        };

        dialog.close(result);
    };
};
android2chrome.controller('options', options);
