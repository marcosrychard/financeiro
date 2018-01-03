angular.module('appFinanceiro',
    [
        'financeiroConfig',
        'tituloModule',
        'navModule',
        'footerModule',
        'homeModule',
        'entidadeModule',
        'relatorioModule',
        'angularUtils.directives.dirPagination',
        'ui.bootstrap',
        'ngFlash',
        'ncy-angular-breadcrumb',
        'ngAnimate',
        'smart-table',
        'ui.bootstrap'
    ]
);

angular
    .module('appFinanceiro')
    .config(function ($httpProvider) {
        // push the auth interceptor service to the interceptors array
        $httpProvider.interceptors.push('interceptorFactory');
    });
