define(['app', 'base', '../../services/blog'], function (app) {

    app.controller('blogPageController', function ($scope, blogService, $route, $timeout) {

        $scope.init = function () {
            blogService.getPost($route.current.params.id).then(function (result) {
                $scope.post = result.data[0];
            }, function (error) {
                console.log('Unable to load preview page data: ' + error.message);
            });
        };

        var listener = $scope.$on('UpdatePost', function (event, post) {
            post.title = $scope.post.title;

            blogService.updatePost(post).then(function (result) {
                console.log(result.content);
            }, function (error) {
                console.log(error);
            });
            
        });

        $scope.$on("$destroy", function () {
            listener();
        });

        $scope.init();

    });

});




