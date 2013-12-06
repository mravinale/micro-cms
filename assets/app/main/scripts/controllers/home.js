'use strict';

define(['app', 'angular', 'main/scripts/controllers/base'], function (app, angular) {
    angular.module('Heracles').controller('HomeCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        //Initialization
        $scope.init();

    }]);
});