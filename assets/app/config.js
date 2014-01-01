'use strict';

define(['app','angular', 'main/scripts/controllers/partials/navigator', 'main/scripts/controllers/singles/home', 'main/scripts/controllers/singles/blog',
    'main/scripts/controllers/singles/blogPage', 'main/scripts/controllers/singles/about'], function (app, angular) {

        app.config(['$routeProvider', '$provide', '$httpProvider', function($routeProvider, $provide, $httpProvider) {
                $routeProvider
                    .when('/home', { templateUrl: 'app/main/views/singles/home.html', controller: "homeController" })
                    .when('/blog', { templateUrl: 'app/main/views/singles/blog.html', controller: 'blogController' })
                    .when('/blogPage/:id', { templateUrl: 'app/main/views/singles/blogPage.html', controller: 'blogPageController' })
                    .when('/about', { templateUrl: 'app/main/views/singles/about.html', controller: 'aboutController' })
                    .otherwise({
                        redirectTo: '/home'
                    });
            }]
        );

        app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {

        });
    }
);