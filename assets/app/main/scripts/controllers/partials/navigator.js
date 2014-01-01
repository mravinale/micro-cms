
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

        $scope.init = function () {
            $rootScope.editEnable = false;
            $rootScope.isAuthenticated = false;
        };

        $scope.edit = function () {
            $rootScope.editEnable =  !$rootScope.editEnable;
        };

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

        //menu items class activation
        $scope.isActive = function (location) {
            return location === $location.url();
        };

        $scope.$on('$routeChangeSuccess', function (scope, next, current) {
            if(next.$$route == undefined) return;

            $scope.editButtonDisabled = next.$$route.controller == 'blogController';
            $scope.createButtonDisabled = next.$$route.controller == 'blogPageController' || next.$$route.controller == 'homeController';
            $scope.deleteButtonDisabled =  next.$$route.controller == 'homeController' || next.$$route.controller == 'blogController';

        });

        $scope.showLogin = function () {
            $dialog.dialog({
                backdrop: true,
                keyboard: true,
                dialogFade: true,
                backdropClick: false,
                templateUrl: 'app/main/views/partials/login.html',
                controller: 'dialogController',
                resolve: { $parentScope: function () { return $scope; } }
            }).open();
        };

        $scope.init();
       
    });

   

});



