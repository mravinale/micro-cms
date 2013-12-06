'use strict';

define(['app','angular',
    'main/scripts/controllers/home'],
    function (app, angular) {
        angular.module('Heracles').config(
            ['$routeProvider', '$provide', '$httpProvider',
            function($routeProvider, $provide, $httpProvider) {
                $routeProvider.

                    when('/', {
                        templateUrl: 'app/main/views/partials/home.html',
                        controller: "HomeCtrl"
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
            }]
        );
    }
);