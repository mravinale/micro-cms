
define(['app'], function (app) {

    app.controller('loginController', function ($rootScope, $scope, dialog) {

        $scope.close = function (result) {
            dialog.close(result);
        };

        $scope.login = function (result) {
            if ($scope.userName == "admin" && $scope.password == "admin"){
                $rootScope.isAuthenticated = true;
                dialog.close(result);
            }
        };

    });

});



