define(['app','base', '../../services/home'], function (app) {
    app.controller('homeController', function ($rootScope, $scope, homeService) {
        
        $scope.slides = [];
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide1.jpg' });
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide2.jpg' });
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide3.jpg' });

        var getVisionInfo = function () {
            homeService.getVisionInfo("vision").then(function(visions) {
                $scope.vision1 = _.where(visions.data, {subtype: "vision1"})[0];
                $scope.vision2 = _.where(visions.data, {subtype: "vision2"})[0];
                $scope.vision3 = _.where(visions.data, {subtype: "vision3"})[0];
                $scope.visionTitle = _.where(visions.data, {subtype: "visionTitle"})[0];
            }, function(error) {
                console.log(error);
            });
        };

        var getServiceInfo = function () {
            homeService.getServiceInfo().then(function (services) {
                $scope.service1 = _.where(services.data, {subtype: "service1"})[0];
                $scope.service2 = _.where(services.data, {subtype: "service2"})[0];
                $scope.service3 = _.where(services.data, {subtype: "service3"})[0];
                $scope.serviceTitle = _.where(services.data, {subtype: "serviceTitle"})[0];
            }, function (error) {
                console.log(error);
            });
        };

        var getAboutInfo = function () {
            homeService.getAboutInfo().then(function (abouts) {
                $scope.about1 = _.where(abouts.data, {subtype: "about1"})[0];
                $scope.about2 = _.where(abouts.data, {subtype: "about2"})[0];
                $scope.about3 = _.where(abouts.data, {subtype: "about3"})[0];
                $scope.aboutTitle = _.where(abouts.data, {subtype: "aboutTitle"})[0];
            }, function (error) {
                console.log(error);
            });
        };

        var visionInfoListener = $scope.$on('UpdateVision', function (event, editable) {

            homeService.updateVisionInfo(editable).then(function (result) {
                console.log(result[0]);
            }, function (error) {
                console.log(error);
            });
            
        });

        var serviceInfoListener = $scope.$on('UpdateService', function (event, editable) {

            homeService.updateServiceInfo(editable).then(function (result) {
                console.log(result[0]);
            }, function (error) {
                console.log(error);
            });

        });

        var aboutInfoListener = $scope.$on('UpdateAbout', function (event, editable) {

            homeService.updateAboutInfo(editable).then(function (result) {
                console.log(result[0]);
            }, function (error) {
                console.log(error);
            });

        });
        


        $scope.$on("$destroy", function () {
            visionInfoListener();
            serviceInfoListener();
            aboutInfoListener();
        });

        $scope.init = function () {
            getVisionInfo();
            getServiceInfo();
            getAboutInfo();
        };

        $scope.init();

    });   

});


