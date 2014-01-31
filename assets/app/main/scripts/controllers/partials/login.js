
define(['app'], function (app) {

    app.controller('loginController', function ($rootScope, $scope, $modalInstance) {

        $scope.close = function (result) {
            $modalInstance.close(result);
        };

        $scope.login = function (result) {
          // if ($scope.userName == "admin" && $scope.password == "admin"){
                $rootScope.isAuthenticated = true;
                $modalInstance.close(result);
          //  }
        };

    });

});



