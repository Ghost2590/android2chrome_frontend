'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('android2chrome.services', ["ng", "ngResource"])
    .factory('$error', function ($rootScope, $dialog) {
        return function (msg, title, btns, callback) {

            msg = msg || "Si è verificato un errore";//locale('error.alert.content');
            title = title || "Attenzione";//locale('error.alert.title');
            btns = btns || [
                {
                    result: 'ok',
                    label: "OK",//locale('error.alert.ok.btn'),
                    cssClass: 'btn-primary'
                }
            ];

            $dialog.messageBox(title, msg, btns).open().then(function (result) {
                if (callback) {
                    callback(result);
                }
            });
        };
    })
    .factory('$confirm', function ($rootScope, $dialog) {
        return function (msg, title, btns, callbacks) {
            msg = msg || "Confermare la richiesta";//locale('confirm.alert.content');
            title = title || "Attenzione";//locale('confirm.alert.title');

            btns = btns || [
                {
                    result: 'cancel',
                    label: "Annulla",//locale('confirm.alert.cancel.btn'),
                    cssClass: 'btn-primary'
                },
                {
                    result: 'ok',
                    label: "Ok",//locale('confirm.alert.ok.btn'),
                    cssClass: 'btn-primary'
                }
            ];

            $dialog.messageBox(title, msg, btns).open().then(function (result) {
                if (callbacks) {
                    if (angular.isFunction(callbacks)) {
                        return callbacks(result);
                    }

                    if (angular.isObject(callbacks) && callbacks[result] && angular.isFunction(callbacks[result])) {
                        callbacks[result]();
                    }
                }
            });

        };
    })
    .factory('resources', function($resource){
        var addResource = function(name, url, params, actions){
            resources[name] = $resource(android2chrome.backendUrl + url, params, actions);
        };

        var resources = {};

        addResource('authentication', '/auth/:op/:user.json',
            {
                op: "@op",
                user: "@user"
            },
            {
                register: {method:"PUT"},
                delete: {method:"DELETE"},
                login: {method:"UPDATE"},
                logout: {method:"UPDATE"}
            }
        );

        addResource('links', '/links/:op/:user/:link.json',
            {
                op: "@op",
                user: "@user",
                link: "@link"
            },
            {
                insert: {method:"PUT"},
                get: {method:"GET"},
                update: {method:"UPDATE"},
                delete: {method:"DELETE"},
                deleteAll: {method:"UPDATE"}
            }
        );



//        console.log(resources);



        return resources;
    })
;
//android2chrome
//    .service('Login', function($resource){
//        return $resource(
//            android2chrome.backendUrl + "test/:name",
//            {name: "@name"},
//            {test: {method: "GET"}}
//        )
//    })
//;
////(function() {
//angular.module('android2chrome.services', ['ngResource'])
//    .factory("resources", function($resource){
//        return {
////            test: $resource(android2chrome.backendUrl + "test/:name", {
////                    name: "@name"
////                },
////                {
////                    query: {method: 'GET', params: {}, isArray: false}
////                }
////            )
//            test: alert("ciao")
//        }
//        })

;