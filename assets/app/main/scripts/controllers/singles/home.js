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

        var getServices = function () {
            homeService.getServicesInfo().then(function (services) {
                $scope.service1 = _.where(services.data, {subtype: "service1"})[0];
                $scope.service2 = _.where(services.data, {subtype: "service2"})[0];
                $scope.service3 = _.where(services.data, {subtype: "service3"})[0];
                $scope.serviceTitle = _.where(visions.data, {subtype: "serviceTitle"})[0];
            }, function (error) {
                console.log(error);
            });
        };

        var previewInfoListener = $scope.$on('Updatevision', function (event, editable) {

            homeService.updatePreviewInfo(editable).then(function (result) {
                console.log(result[0]);
            }, function (error) {
                console.log(error);
            });
            
        });
        
        var featuretteListener = $scope.$on('UpdateFeaturette', function (event, editable) {
            homeService.updateFeaturette(editable).then(function (result) {
                console.log(result[0]);
            }, function (error) {
                console.log(error);
            });

        });

        $scope.$on("$destroy", function () {
            previewInfoListener();
            featuretteListener();
        });

        $scope.init = function () {
            getVisionInfo();
            getFeaturettes();
        };

        $scope.init();

    });   

});


