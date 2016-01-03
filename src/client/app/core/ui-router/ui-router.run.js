(function() {
    'use strict';

    var core = angular.module('app.core');

    core.run(uirouterRun);

    uirouterRun.$inject = ['$rootScope',];

    function uirouterRun($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
        });
    }
})();
