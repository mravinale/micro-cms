
define(['app','../../services/blog'], function (app) {

    app.controller('dialogController', function ($rootScope, $scope, dialog) {

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

    app.controller('navigatorController', function ($rootScope, $q, $dialog, $scope, homeService, $route, $location, blogService) {
         
        $scope.editEnable = false;

        $rootScope.isAuthenticated = false;
      
        $scope.delete = function () {
            blogService.deletePost($route.current.params.id).then(function (response) {
                $location.path("/blog");
            }, function (error) {
                console.log(error.data);
            });
        };

        $scope.create = function () {
            blogService.createPost().then(function (response) {
                $location.path("/blogPage/" + response.data.id);
            }, function (error) {
                console.log(error.data); 
            });
        };
         

        $scope.$on('$routeChangeSuccess', function (scope, next, current) {
           
            if (next.$$route.controller == 'blogPageController') {
                $scope.createButtonDisabled = true;
                $scope.editButtonDisabled = false;
                $scope.deleteButtonDisabled = false;
            }
            else if (next.$$route.controller == 'blogController') {
                $scope.createButtonDisabled = false;
                $scope.editButtonDisabled = true;
                $scope.deleteButtonDisabled = true;
            }
            else if (next.$$route.controller == 'homeController') {
                $scope.createButtonDisabled = true;
                $scope.editButtonDisabled = false;
                $scope.deleteButtonDisabled = true;
            }
             
        });

        $scope.showLogin = function () {

            var login = $dialog.dialog({
                backdrop: true,
                keyboard: true,
                dialogFade: true,
                backdropClick: false,
                templateUrl: 'app/main/views/partials/login.html',
                controller: 'dialogController',
                resolve: {
                    $parentScope: function () {
                        return $scope;
                    }
                }
            });

            login.open().then(function (result) {
                console.log(result);
            });

        };
       
    });

   

});



