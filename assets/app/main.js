'use strict';

require.config({
    waitSeconds: 60,
    urlArgs: 'cb=' + Math.floor(new Date().valueOf()).toString(),
    paths: {
        angular: '../../js/angular/angular.min',
        angularRoute: '../../js/angular/angular-route.min'

    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularRoute: {
            deps: ['angular']
        }
    }
});

require([
    'angular',
    'config'
], function (angular) {
    angular.bootstrap(document, ['Heracles']);
});