/* jshint -W043 */
(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(angularBreadcrumb);
    /* @ngInject */
    function angularBreadcrumb($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            templateUrl: 'app/core/angular-breadcrumb/angular-material-breadcrumb.html'
        });
    }
})();
