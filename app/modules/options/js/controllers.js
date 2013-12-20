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
//

    var registerResource = resources.register;
    var loginResource = resources.login;
//    var test = resources.test;
//
//    var Login = $resource(android2chrome.backendUrl+'/test/:name', {name:'@name'});
    var user = {
        name: "luca",
        test: "testLuca"
    };

//    login.test({user: user}, function(data){
//        console.log(data);
//    });

//    test.test({}, function(data){
//        console.log(data);
//    })




//    resources.test();

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

    $scope.registerForm = {};
    $scope.showRegisterData = true;
    $scope.registerForm.email = "luca.prezzi90@gmail.com";
    $scope.currentAccount = "luca.prezzi90@gmail.com";

    $scope.clearForm = function (){
        $scope.registerForm = {};
        $scope.$apply();
        $scope.showRegisterData = false;
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
        registerResource.register({user: data}, function(result){
            console.log(result.echo);
        });

//            }
    };
//    console.log($scope)

};
android2chrome.controller('options', options);
