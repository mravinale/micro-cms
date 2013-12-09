define(['app','base','../../services/blog'], function (app) {
    app.controller('blogController', function ($scope, $location, blogService) {
         
        var getAllPost = function () {
            blogService.getAllPost().then(function (result) {
                $scope.previewPosts = result.data;
            }, function (error) {
                console.log(error);
            });
        };

        $scope.init = function () {
            getAllPost();
        };

        $scope.init();

    });
});