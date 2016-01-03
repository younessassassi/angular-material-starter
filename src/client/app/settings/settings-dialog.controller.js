/*jshint multistr: true */
(function() {
    'use strict';

    angular
        .module('app.settings')
        .controller('SettingsDialogController', SettingsDialogController);

    /* @ngInject */
    function SettingsDialogController($rootScope, $mdDialog, $window,
                                      confirmDialog, dataservice, logger) {
        var vm = this;
        vm.dismiss = dismiss;
        vm.setTheme = setTheme;
        vm.themes = [
            {name: 'darkTheme', value: 'Dark'},
            {name: 'dalightBlueTheme', value: 'Light Blue'},
            {name: 'orangeTheme', value: 'Orange'}
        ];
        // vm.openMenu = openMenu;

        activate();

        function activate() {
            logger.info('Activated Settings Dialog Controller');
        }

        function setTheme(theme) {
            $rootScope.theme = theme;
        }

        function dismiss() {
            $mdDialog.cancel();
        }
    }
})();
