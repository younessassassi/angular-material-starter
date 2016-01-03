(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[Angular Material Starter Error] ',
        appTitle: 'Angular Material'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider',
                         'exceptionHandlerProvider', '$breadcrumbProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider,
                       exceptionHandlerProvider, $breadcrumbProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'dashboard',
            includeAbstract: true
        });
    }
})();