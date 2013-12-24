'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('android2chrome.services', ["ng", "ngResource"])
    .factory('resources', function($resource){
        var addResource = function(name, url, params, actions){
            resources[name] = $resource(android2chrome.backendUrl + url, params, actions);
        };

        var resources = {};

        addResource('authentication', '/register/:op/:user.json',
            {
                op: "@op",
                user: "@user"
            },
            {
                register: {method:"POST"},
                login: {method:"POST"},
                logout: {method:"POST"}
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