'use strict';

define(['app', 'main/scripts/controllers/partials/navigator','main/scripts/controllers/partials/login'], function (app) {//TODO: implement required
    app.controller('BaseCtrl', ['$scope', '$rootScope', '$location','$modal', function ($scope, $rootScope, $location, $modal) {

        $scope.init = function () {
            $rootScope.editEnable = false;
            $rootScope.isAuthenticated = false;
        };


        $scope.showLogin = function () {

            $modal.open({
                backdrop: true,
                //windowClass: 'welcomeModel',
                templateUrl: 'app/main/views/partials/login.html',
                controller: 'loginController',
                resolve: { $parentScope: function () { return $scope; } }
            });
        };

        $scope.init();


    }]);
});