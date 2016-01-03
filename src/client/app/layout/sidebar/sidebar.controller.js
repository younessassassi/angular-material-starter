(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($state, $mdSidenav, routerHelper) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;
        vm.menuItemClicked = menuItemClicked;

        activate();

        function activate() { getNavRoutes(); }

        function menuItemClicked(route) {
            if (!$mdSidenav('left').isLockedOpen()) {
                $mdSidenav('left').close();
            }
            $state.go(route);
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            // var parentMenuName = angular.isUndefined(route.settings) ?
            //                      route.settings.parentMenuName.substr(0, menuName.length) : '';
            var stateMenuName = $state.current.title.substr(0, menuName.length);
            // if (stateMenuName === menuName || stateMenuName === parentMenuName) {
            //     return 'current';
            // }
            // return '';
            return $state.current.title.substr(0,
                menuName.length) === menuName ? 'md-accent md-hue-3 md-raised' : '';
        }
    }
})();
