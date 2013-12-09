define(['app'], function (app) {
    
    app.service('homeService', ['$http', function ($http) {

        var urlBase = '/api/home/';

        this.getPreviewInfo = function () {
            return $http.get(urlBase + 'PreviewInfo');
        };
        
        this.getFeaturettes = function () {
            return $http.get(urlBase + 'Featurette');
        };

        this.updatePreviewInfo = function (editable) { 
            return $http.put(urlBase + 'UpdatePreviewInfo/' + editable.id, editable);
        };

        this.updateFeaturette = function (editable) {
            return $http.put(urlBase + 'UpdateFeaturette/' + editable.id, editable);
        };

        
    }]);

});




