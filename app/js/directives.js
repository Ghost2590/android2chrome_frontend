'use strict';
var NGPRISTINE = 'ng-pristine';
var NGVALID = 'ng-valid';
var NGINVALID = 'ng-invalid';

/* Directives */
angular.module('android2chrome.directives', [])
    .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
//    .directive('ngPassword', function ($parse){
//        return function(scope, elem, attr, ctrl){
//
//        };
//    })
//    .directive('ngBlur', function($parse) {
//        return {
//            restrict: 'A',
//            require: 'ngModel',
//            link: function(scope, element, attr, ctrl) {
//                ctrl.$focused = false;
//                element.addClass(NGPRISTINE);
//
//                element.bind('blur', function(evt) {
//                    if (attr.password){
//                        var pw = $parse(attr.password);
//                        pw = pw(scope);
//                        var pw2 = ctrl.$viewValue;
//
//                        if (pw2 !== pw){
//                            element.addClass(NGINVALID);
////                            element.$setDirty();
//                            element.$dirty = true;
////                            scope.registerForm.$setValidity("registerForm", false);
//                            scope.registerForm._valid = false;
//                        } else {
////                            scope.registerForm.$setValidity("registerForm", true);
//                            scope.registerForm._valid = true;
//                        }
//                    }
//                    element.removeClass(NGPRISTINE);
//                    //scope.$apply(function() {ctrl.$focused = false;});
//                });
//            }
//        }
//    })
;
