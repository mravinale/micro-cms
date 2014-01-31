
define(['app','main/scripts/controllers/partials/login','../../services/blog'], function (app) {

    app.controller('navigatorController', function ($rootScope, $q,  $scope, homeService, $modal, $route, $location, blogService) {

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


        $scope.init();
       
    });



   

});



