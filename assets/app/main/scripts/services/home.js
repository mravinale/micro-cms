define(['app'], function (app) {
    
    app.service('homeService', ['$http', function ($http) {

        var urlBase = '/editable/';

        this.getVisionInfo = function () {
            return $http.get(urlBase + 'VisionInfo');
        };
        
        this.getServiceInfo = function () {
            return $http.get(urlBase + 'ServiceInfo');
        };

        this.updateVisionInfo= function (editable) {
            return $http.put(urlBase + 'UpdateVisionInfo/' + editable.id, editable);
        };

        this.updateServiceInfo = function (editable) {
            return $http.put(urlBase + 'UpdateServiceInfo/' + editable.id, editable);
        };

        
    }]);

});




