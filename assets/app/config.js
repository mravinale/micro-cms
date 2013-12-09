'use strict';

define(['app','angular', 'main/scripts/controllers/partials/navigator', 'main/scripts/controllers/singles/home', 'main/scripts/controllers/singles/blog',
    'main/scripts/controllers/singles/blogPage', 'main/scripts/controllers/singles/about'], function (app, angular) {

        app.config(['$routeProvider', '$provide', '$httpProvider', function($routeProvider, $provide, $httpProvider) {
                $routeProvider.
                    when('/home', {
                        templateUrl: 'app/main/views/singles/home.html',
                        controller: "homeController"
                    })
                    .when('/blog', { templateUrl: 'app/main/views/singles/blog.html', controller: 'blogController' })
                    .when('/blogPage/:id', { templateUrl: 'app/main/views/singles/blogPage.html', controller: 'blogPageController' })
                    .when('/about', { templateUrl: 'app/main/views/singles/about.html', controller: 'aboutController' })
                    .otherwise({
                        redirectTo: '/home'
                    });
            }]
        );

        app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {

            $rootScope.isAuthenticated = false;

            //when the route is changed scroll to the proper element.
            $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {

                $rootScope.isMainSelected = false;
                $rootScope.isFeature1Selected = false;
                $rootScope.isFeature2Selected = false;
                $rootScope.isFeature3Selected = false;

                switch($location.hash()){

                    case "main":
                        $rootScope.isMainSelected = true;
                        break;
                    case "feature1":
                        $rootScope.isFeature1Selected = true;
                        break;
                    case "feature2":
                        $rootScope.isFeature2Selected = true;
                        break;
                    case "feature3":
                        $rootScope.isFeature3Selected = true;
                        break;

                }

            });
        });
    }
);