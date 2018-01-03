(function () {
    angular
        .module('financeiroConfig')
        .config(financeiroTranslateConfig);

    financeiroTranslateConfig.$inject = ['$translateProvider'];

    function financeiroTranslateConfig($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: './resources/locale/',
            suffix: '.json'
        });

        //avoids Cross-site Scripting (XSS)
        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.determinePreferredLanguage(function () {
            switch ($translateProvider.resolveClientLocale().substr(0, 2)) {
                case "pt":
                    return "pt-Br";
                case "es":
                    return "es-Es";
                default:
                    return "pt-Br";
            }
        });
    }

})();