define(['app'], function (app) {
    
    app.service('blogService', ['$http', function ($http, $q) {

        var urlBase = '/api/blog/';

        this.getPost = function (id) {
            return $http.get(urlBase + 'GetPost/' + id);
        };

        this.getAllPost = function () {
            return $http.get(urlBase + 'GetAllPost');
        };
              
        this.updatePost = function (post) {
            return $http.put(urlBase + 'UpdatePost/' + post.id, post);
        };

        this.createPost = function () {
            return $http.post(urlBase + 'CreatePost');
        };

        this.deletePost = function (id) {
            return $http.delete(urlBase + 'DeletePost/' + id);
        };
        
    }]);

});




