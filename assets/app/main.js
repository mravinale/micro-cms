'use strict';

require.config({
    waitSeconds: 60,
    urlArgs: 'cb=' + Math.floor(new Date().valueOf()).toString(),
    paths: {
        'jQuery': '../../js/jquery/jquery-1.9.1',
        'aloha': '../../js/aloha',
        'angular': '../../js/angular/angular.min',
        'angularRoute': '../../js/angular/angular-route.min',
        'angular-ui': '../../js/angular/angular-ui.min',
        'angular-strap': '../../js/angular/angular-strap.min',
        'angular-bootstrap-tpls': '../../js/angular/ui-bootstrap-tpls-0.5.0.min',
        'bootstrap': '../../js/boostrap/bootstrap',
        'modernizr': '../../js/jquery/modernizr-2.5.3',
        'holder':'../../js/holder',
        'angular-aloha': 'main/scripts/directives/angular-aloha',
        'base': 'main/scripts/controllers/base'
    },
    shim: {
        'jQuery': { 'exports': 'jQuery' },
        'angular': { 'exports': 'angular' },
        'angularRoute': { deps: ['angular'] },
        'holder': { 'exports': 'holder' },
        'angular-ui': { deps: ['angular'] },
        'angular-strap': { deps: ['angular'] },
        'angular-bootstrap-tpls': { deps: ['angular'] },
        'angular-aloha': { deps: ['jQuery','angular','aloha'] }
    }
});

require(['jQuery',
    'angular',
    'config'
], function ($,angular) {
    angular.bootstrap(document, ['Heracles']);
});