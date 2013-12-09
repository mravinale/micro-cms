define(['app', 'holder','base', '../../services/home'], function (app) {
    app.controller('homeController', function ($rootScope, $scope, homeService) {
        
        $scope.slides = [];
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide-01.jpg' });
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide-02.jpg' });
        $scope.slides.push({ text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', image: '/images/slide-03.jpg' });

        var getPreviewInfo = function () {
            homeService.getPreviewInfo().then(function(editables) {
                $scope.editable1 = editables.data[0];
                $scope.editable2 = editables.data[1];
                $scope.editable3 = editables.data[2];
            }, function(error) {
                console.log(error);
            });
        };

        var getFeaturettes = function () {
            homeService.getFeaturettes().then(function (editables) {
                $scope.featurette1 = editables.data[0];
                $scope.featurette2 = editables.data[1];
                $scope.featurette3 = editables.data[2];
            }, function (error) {
                console.log(error);
            });
        };

        var previewInfoListener = $scope.$on('UpdatePreviewInfo', function (event, editable) {

            homeService.updatePreviewInfo(editable).then(function (result) {
                console.log(result.content);
            }, function (error) {
                console.log(error);
            });
            
        });
        
        var featuretteListener = $scope.$on('UpdateFeaturette', function (event, editable) {
            debugger;
            homeService.updateFeaturette(editable).then(function (result) {
                console.log(result.content);
            }, function (error) {
                console.log(error);
            });

        });

        $scope.$on("$destroy", function () {
            previewInfoListener();
            featuretteListener();
        });

        $scope.init = function () {
            getPreviewInfo();
            getFeaturettes();
        };

        $scope.init();

    });   

});


