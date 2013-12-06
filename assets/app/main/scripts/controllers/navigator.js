'use strict';

define(['app', 'angular', 'main/scripts/controllers/base' ], function (app, angular) {
    angular.module('Heracles').controller('NavigatorCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

        //menu items class activation
        $scope.isActive = function (location) {
            return location === $location.path();
        };

    }]);
});