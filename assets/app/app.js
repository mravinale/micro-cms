'use strict';

define(['angular', 'angularRoute', 'bootstrap', 'angular-ui', 'angular-bootstrap-tpls', 'angular-strap', 'modernizr', 'angular-aloha'], function (angular) {

    return angular.module('Heracles', ['ngRoute','ui', 'ui.bootstrap', '$strap.directives', 'aloha', 'compile', 'contenteditable','smoothscroll']);
});

