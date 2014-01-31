'use strict';

require.config({
    waitSeconds: 60,
   // urlArgs: 'cb=' + Math.floor(new Date().valueOf()).toString(),
    paths: {
        'jQuery': '../../js/jquery/jquery-1.9.1.min',
      //  'custom': '../../js/custom',
       // 'aloha': ['http://cdn.aloha-editor.org/0.23.25/lib/aloha'],//'../../js/aloha',
        'underscore': '../../js/underscore/underscore-min',
        'aloha':  '../../js/aloha',
        'angular': '../../js/angular/angular.min',
        'angularRoute': '../../js/angular/angular-route.min',
        'angularUI': '../../js/angular/ui-bootstrap-tpls-0.10.0.min',
        'bootstrap': '../../js/bootstrap/bootstrap',
        'modernizr': '../../js/jquery/modernizr-2.5.3',
        'holder':'../../js/holder',
        'angular-aloha': 'main/scripts/directives/angular-aloha',
        'base': 'main/scripts/controllers/base'
    },
    priority: ["jQuery", "angular","angularRoute","angularUI","angular-aloha"],
    shim: {
        'jQuery': { 'exports': 'jQuery' },
     //   'custom': { exports: 'custom', deps: ['jQuery'] },
        'angular': { 'exports': 'angular' },
        'angularRoute': { deps: ['angular'] },
        'holder': { 'exports': 'holder' },
        'angularUI': { deps: ['angular'] },
        'angular-aloha': { deps: ['jQuery','angular'] }
    }
});

require(['jQuery',
    'angular',
    'underscore',
    'config'
 //   'custom'
], function ($,angular) {
    angular.bootstrap(document, ['Heracles']);
});